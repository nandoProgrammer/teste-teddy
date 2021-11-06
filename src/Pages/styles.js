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

`


export const Column = styled.div`

   display: flex;
   flex-direction: column;
   width:100%;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.width};

`

export const RoundedItem = styled.div`

   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: orange;
   margin-right: 10px;

`

export const Button = styled.button`
   
   width: 300px;
   height: 50px;
   background-color: orange;
   border-radius: 30px;
   border: 0;
   color: #fff;
   margin: 0 10px;

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

`


export const ButtonRounded = styled.button`
   
   width: 50px;
   height: 50px;
   background-color: orange;
   border-radius: 30px;
   border: 0;
   color: #fff;

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

`


