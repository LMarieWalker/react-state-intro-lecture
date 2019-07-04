import React from 'react';

function ButtonClick({ setClicked }) {
  return (
    <>
      <div>
        <button onClick={setClicked}>Click me to increase count!</button>
      </div>
    </>
  );
};

export default ButtonClick;
