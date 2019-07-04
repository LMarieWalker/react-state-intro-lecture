import React from 'react';

class ButtonHover extends React.Component {
  state = {
    hovered: false,
  };

  setHovered = () => {
    this.setState({
      hovered: true,
    });
  };

  render() {
    const buttonText = this.state.hovered ? 'Hovered' : 'Not Hovered';

    return (
      [
        <div>
          <button onMouseOver={this.setHovered}>{buttonText}</button>
        </div>
      ]
    );
  };
};

export default ButtonHover;
