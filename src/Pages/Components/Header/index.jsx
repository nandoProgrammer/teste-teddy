import React from 'react'

import { HeaderTop } from './style'
import { Row, RoundedItem } from '../../styles';

const Header = () => {
    return (
        <HeaderTop>
            <Row>
                <RoundedItem />
                <div>
                    <h1>Solicitação</h1>
                    <span>Visualize e envie a documentação solicitada</span>
                </div>
            </Row>
            <h1>Logo</h1> 
        </HeaderTop>
    )
}

export default Header;
