import styled from 'styled-components'

export const Layer = styled.div`
   
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    top: 0;
    display: ${(props) => props.display};
    z-index: 999999;
    justify-content: center;
    align-items: center;

`;

export const BoxInfo = styled.div`
    
    width:90%;
    height: 90%;
    margin: auto;
    padding: 20px 50px;
    background-color: white;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 

`

export const CloseBoxInfo = styled.div`

    width: 30px;
    height: 30px;
    border: 3px solid #cecece;
    border-radius: 4px;

`

export const InputSearch = styled.input`

   background-color: #cecece;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   margin-top: 10px;

`

export const WrapperItemBoxInfo = styled.div`
   
   width: 100%;
   margin: 0 10px; 
   display: flex;
   flex-direction: row;
   margin-top: 20px;
   
`
export const InfoItem = styled.div`

   width: 20%;
   padding: 10px 5px;


` 

export const ItemBoxItem = styled.div`

  width: 100%;
  margin: 0 10px; 
  display: flex;
  flex-direction: row;
  background-color: #cecece;
  border-radius: 10px;
  

`

export const ItemFinance = styled.div`
  
   width: 20%;
   padding: 10px;
   
   
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
  border-left: 1px solid #cecece;
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
  background-color: #cecece;
  border-radius: 5px;
  margin: 10px 0;

`


export const BoxItemsStatus = styled.div`

  margin-top: 30px;
  width: 100%;

`;

export const StatusItem = styled.div`

  padding: 5px 35px;
  border-radius: 30px;
  background-color: ${(props) => props.background};

`;
