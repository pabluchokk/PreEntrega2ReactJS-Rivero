import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import './CartWidget.css'

export const CartWidget = () => {
    return (
    <div className='carrito'>
        <Icon.Cart />
        <div>
            <span>4</span>
        </div>
    </div>
    )
}
