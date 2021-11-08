import styled from 'styled-components'

export const Wrapper = styled.div`

   max-width: 1200px;
   margin: auto;

`

export const Row = styled.div`

   display: flex;
   flex-direction: row;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.width};
   padding: ${(props) => props.padding};
   align-items: ${(props) => props.align};

`


export const Column = styled.div`

   display: flex;
   flex-direction: column;
   width:100%;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.width};
   padding: ${(props) => props.padding};

`

export const RoundedItem = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.height}px;
   border-radius: 50%;
   background-color: #e07126;
   margin-right: 10px;
   box-shadow: 1px 1px 20px #cecece;
   position: relative;

   i{
      font-size: 30px;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

`

export const BoxRounded = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.height}px;
   background-color: ${(props) => props.background};
   border-radius: 30px;
   border: 0;
   color: #fff;
   margin: 0 10px;
   font-size: 15px;
   box-shadow: 1px 1px 20px #cecece;

`;

export const Button = styled.button`
   
   width: 300px;
   height: 50px;
   background-color: ${(props) => props.background};
   border-radius: 30px;
   border: 0;
   color: #fff;
   margin: 0 10px;
   font-size: 15px;
   box-shadow: 1px 1px 20px #cecece;

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

`


export const ButtonRounded = styled.button`
   
   width: 50px;
   height: 50px;
   background-color: #e07126;
   border-radius: 30px;
   border: 0;
   color: #fff;
   box-shadow: 1px 1px 20px #cecece;
   margin: 10px 5px;
   

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

`

export const Title = styled.h2`
  
   color: #1c3b7a;

`

export const SubTitle = styled.h4`

   color: #878482;
   font-weight: 400;

`


