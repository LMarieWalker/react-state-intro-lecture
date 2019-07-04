import React from 'react';

class ButtonHover extends React.Component {
  state = {
    hovered: 0,
  };

  setHovered = () => {
    this.setState(prevState => {
      return {
        hovered: prevState.hovered + 1,
      };
    });
  };

  render() {
    const buttonText = this.state.hovered ? `Hovered Over ${this.state.hovered} times` : 'Not Hovered Over';

    return (
      <>
        <div>
          <button onMouseOver={this.setHovered}>{buttonText}</button>
        </div>
      </>
    );
  };
};

export default ButtonHover;
