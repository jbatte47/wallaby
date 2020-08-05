import React from 'react';
import NumberFormat from 'react-number-format';

export default ({ distance }) => <NumberFormat
  value={distance}
  displayType={'text'}
  suffix={'ly'}
  decimalScale={2}
/>;
