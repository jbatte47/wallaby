import React from 'react';
import Distance from './Distance';

const System = ({ name, x, y, z, isOrigin, distance, ...props }) => <div className="System" {...props}>
  <span className="system-name">{name}</span>
  <div className="coords">
    <span className="x-coords">{x}</span>
    <span className="y-coords">{y}</span>
    <span className="z-coords">{z}</span>
  </div>
  {distance > 0 && <span className="hop-distance"><Distance distance={distance} /></span>}
  {isOrigin && <div className="origin-badge"><span>Origin System</span></div>}
</div>;

export default System;
