import React from 'react';

// same thing except show an h1 that says the ids of the forms that have been submitted

function ButtonSubmit ({ setSubmitted }) {
  return (
    <>
      <form onSubmit={ setSubmitted }>
        <button type='submit'>Submit Button</button>
      </form>
    </>
  );
};

export default ButtonSubmit;
