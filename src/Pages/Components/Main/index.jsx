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
  InfoTextSmall,
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
   RoundedItemStatus,
   RoundedItemImage,
   BoxRounded, 
   Title, 
   SubTitle, 
   LineVertical,
   SpanStyle,
   SpaceMobile
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
                  <RoundedItem widthValue={'70'} height={'70'} background={'#e07126'}>
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
                <WrapperAjust widthValue={'100%'} margin={'0 10px'} paddingMobile={'0'}>
                   <InfoItem widthValue={'20%'}>
                     <InfoTextSmall>Remetente</InfoTextSmall>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem widthValue={'35%'}>
                     <InfoTextSmall>Destinatário</InfoTextSmall>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem widthValue={'20%'}>
                     <InfoTextSmall>Data da criação</InfoTextSmall>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem widthValue={'15%'}>
                     <InfoTextSmall>Status</InfoTextSmall>
                     <LineVertical height={'20px'}/>
                   </InfoItem>
                   <InfoItem widthValue={'10%'}>
                     <InfoTextSmall>Ações</InfoTextSmall>
                   </InfoItem>
                </WrapperAjust>
                {
                    data[0].compartilhamentos.map((item) =>(
                      <ItemBoxItem>
                        <ItemFinance widthValue={'20%'}>
                          <RoundedItemImage widthValue={'50'} height={'50'} background={item.logoRemetente} />
                          <SpanStyle weight={'600'}>{item.remetente}</SpanStyle>
                        </ItemFinance>
                        <ItemFinance widthValue={'35%'}>
                          <RoundedItemImage widthValue={'70'} height={'70'} background={item.logoDestinatario} />
                          <SpanStyle weight={'600'}>{item.destinatario}</SpanStyle>
                        </ItemFinance>
                        <ItemFinance widthValue={'20%'}>
                          <SpanStyle weight={'600'}>{item.data}</SpanStyle>
                        </ItemFinance>
                        <ItemFinance widthValue={'15%'}>
                          {
                            item.status === 0 && (
                              <BoxRounded background={'rgb(178, 31, 45)'}>
                                <i class="fas fa-exclamation-triangle"></i> 
                                <span>Desatualizado</span> 
                              </BoxRounded>
                            )
                          }

                          {
                            item.status === 1 && (
                              <BoxRounded widthValue={'150'} height={'32'} background={'rgb(198, 149, 0)'}>
                                <i class="fas fa-exclamation-triangle"></i> 
                                <span>Inválido</span>
                              </BoxRounded>
                            )
                          }

                          {
                            item.status === 2 && (
                              <BoxRounded widthValue={'150'} height={'32'} background={'rgb(28, 116, 48)'}>
                                <i class="fas fa-check"></i> 
                                <span>Atualizado</span>
                              </BoxRounded>
                            )
                          } 
                          
                        </ItemFinance>
                        <ItemFinance widthValue={'10%'}>
                          {
                            item.acoes === 0 && (
                              <RoundedItemStatus widthValue={'50'} height={'50'} background={'#cecece'}>
                                <i class="far fa-check-circle"></i>
                              </RoundedItemStatus>
                            )
                          }
                          {
                            item.acoes === 1 && (
                              <RoundedItemStatus widthValue={'50'} height={'50'} background={'rgb(28,116,48)'}>
                                <i class="far fa-check-circle"></i>
                              </RoundedItemStatus>
                            )
                          }
                        </ItemFinance>
                      </ItemBoxItem>
                ))}
              </BoxOpenFinanceItems>
              <RowNavModal content={'space-between'} padding={'20px 0'}>
                <Row align={'center'}>
                  <SpanStyle color={'#cecece'} mobileDisplay={'none'}>Resultados:</SpanStyle>
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
                  <SpanStyle mobileDisplay={'none'}>De 16</SpanStyle>
                </Row>
                <Row align={'center'}>
                  <ButtonNavigation status={false}> <i class="fas fa-chevron-left"></i> Anterior </ButtonNavigation>
                  <ButtonRoundedPagination status={true}><span>1</span></ButtonRoundedPagination>
                  <ButtonRoundedPagination status={false}><span>2</span></ButtonRoundedPagination>
                  <ButtonNavigation status={true}> Próximo <i class="fas fa-chevron-right"></i> </ButtonNavigation>
                </Row>
              </RowNavModal>
              <Row content={'flex-end'} mobile={'center'} mobileDirection={'center'}>
                <Button background={'#1c3b7a'}>Agendar com outra instituição</Button>
              </Row>
            </BoxInfo>
        </Layer>
        <MainStyle>
            <Row content={'space-between'} mobile={'column'}>
              <Column widthValue={'30%'} padding={'30px 0 0 0'}>
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
              <Column widthValue={'70%'} padding={'2% 0 0 2%'} borderLeft={'1px solid #ede8e6'}> 
                  <Row content={'flex-end'} align={'center'} mobileDirection={'center'}>
                    <Button onClick={openModal} background={'#e07126'}>Aceitar Open Finance</Button> 
                    <ButtonRounded>
                      <i class="fas fa-question"></i>
                    </ButtonRounded> 
                  </Row>
                  <SpaceMobile />
                  <Column>
                    <Title>Documentos Solicitados</Title>
                    <Column padding={'30px 0 0 0'}>
                        <WrapperAjust widthValue={'100%'} padding={'0 110px 0 30px'} paddingMobile={'0 14%'}>
                            <InfoText>Documento</InfoText>
                            <Row align={'center'} widthMobile={'auto'}>
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
                                                  <span>A validar</span>
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 1 && (
                                                <StatusItem background={'#c69500'}>
                                                  <IconStatusItem>
                                                    <i class="fas fa-exclamation"></i>
                                                  </IconStatusItem>
                                                  <span>Pendente</span>
                                                </StatusItem>
                                             )
                                          }
                                          {
                                             item.status === 2 && (
                                                <StatusItem background={'#1c7430'}>
                                                  <IconStatusItem>
                                                    <i class="fas fa-check"></i>
                                                  </IconStatusItem>
                                                  <span>Validado</span>
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
