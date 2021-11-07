import React, { useState } from 'react'

import { 
  MainStyle, 
  BoxInfo, 
  CloseBoxInfo, 
  DocumentsBox, 
  WrapperItem, 
  Layer, 
  InputSearch, 
  WrapperItemBoxInfo, 
  ItemBoxItem,
  ItemFinance, 
  InfoItem,  
  Item, 
  BoxItemsStatus, 
  StatusItem, 
  List 
} from './style';

import { Row, Column, Button, ButtonRounded, RoundedItem } from '../../styles';

import data from '../../../data';

const Main = () => {
    const [modalStatus, setModalStatus] = useState('none');

    const openModal = () => {
       setModalStatus('block');
    }

    const closeModal = () => {
       setModalStatus('none');
    }

    return (
        <>
        <Layer display={modalStatus}>
            <BoxInfo>
              <Row content={'space-between'}>
                <Row>
                  <RoundedItem />
                  <div>
                      <h1>Solicitação</h1>
                      <span>Visualize e envie a documentação solicitada</span>
                  </div>
                </Row>
                <CloseBoxInfo onClick={closeModal}></CloseBoxInfo>
              </Row>
              <Column>
                <h4>Buscar por nome</h4>
                <InputSearch placeholder='Digite o nome da instituição'/>
                <WrapperItemBoxInfo>
                   <InfoItem>
                     Remetente
                   </InfoItem>
                   <InfoItem>
                     Destinatário
                   </InfoItem>
                   <InfoItem>
                     Data da criação
                   </InfoItem>
                   <InfoItem>
                     Status
                   </InfoItem>
                   <InfoItem>
                     Ações
                   </InfoItem>
                </WrapperItemBoxInfo>
                <ItemBoxItem>
                  <ItemFinance>
                    Nubank
                  </ItemFinance>
                  <ItemFinance>
                    Nubank
                  </ItemFinance>
                  <ItemFinance>
                    Nubank
                  </ItemFinance>
                  <ItemFinance>
                    Nubank
                  </ItemFinance>
                  <ItemFinance>
                    Nubank
                  </ItemFinance>
                </ItemBoxItem>
              </Column>
              <Row content={'space-between'}>
                <Row>
                  <span>Resultados:</span>
                  <select>
                    <option>1-10</option>
                    <option>2-10</option>
                    <option>3-10</option>
                    <option>4-10</option>
                    <option>5-10</option>
                    <option>6-10</option>
                    <option>7-10</option>
                    <option>8-10</option>
                    <option>9-10</option>
                    <option>10-10</option>
                  </select>
                  <span>De 16</span>
                </Row>
                <Row>
                  <span> anterior </span>
                  <ButtonRounded />
                  <ButtonRounded />
                  <span> próximo </span>
                </Row>
                
              </Row>
              <Row content={'flex-end'}>
                <Button>Agendar com outra instituição</Button>
              </Row>
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
                            {
                              
                              data[0].documentos.map((item) => (
                                <Item> 
                                    <WrapperItem>
                                          <span>{item.nome}</span>
                                          {
                                             item.status === 0 && (
                                                <StatusItem background={'red'}>
                                                  ok
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 1 && (
                                                <StatusItem background={'orange'}>
                                                  ok
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 2 && (
                                                <StatusItem background={'green'}>
                                                  ok
                                                </StatusItem>
                                             )
                                          }
                                          
                                    </WrapperItem>
                                </Item>
                              ))
                            }
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
