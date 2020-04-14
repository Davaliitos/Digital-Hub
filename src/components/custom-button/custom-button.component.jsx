import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({children, disabled, ...otherProps}) => (
    <button  className={`${disabled ? 'disabled' : ''} custom-button`} {...otherProps} disabled={disabled}>
        {children}
    </button>
)

export default CustomButton;