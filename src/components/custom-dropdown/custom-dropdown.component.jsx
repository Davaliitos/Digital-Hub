import React from 'react'

import './custom-dropdown.style.scss'

const CustomDropdown = ({ handleChange, options, ...otherProps }) => (
    <div className="group">
        <select {...otherProps} className="custom-dropdown" onChange={handleChange}>
            <option value="">Please select an account</option>
            {
                options.map((option,index) => (
                    <option key={index} value={option.key}>{option.key} - {option.value}</option>
                ))
            }
        </select>
    </div>
)


export default CustomDropdown