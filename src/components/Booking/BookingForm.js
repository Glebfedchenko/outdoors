import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "./FormFields";
import {
  minLength2,
  maxLength15,
  alphaNumeric,
  aol,
  required,
  email
} from "./validation";
const BookingForm = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "BookingForm"
})(BookingForm);
