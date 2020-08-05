import React from 'react';

import bork from './bork.gif';
import diemz from './diemz.gif';
import empty from './empty.gif';
import friendship from './friendship.gif';
import greetings from './greetings.gif';
import hiphop from './hiphop.gif';
import travel from './travel.gif';
import wallaby from './wallaby.gif';

const options = [
  bork, diemz, empty, friendship, greetings, hiphop, travel, wallaby
];
const chooseOption = () => options[Math.floor(Math.random() * options.length)];

export default () => <img className="sidey" src={chooseOption()} alt="waiting for user input..." />;
