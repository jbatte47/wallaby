import React, { useState } from 'react';

import SearchBar from './SearchBar';
import System from './System';

import useSystemSearch from '../hooks/use-system-search';

const SystemSearch = ({ onCancel, onSystemChosen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, results] = useSystemSearch(searchTerm);
  return <>
    <SearchBar
      onChange={e => setSearchTerm(e.target.value)}
      onBlur={e => {
        if (!e.target.value) {
          onCancel();
        }
      }}
    />
    {isSearching && <h2>Loading...</h2>}
    {!isSearching && results.map(({ name, coords }) => <System
      key={`System-${name}`}
      name={name}
      {...coords}
      onClick={() => onSystemChosen({ name, ...coords })}
    />)}
  </>;
};

export default SystemSearch;
