import React from 'react'

import './custom-table.style.scss'

const CustomTable = ({children}) => (
    <table className="custom-table">
        <tbody>
        {children}
        </tbody>
    </table>
)

export default CustomTable