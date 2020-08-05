import { useEffect, useState } from 'react';
import axios from 'axios';

import useDebounce from './use-debounce';

const systemSearch = async ({ systemName }) => {
  const { data } = await axios.get('https://www.edsm.net/api-v1/systems', {
    params: {
      systemName, showCoordinates: 1
    },
  });
  return data;
};

export default (value) => {
  const systemName = useDebounce(value, 500);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (systemName) {
      setIsSearching(true);
      systemSearch({ systemName })
        .then(data => setResults(data))
        .then(() => setIsSearching(false));
    } else {
      setIsSearching(false);
      setResults([]);
    }
  }, [systemName]);

  return [isSearching, results];
};
