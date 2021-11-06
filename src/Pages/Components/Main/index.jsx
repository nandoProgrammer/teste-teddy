import React, { useState } from 'react'

import { MainStyle, BoxInfo, DocumentsBox, WrapperItem, Layer, Item, BoxItemsStatus, StatusItem, List } from './style'
import { Row, Column, Button, ButtonRounded } from '../../styles';

import data from '../../../data';

const Main = () => {
    const [modalStatus, setModalStatus] = useState('none');

    const openModal = () => {
       setModalStatus('block');
    }

    return (
        <>
        <Layer display={modalStatus}>
            <BoxInfo>

            </BoxInfo>
        </Layer>
        <MainStyle>
           
            <Row content={'space-between'}>
              <Column width={'30%'}>
                   <h2>Informações da Solicitação</h2>
                   <List>
                      <li>
                        <span><strong>Título da soliitação:</strong> { data[0].solicitacao }</span>
                      </li>
                      <li>
                        <span><strong>Solicitado por:</strong> { data[0].nome }</span>
                      </li>
                      <li>
                        <span><strong>Data da soliitação:</strong> { data[0].data }</span>
                      </li>
                      <li>
                        <span><strong>Razão Social:</strong> { data[0].razao }</span>
                      </li>
                      <li>
                        <span><strong>CNPJ:</strong> { data[0].cnpj }</span>
                      </li>
                   </List>
              </Column>
              <DocumentsBox> 
                  <Row content={'flex-end'}>
                    <Button onClick={openModal}>Aceitar Open Finance</Button> 
                    <ButtonRounded></ButtonRounded> 
                  </Row>
                  <Column>
                    <h2>Documentos Solicitados</h2>
                    <BoxItemsStatus>
                        <WrapperItem>
                            <span>Documento</span>
                            <span>Status</span>
                        </WrapperItem>
                        <Column>
                            <Item> 
                               <WrapperItem>
                                    <span>Capa do IPTU</span>
                                    <StatusItem>
                                            ok
                                    </StatusItem>
                               </WrapperItem>
                            </Item>
                            <Item> 
                               <WrapperItem>
                                    <span>Dados Pessoais</span>
                                    <StatusItem>
                                            ok
                                    </StatusItem>
                               </WrapperItem>
                            </Item>
                            <Item> 
                               <WrapperItem>
                                    <span>Balancete 2020</span>
                                    <StatusItem>
                                            ok
                                    </StatusItem>
                               </WrapperItem>
                            </Item>
                            
                        </Column>
                    </BoxItemsStatus>    
                </Column>
              </DocumentsBox> 
            </Row>
        </MainStyle>
        </>
    )
}

export default Main;
