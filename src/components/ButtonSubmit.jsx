import React from 'react';

class ButtonSubmit extends React.Component {
  state = {
    submitted: 0,
  };

  setSubmitted = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        submitted: prevState.submitted + 1,
      };
    });
  };

  render() {
    const buttonText = this.state.submitted ? `Submitted ${this.state.submitted} times` : 'Not Submitted';

    return (
      <>
        <form onSubmit={this.setSubmitted}>
          <button type='submit'>{buttonText}</button>
        </form>
      </>
    );
  };
};

export default ButtonSubmit;
