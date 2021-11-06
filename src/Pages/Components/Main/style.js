import styled from 'styled-components'

export const Layer = styled.div`
   
    width: 100vw;
    height: 100vh;
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

    width: 90%;
    height: 90%;
    margin: auto;
    background-color: white;
    border-radius: 30px;

`;

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
  background-color: green;

`;
