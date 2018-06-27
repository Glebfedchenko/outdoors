import React from 'react';
import cx from 'classnames';

const getValidityClassName = (meta) => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const renderField = (props) => {
  const {
    label, input, type, meta,
  } = props;
  return (
    <div
      className={cx(
        'form__group',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta),
      )}
    >
      <input className="form__input" placeholder={label} {...input} type={type} />
      <label className="form__label">
        {label}
      </label>
      {meta.error
        && meta.touched
        && !meta.active && (
        <div className="feedback-text error-text">
          {meta.error}
        </div>
      )}
    </div>
  );
};
