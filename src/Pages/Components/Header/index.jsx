import React from 'react'

import { HeaderTop } from './style'
import { Row, RoundedItem, Title, SubTitle} from '../../styles';

const Header = () => {
    return (
        <HeaderTop>
            <Row align={'center'} mobile={'row'}>
                <RoundedItem width={'75'} height={'75'} background={'#e07126'}>
                   <i class="fas fa-file-alt"></i>
                </RoundedItem>
                <div>
                    <Title>Solicitação</Title>
                    <SubTitle>Visualize e envie a documentação solicitada</SubTitle>
                </div>
            </Row>
            
            <img width="150" height="auto" src="https://teddydigital.io/wp-content/uploads/2021/05/Logo-teddy-360.png" alt=""/> 
            
        </HeaderTop>
    )
}

export default Header;
