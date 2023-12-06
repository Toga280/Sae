import React from 'react';
import { PinInput } from 'react-input-pin-code';

export default () => { 
  const [values, setValues] = React.useState(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

  return (
    <PinInput inputClassName='CodePin'
      values={values}
      onChange={(value, index, values) => setValues(values)}
    />
  );


};