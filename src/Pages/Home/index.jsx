import React from 'react'

import Header from '../Components/Header'

import { Wrapper } from '../styles';

const Home = () => {
    return (
        <Wrapper>
            <Header>
                <div>
                    <h1>Solicitação</h1>
                    <span>Visualize e envie a documentação solicitada</span>
                </div>
                <h1>Logo</h1> 
            </Header>
        </Wrapper>
    )
}

export default Home;
