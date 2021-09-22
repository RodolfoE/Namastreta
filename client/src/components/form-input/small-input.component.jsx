import React from 'react';

const SmallFormInput = ({ handleChange, label, ...props }) => (
  <input type={props.type ? props.type : 'text'} value={props.value ? props.value : ''} onChange={handleChange}/>
);

export default SmallFormInput;
