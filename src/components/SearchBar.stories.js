import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBar';

import '../App.css';

export default {
  component: SearchBar,
  title: 'Search Bar'
};

export const Empty = () => <SearchBar onChange={action('search')} />;
