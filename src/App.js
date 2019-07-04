import React from 'react';
import ButtonClick from './components/ButtonClick';
import ClickCount from './components/ClickCount';
import ButtonHover from './components/ButtonHover';
import HoverCount from './components/HoverCount';
import ButtonSubmit from './components/ButtonSubmit';
import SubmitCount from './components/SubmitCount';

class App extends React.Component {
  state = {
    clickButtons: [
      {
        id: 1,
        count: 0,
      },
      {
        id: 2,
        count: 2,
      },
    ],
    hoverButtons: [
      {
        id: 1,
        count: 0,
      },
      {
        id: 2,
        count: 2,
      },
    ],
    submitButtons: [
      {
        id: 1,
        count: 0,
      },
      {
        id: 2,
        count: 2,
      },
    ],
  };

  setClicked = id => {
    this.setState(prevState => {
      return {
        clickButtons: prevState.clickButtons.map(clickButton => {
          return {
            ...clickButton,
            count: clickButton.id === id ? clickButton.count + 1 : clickButton.count,
          };
        })
      };
    });
  };

  setHovered = id => {
    this.setState(prevState => {
      return {
        hoverButtons: prevState.hoverButtons.map(hoverButton => {
          return {
            ...hoverButton,
            count: hoverButton.id === id ? hoverButton.count + 1 : hoverButton.count,
          };
        })
      };
    });
  };

  setSubmitted = (e, id) => {
    e.preventDefault();
    console.log('this is e: ', e)
    this.setState(prevState => {
      return {
        submitButtons: prevState.submitButtons.map(submitButton => {
          return {
            ...submitButton,
            count: submitButton.id === id ? submitButton.count + 1 : submitButton.count,
          };
        })
      };
    });
  };

  render() {
    const clickButtonTrackers = this.state.clickButtons.map(clickButton => {
      return (
        <div key={clickButton.id}>
          <ButtonClick setClicked={() => this.setClicked(clickButton.id)} />
          <ClickCount count={clickButton.count} />
        </div>
      );
    });

    const hoverButtonTrackers = this.state.hoverButtons.map(hoverButton => {
      return (
        <div key={hoverButton.id}>
          <ButtonHover setHovered={() => this.setHovered(hoverButton.id)} />
          <HoverCount count={hoverButton.count} />
        </div>
      );
    });

    const submitButtonTrackers = this.state.submitButtons.map(submitButton => {
      return (
        <div key={submitButton.id}>
          <ButtonSubmit setSubmitted={() => this.setSubmitted(submitButton.id)} />
          <SubmitCount count={submitButton.count} />
        </div>
      );
    });

    return (
      <>
        {clickButtonTrackers}
        <hr />
        {hoverButtonTrackers}
        <hr />
        {submitButtonTrackers}
      </>
    );
  };
};

export default App;
