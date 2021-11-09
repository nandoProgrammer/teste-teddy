import styled from 'styled-components'

export const Wrapper = styled.div`

   max-width: 1200px;
   margin: auto;

   @media (max-width: 600px){
      width: 100%;
      padding: 2% 4%;
   }
  

`

export const Row = styled.div`

   display: flex;
   flex-direction: row;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.width};
   padding: ${(props) => props.padding};
   align-items: ${(props) => props.align};

   @media (max-width: 600px){
      width: 100%;
      flex-direction: ${(props) => props.mobile};
      padding: 0;
   }

`


export const Column = styled.div`

   display: flex;
   flex-direction: column;
   width:100%;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.width};
   padding: ${(props) => props.padding};
   border-left: ${(props) => props.borderLeft};

   @media (max-width: 600px){
      width: 100%;
      flex-direction: ${(props) => props.mobile};
      padding: 0;
      border-left: none;
   }

`

export const RoundedItem = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.height}px;
   border-radius: 50%;
   background-color: ${(props) => props.background};
   margin-right: 10px;
   position: relative;

   i{
      font-size: 30px;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

   @media (max-width: 600px){
      width: 40px;
      height: 40px;

      i{
         font-size: 15px;
      }
   }

`

export const RoundedItemImage = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.height}px;
   border-radius: 50%;
   background-image: url(${(props) => props.background});
   background-size: cover;
   background-position: center;
   margin-right: 10px;
   position: relative;

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
   margin: 10px 5px;
   

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

`

export const Title = styled.h2`
  
   color: #1c3b7a;
   @media (max-width: 600px){
      font-size: 15px;
   }

`

export const SubTitle = styled.h4`

   color: #878482;
   font-weight: 400;

   @media (max-width: 600px){
      font-size: 7px;
      max-width: 110px;
   }

`

export const LineVertical = styled.div`

   width: 2px;
   background-color: #cecece;
   border-radius: 60px;
   height: ${(props) => props.height};
   margin: ${(props) => props.margin};


   @media (max-width: 600px){
      display: none;
   }
  
    

`;


