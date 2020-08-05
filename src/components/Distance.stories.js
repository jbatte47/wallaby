import React from 'react';
import Distance from './Distance';

import '../App.css';

export default {
  component: Distance,
  title: 'Distance',
};

export const ZeroLightYears = () => <Distance distance={0} />;

export const FiftyLightYears = () => <Distance distance={50} />;

export const FiftyThousandLightYears = () => <Distance distance={50000} />;

export const DecimalLightYears = () => <Distance distance={100.2369} />;
