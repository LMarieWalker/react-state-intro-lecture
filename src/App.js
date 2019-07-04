import React from 'react';
import ButtonClick from './components/ButtonClick';
import ButtonHover from './components/ButtonHover';
import ButtonSubmit from './components/ButtonSubmit';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import SubmitCount from './components/SubmitCount';

class App extends React.Component {
  state = {
    clickCounter: 0,
    hoverCounter: 0,
    submitCounter: 0,
  };

  setClicked = () => {
    this.setState(prevState => {
      return {
        clickCounter: prevState.clickCounter + 1,
      };
    });
  };

  setHovered = () => {
    this.setState(prevState => {
      return {
        hoverCounter: prevState.hoverCounter + 1,
      };
    });
  };

  setSubmitted = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        submitCounter: prevState.submitCounter + 1,
      };
    });
  };

  render() {
    return (
      <>
        <ButtonClick setClicked={this.setClicked} />
        <ClickCount count={this.state.clickCounter} />

        <ButtonHover setHovered={this.setHovered} />
        <HoverCount count={this.state.hoverCounter} />

        <ButtonSubmit setSubmitted={this.setSubmitted} />
        <SubmitCount count={this.state.submitCounter} />
      </>
    );
  };
};

export default App;
