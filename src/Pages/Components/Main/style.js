import styled from 'styled-components'

export const Layer = styled.div`
   
    width: 100%;
    height: 140%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    top: 0;
    display: ${(props) => props.display};
    z-index: 999999;
    justify-content: center;
    align-items: center;

`

export const BoxInfo = styled.div`
    
    width: 90%;
    height: auto;
    margin: auto;
    padding: 50px 50px;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 

`

export const CloseBoxInfo = styled.div`

    width: 35px;
    height: 35px;
    border: 2px solid #cecece;
    border-radius: 4px;
    position: relative;

    i{
      font-size: 30px;
      color: #cecece;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

   &:hover{
     cursor: pointer;
   }

`

export const InputSearch = styled.input`

   background-color: #e9eff2;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   margin-top: 10px;
   font-size: 15px;

`
export const BoxOpenFinanceItems = styled.div`

   width: 100%;
   margin: 50px 0 20px 0;
   display: flex;
   flex-direction: column;

`

export const WrapperAjust = styled.div`
   
   width: ${(props) => props.width};
   padding: ${(props) => props.padding};
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-top: 40px;

`

export const InfoText = styled.h4`

   color: #1c3b7a;

`

export const InfoItem = styled.div`

   width: ${(props)=> props.width};
   padding: 10px 0 0 15px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

` 

export const ItemBoxItem = styled.div`

  width: 100%;
  margin: 0 10px; 
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  

`

export const ItemFinance = styled.div`
  
   width: ${(props)=> props.width};
   padding: 10px;
   display: flex;
   flex-direction: row;
   align-items: center;
   color: #1c3b7a;
   
   
`

export const SelectItem = styled.select`
   
   max-width: 100px;
   max-height:50px;
   background-color: #cecece;
   padding: 5px 10px;
   border-radius: 20px;
   margin:0 10px;
   border: none;

`

export const MainStyle = styled.main`

   width: 100%;
   padding: 2% 0;

`

export const List = styled.ul`

  display: flex;
  flex-direction: column;
  margin-top: 20px;

  li{
    display: block;
    margin: 10px 0;

    span{
      color: gray;
    }
  }

`

export const DocumentsBox = styled.div`

  width: 70%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ede8e6;
  padding-left: 2%;

`

export const WrapperItem = styled.div`

  width: 100%;
  padding: 15px 30px; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const Item = styled.div`

  width: 100%;
  background-color: #e9eff2;
  border-radius: 5px;
  margin: 10px 0;

  span{
    font-weight: bold;
    color: #565c5b;
  }

`

export const StatusItem = styled.div`
  
  display: flex;
  flex-direction: row;
  padding: 5px 35px;
  border-radius: 30px;
  background-color: ${(props) => props.background};
  color: #fff;
  align-items: center;

`

export const IconStatusItem = styled.div`

  width: 30px;
  height: 30px;
  
  position: relative;

    i{
      font-size: 20px;
      color: #cecece;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

`

export const ButtonNavigation = styled.button`

   margin: 0 10px;
   padding: 10px 20px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   max-width: 121px;
   border: 0;
   border-radius: 20px;
   background: none;
   align-items: center;

   i{
     margin: 0 10px;
   }

`

export const ButtonRoundedPagination = styled.div`
    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.status ? '#e07126' : '#cecece'};
    color: ${(props) => props.status ? '#fff' : '#000'};
    margin-right: 10px;
    padding: 10px 20px;
    border: 0;
    align-items: center;


    &:hover{
      opacity: 0.5;
      cursor: pointer;
    }

`

export const RowNavModal = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.content};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    align-items: ${(props) => props.align};
    border-top: 1px solid #ede8e6;
    border-bottom: 1px solid #ede8e6;
    margin: 20px 0;

    @media (max-width: 600px){
      width: 100%;
      flex-direction: ${(props) => props.mobile};
      padding: 0;
    }

`


