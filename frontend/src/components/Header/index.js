import React from 'react';
import { Link } from "react-router-dom";

const HeaderLayout = ({left, right}) => {
    return (
        <div className='d-flex justify-content-between align-items-center mb-3'>
            { left }
            { right }
        </div>
    )
}

export const AdminPanelHeader = ({title, link, button}) => {
    return (
        <HeaderLayout
            left={ <h1>{ title }</h1> }
            right={ <Link className="text-white bg-primary p-2 rounded" to={ link }>{ button }</Link> }
        />
    )
}

export default HeaderLayout;