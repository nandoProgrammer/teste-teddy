import React from 'react'

import { HeaderTop } from './style'

const Header = (props) => {
    return (
        <HeaderTop>
            {props.children}
        </HeaderTop>
    )
}

export default Header;
