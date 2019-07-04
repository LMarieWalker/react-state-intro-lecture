import React from 'react';

class ButtonClick extends React.Component {
  state = {
    clickCounter: 0,
  };

  setClicked = () => {
    this.setState(prevState => {
      return {
        clickCounter: prevState.clickCounter + 1,
      };
    });
  };

  render() {
    const buttonText = this.state.clickCounter ? `Clicked ${this.state.clickCounter} Times`  : "Not Clicked";

    return (
      <>
        <div>
          <button onClick={this.setClicked}>{buttonText}</button>
        </div>
      </>
    );
  };
};

export default ButtonClick;
