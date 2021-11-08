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
  WrapperAjust,
  InfoText,
  ItemBoxItem,
  ItemFinance, 
  InfoItem,  
  Item,
  SelectItem,
  StatusItem,
  IconStatusItem, 
  List,
  ButtonNavigation
} from './style';

import { 
   Row,
   Column, 
   Button,  
   ButtonRounded, 
   RoundedItem,
   BoxRounded, 
   Title, 
   SubTitle, 
   LineVertical 
} from '../../styles';

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
                <WrapperAjust width={'100%'} margin={'0 10px'}>
                   <InfoItem>
                     <InfoText>Remetente</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem>
                     <InfoText>Destinatário</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem>
                     <InfoText>Data da criação</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem>
                     <InfoText>Status</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem>
                     <InfoText>Ações</InfoText>
                   </InfoItem>
                </WrapperAjust>
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
                <Row align={'center'}>
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
                <Row align={'center'}>
                  <ButtonNavigation> <i class="fas fa-chevron-left"></i> anterior </ButtonNavigation>
                  <ButtonRounded />
                  <ButtonRounded />
                  <ButtonNavigation> próximo <i class="fas fa-chevron-right"></i> </ButtonNavigation>
                </Row>
                
              </Row>
              <Row content={'flex-end'}>
                <Button background={'#1c3b7a'}>Agendar com outra instituição</Button>
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
              <Column width={'70%'} padding={'2% 0 0 2%'} borderLeft={'1px solid #ede8e6'}> 
                  <Row content={'flex-end'} align={'center'}>
                    <Button onClick={openModal} background={'#e07126'}>Aceitar Open Finance</Button> 
                    <ButtonRounded>
                      <i class="fas fa-question"></i>
                    </ButtonRounded> 
                  </Row>
                  <Column>
                    <Title>Documentos Solicitados</Title>
                    <Column padding={'30px 0 0 0'}>
                        <WrapperAjust width={'100%'} padding={'0 110px 0 30px'}>
                            <InfoText>Documento</InfoText>
                            <Row align={'center'}>
                              <LineVertical height={'20px'} margin={'0 10px 0 0'} />
                              <InfoText>Status</InfoText>
                            </Row>
                        </WrapperAjust>
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
                    </Column>    
                </Column>
              </Column> 
            </Row>
        </MainStyle>
        </>
    )
}

export default Main;
