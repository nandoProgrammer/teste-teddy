import React, { useState } from 'react'

import { 
  MainStyle, 
  BoxInfo, 
  CloseBoxInfo, 
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
  ButtonNavigation,
  ButtonRoundedPagination,
  RowNavModal
} from './style';

import { 
   Row,
   Column, 
   Button,  
   ButtonRounded, 
   RoundedItem,
   RoundedItemImage,
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
                  <RoundedItem width={'70'} height={'70'} background={'#e07126'}>
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
                   <InfoItem width={'20%'}>
                     <InfoText>Remetente</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem width={'35%'}>
                     <InfoText>Destinatário</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem width={'20%'}>
                     <InfoText>Data da criação</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem width={'15%'}>
                     <InfoText>Status</InfoText>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem width={'10%'}>
                     <InfoText>Ações</InfoText>
                   </InfoItem>
                </WrapperAjust>
                
                <ItemBoxItem>
                  <ItemFinance width={'20%'}>
                    <RoundedItemImage width={'50'} height={'50'} background={'https://media.glassdoor.com/sqll/827975/nubank-brasil-squareLogo-1621263640678.png'}>
                      
                    </RoundedItemImage>
                    <span>Nubank</span>
                  </ItemFinance>
                  <ItemFinance width={'35%'}>
                    <RoundedItemImage width={'50'} height={'50'} background={'https://teddydigital.io/wp-content/uploads/2019/12/teddy-open-banking.png'}>
                      
                    </RoundedItemImage>
                    Teddy Investimentos
                  </ItemFinance>
                  <ItemFinance width={'20%'}>
                    27/07/2021
                  </ItemFinance>
                  <ItemFinance width={'15%'}>
                    <BoxRounded width={'150'} height={'32'} background={'#e07126'}></BoxRounded>
                  </ItemFinance>
                  <ItemFinance width={'10%'}>
                    <RoundedItem width={'50'} height={'50'} background={'#e07126'}></RoundedItem>
                  </ItemFinance>
                </ItemBoxItem>
              
              </BoxOpenFinanceItems>
              <RowNavModal content={'space-between'} padding={'20px 0'}>
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
                  <ButtonNavigation> <i class="fas fa-chevron-left"></i> Anterior </ButtonNavigation>
                  <ButtonRoundedPagination status={true}>1</ButtonRoundedPagination>
                  <ButtonRoundedPagination status={false}>2</ButtonRoundedPagination>
                  <ButtonNavigation> Próximo <i class="fas fa-chevron-right"></i> </ButtonNavigation>
                </Row>
              </RowNavModal>
              <Row content={'flex-end'}>
                <Button background={'#1c3b7a'}>Agendar com outra instituição</Button>
              </Row>
            </BoxInfo>
        </Layer>
        <MainStyle>
            <Row content={'space-between'} mobile={'column'}>
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
