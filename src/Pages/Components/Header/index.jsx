import React from 'react'

import { HeaderTop, Logo } from './style'
import { Row, RoundedItem, Title, SubTitle} from '../../styles';

const Header = () => {
    const reload = () => {
        window.location.href="#";
    }

    return (
        <HeaderTop>
            <Row align={'center'} mobile={'row'}>
                <RoundedItem widthValue={'75'} height={'75'} background={'#e07126'}>
                   <i class="fas fa-file-alt"></i>
                </RoundedItem>
                <div>
                    <Title>Solicitação</Title>
                    <SubTitle>Visualize e envie a documentação solicitada</SubTitle>
                </div>
            </Row>
            <Logo src="https://teddydigital.io/wp-content/uploads/2021/05/Logo-teddy-360.png"  alt="" onClick={reload} /> 
        </HeaderTop>
    )
}

export default Header;
