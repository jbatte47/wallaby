import React from 'react';
import { action } from '@storybook/addon-actions';

import SystemSearch from './SystemSearch';

import '../App.css';

export default {
  component: SystemSearch,
  title: 'System Search',
};

export const Empty = () => <SystemSearch onCancel={action('cancel')} onSystemChosen={action('systemChosen')} />;
