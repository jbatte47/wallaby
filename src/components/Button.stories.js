import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

import '../App.css';

export default {
  component: Button,
  title: 'Button',
};

export const SetOrigin = () => <Button onClick={action('clicked')}>Set Origin</Button>;

export const AddStop = () => <Button onClick={action('clicked')}>Add Stop</Button>;
