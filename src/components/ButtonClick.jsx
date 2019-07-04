import React from 'react';

class ButtonClick extends React.Component {
  state = {
    clicked: false,
  };

  setClicked = () => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    const buttonText = this.state.clicked ? "Clicked" : "Not Clicked";

    return (
      <>
        <div>
          <button onClick={this.setClicked}>{buttonText}</button>
        </div>
      </>
    );
  };
}

export default ButtonClick;
