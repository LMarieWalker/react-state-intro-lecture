import React from 'react';

function ButtonHover ({ setHovered }) {
  return (
    <>
      <div>
        <button onMouseOver={setHovered}>Hover over me to increase count!</button>
      </div>
    </>
  );
};

export default ButtonHover;
