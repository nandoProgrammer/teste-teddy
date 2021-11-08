import React from 'react'

import { HeaderTop } from './style'
import { Row, RoundedItem, Title, SubTitle} from '../../styles';

const Header = () => {
    return (
        <HeaderTop>
            <Row>
                <RoundedItem width={'75'} height={'75'}>
                   <i class="fas fa-file-alt"></i>
                </RoundedItem>
                <div>
                    <Title>Solicitação</Title>
                    <SubTitle>Visualize e envie a documentação solicitada</SubTitle>
                </div>
            </Row>
            <h1>Logo</h1> 
        </HeaderTop>
    )
}

export default Header;
