import {
  calculateDistance, getRoutePermutations, getRouteDistance, optimize, mapHopDistances,
} from './optimizer';

describe('optimizer', () => {
  describe('distance calculator', () => {
    it('should correctly calculate the distance between two spacial points', () => {
      const distance = calculateDistance({ x: 1, y: 1, z: 0 }, { x: 2, y: 1, z: 2 });
      expect(distance).toEqual(2.23606797749979);
    });
  });
  describe('destination permutations generator', () => {
    it('should create all possible permutations that begin and end with the origin', () => {
      const origin = { name: 'origin' };
      const destinations = [
        { name: 'a', meta: 'a stuff' },
        { name: 'b', meta: 'b is better' },
        { name: 'c', meta: 'c rulez' }
      ];
      const permutations = getRoutePermutations(origin, destinations);
      expect(permutations).toMatchSnapshot();
    });
  });
  describe('hop distance calculator', () => {
    it('should correctly calculate the distance for each hop', () => {
      const routeWithHopDistances = mapHopDistances([
        { x: 1, y: 1, z: 0 }, { x: 2, y: 1, z: 2 }, { x: 3, y: 2, z: 4 }
      ]);
      expect(routeWithHopDistances).toMatchSnapshot();
    });
  });
  describe('total route distance calculator', () => {
    it('should correctly calculate the total distance for a route', () => {
      const route = [{ distance: 0 }, { distance: 2.23 }, { distance: 2.44 }];
      const distance = getRouteDistance(route);
      expect(distance).toEqual(4.67);
    });
  });
  describe('create optimized delivery route', () => {
    it('should correctly generate an optimized route', () => {
      const origin = { name: 'origin', x: 0, y: 0, z: 0 };
      const destinations = [
        { name: 'a', meta: 'a stuff', x: 1, y: 1, z: 0 },
        { name: 'b', meta: 'b is better', x: 2, y: 1, z: 2 },
        { name: 'c', meta: 'c rulez', x: 3, y: 2, z: 4 }
      ];
      const optimizedRoute = optimize(origin, destinations);
      expect(optimizedRoute).toMatchSnapshot();
    });
  });
});
