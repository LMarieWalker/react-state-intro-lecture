import React from 'react';

class ButtonHover extends React.Component {
  render() {
    return (
      <>
        <div>
          <button onMouseOver={this.props.setHovered}>Hover Button</button>
        </div>
      </>
    );
  };
};

export default ButtonHover;
