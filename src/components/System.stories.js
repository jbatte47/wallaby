import React from 'react';
import System from './System';

import '../App.css';

export default {
  component: System,
  title: 'System',
};

export const OriginSystem = () => <System name="origin" isOrigin={true} x={0} y={0} z={0} distance={0} />;

export const StopSystem = () => <System name="stop 1" isOrigin={false} x={-9.0625} y={15.25} z={119.1875} distance={4.58257569495584} />;

export const StopSystemWithLongName = () => <System name="stop 1 with an annoyingly long name that should probably be shorter" isOrigin={false} x={-9.0625} y={15.25} z={119.1875} distance={4.58257569495584} />;

export const ReturnTrip = () => <System name="origin" isOrigin={true} x={0} y={0} z={0} distance={11.446279000112114} />;

export const ReturnTripWithLongName = () => <System name="origin with an annoyingly long name that should probably be shorter" isOrigin={true} x={0} y={0} z={0} distance={11.446279000112114} />;
