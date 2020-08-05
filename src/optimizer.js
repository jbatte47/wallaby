import permute from 'heaps-permute';
import { find, first, flow, map, reduce, sortBy } from 'lodash/fp';

const mapWithKey = map.convert({ cap: false });

export const calculateDistance = (a, b) => Math.pow((
  Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2) + Math.pow((b.z - a.z), 2)
), .5);

export const getRoutePermutations = (origin, destinations) => flow(
  map(({ name }) => name),
  permute,
  map(items => [
    { ...origin, isOrigin: true },
    ...map(name => find({ name })(destinations))(items),
    { ...origin, isOrigin: true }])
)(destinations);

export const mapHopDistances = route => mapWithKey(
  (point, index) => index === 0
    ? { ...point, distance: 0 }
    : { ...point, distance: calculateDistance(route[index - 1], point) }
)(route);

export const getRouteDistance = reduce((result, { distance }) => result + distance, 0);

export const optimize = (origin, destinations) => flow(
  map(route => mapHopDistances(route)),
  map(route => ({ route, distance: getRouteDistance(route) })),
  sortBy('distance'),
  first
)(getRoutePermutations(origin, destinations));

export default optimize;
