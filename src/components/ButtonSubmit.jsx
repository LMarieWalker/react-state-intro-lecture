import React from 'react';

class ButtonSubmit extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.setSubmitted}>
          <button type='submit'>Submit Button</button>
        </form>
      </>
    );
  };
};

export default ButtonSubmit;
