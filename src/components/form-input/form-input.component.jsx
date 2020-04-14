import React from "react";

import "./form-input.style.scss";



const FormInput = ({ handleChange, label,valid,errorLabel, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
    {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
        </label>)
        :
        null
    }
    {
        (valid !== false) ?
        null
        :
        (<label className="error-label">{errorLabel}</label>)
    }
  </div>
);

export default FormInput;
