import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '50.9375rem'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
