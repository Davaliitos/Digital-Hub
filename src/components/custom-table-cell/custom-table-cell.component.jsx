import React from 'react';

import './custom-table-cell.style.scss'

const CustomTableCell = ({children}) => (
    <td className="custom-cell">
        {children}
    </td>
)

export default CustomTableCell