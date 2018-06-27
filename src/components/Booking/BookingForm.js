import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { renderField } from './FormFields';
import {
  minLength2, maxLength15, aol, required, email,
} from './validation';

const BookingForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit} className="form">
    <div className="u-margin-bottom-medium">
      <h2 className="heading-secondary">
Start booking now!
      </h2>
    </div>
    <Field
      name="username"
      type="text"
      component={renderField}
      label="Full name"
      validate={[required, maxLength15, minLength2]}
    />
    <Field
      name="email"
      type="email"
      component={renderField}
      label="Email address"
      validate={[required, email]}
      warn={aol}
    />
    <div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </div>
  </form>
);

BookingForm.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default reduxForm({
  form: 'BookingForm',
})(BookingForm);
