import React, { useState } from 'react'

import { 
  MainStyle, 
  BoxInfo, 
  CloseBoxInfo, 
  DocumentsBox, 
  WrapperItem, 
  BoxOpenFinanceItems,
  Layer, 
  InputSearch, 
  WrapperItemBoxInfo, 
  ItemBoxItem,
  ItemFinance, 
  InfoItem,  
  Item, 
  BoxItemsStatus, 
  SelectItem,
  StatusItem,
  IconStatusItem, 
  List 
} from './style';

import { Row, Column, Button,  ButtonRounded, RoundedItem, BoxRounded, Title, SubTitle } from '../../styles';

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
                <Row align={'center'}>
                  <RoundedItem width={'70'} height={'70'}>
                  <i class="fas fa-database"></i>
                  </RoundedItem>
                  <div>
                      <Title>Open Finance</Title>
                      <SubTitle>Meus compartilhamentos com instituições</SubTitle>
                  </div>
                </Row>
                <CloseBoxInfo onClick={closeModal}>
                <i class="fas fa-times"></i>
                </CloseBoxInfo>
              </Row>
              <BoxOpenFinanceItems>
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
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    <span>Nubank</span>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    Teddy Investimentos
                  </ItemFinance>
                  <ItemFinance>
                    27/07/2021
                  </ItemFinance>
                  <ItemFinance>
                    <BoxRounded width={'150'} height={'32'} background={'#e07126'}></BoxRounded>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}></RoundedItem>
                  </ItemFinance>
                </ItemBoxItem>
                <ItemBoxItem>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    <span>Nubank</span>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    Teddy Investimentos
                  </ItemFinance>
                  <ItemFinance>
                    27/07/2021
                  </ItemFinance>
                  <ItemFinance>
                    <BoxRounded width={'150'} height={'32'} background={'#e07126'}></BoxRounded>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}></RoundedItem>
                  </ItemFinance>
                </ItemBoxItem>
                <ItemBoxItem>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    <span>Nubank</span>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}>
                      
                    </RoundedItem>
                    Teddy Investimentos
                  </ItemFinance>
                  <ItemFinance>
                    27/07/2021
                  </ItemFinance>
                  <ItemFinance>
                    <BoxRounded width={'150'} height={'32'} background={'#e07126'}></BoxRounded>
                  </ItemFinance>
                  <ItemFinance>
                    <RoundedItem width={'30'} height={'30'}></RoundedItem>
                  </ItemFinance>
                </ItemBoxItem>
              </BoxOpenFinanceItems>
              <Row content={'space-between'} padding={'20px 0'}>
                <Row>
                  <span>Resultados:</span>
                  <SelectItem>
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
                  </SelectItem>
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
                <Button background={'#007bff'}>Agendar com outra instituição</Button>
              </Row>
            </BoxInfo>
        </Layer>
        <MainStyle>
            <Row content={'space-between'}>
              <Column width={'30%'} padding={'30px 0 0 0'}>
                   <Title>Informações da Solicitação</Title>
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
                  <Row content={'flex-end'} align={'center'}>
                    <Button onClick={openModal} background={'#e07126'}>Aceitar Open Finance</Button> 
                    <ButtonRounded>
                      <i class="fas fa-question"></i>
                    </ButtonRounded> 
                  </Row>
                  <Column>
                    <Title>Documentos Solicitados</Title>
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
                                                <StatusItem background={'#b21f2d'}>
                                                  <IconStatusItem>
                                                    <i class="fas fa-exclamation-circle"></i>
                                                  </IconStatusItem>
                                                  A validar
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 1 && (
                                                <StatusItem background={'#c69500'}>
                                                  <IconStatusItem>
                                                    <i class="fas fa-exclamation"></i>
                                                  </IconStatusItem>
                                                  Pendente
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 2 && (
                                                <StatusItem background={'#1c7430'}>
                                                  <IconStatusItem>
                                                    <i class="fas fa-check"></i>
                                                  </IconStatusItem>
                                                  Validado
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
