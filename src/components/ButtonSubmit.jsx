import React from 'react';

class ButtonSubmit extends React.Component {
  state = {
    submitted: false,
  };

  setSubmitted = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  render() {
    const buttonText = this.state.submitted ? 'Submitted' : 'Not Submitted';

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
