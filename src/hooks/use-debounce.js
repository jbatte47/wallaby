import { useEffect, useState } from 'react';

export default (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(
    () => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    },
    [value, delay]
  );

  return debouncedValue;
};
