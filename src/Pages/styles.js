import styled from 'styled-components'

export const Wrapper = styled.div`

   max-width: 1200px;
   margin: auto;

   @media (max-width: 900px){
      width: 100%;
      padding: 0 4%;
   }

`

export const Row = styled.div`

   display: flex;
   flex-direction: row;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.widthValue};
   padding: ${(props) => props.padding};
   align-items: ${(props) => props.align};

   @media (max-width: 900px){
      width: auto;
      flex-direction: ${(props) => props.mobile};
      justify-content: ${(props) => props.mobileDirection}
   }

`


export const Column = styled.div`

   display: flex;
   flex-direction: column;
   width:100%;
   justify-content: ${(props) => props.content};
   width: ${(props) => props.widthValue};
   padding: ${(props) => props.padding};
   border-left: ${(props) => props.borderLeft};

   @media (max-width: 900px){
      width: 100%;
      flex-direction: ${(props) => props.mobile};
      border-left: none;
      text-align:center;
   }

`

export const RoundedItem = styled.div`

   width: ${(props) => props.widthValue}px;
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

   @media (max-width: 900px){
      width: 40px;
      height: 40px;
      i{
         font-size: 20px;
      }
   }
 

`

export const RoundedItemStatus = styled(RoundedItem)`

@media (max-width: 900px){
   width: 30px;
   height: 30px;
   padding: 0;
   position: relative;
   margin: 0;

   i{
    font-size: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
   }

   span{
      display: none;
   }
 }


`

export const RoundedItemImage = styled.div`

   width: ${(props) => props.widthValue}px;
   height: ${(props) => props.height}px;
   border-radius: 50%;
   background-image: url(${(props) => props.background});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   margin-right: 10px;
   position: relative;

   @media (max-width: 900px){
      width: 20px;
      height: 20px;
   }
   
`

export const BoxRounded = styled.div`

   background-color: ${(props) => props.background};
   border-radius: 30px;
   border: 0;
   color: #fff;
   margin: 0 auto;
   padding: 5px 10px;
   font-size: 15px;
   text-align: center;
   width: 100%;

   span{
      font-size: 12px;
   }
   
   i{
      margin: 0 5px;
   }

   @media (max-width: 900px){
     width: 30px;
     height: 30px;
     padding: 0;
     position: relative;
     margin: 0;

     i{
      margin: 0;
      font-size: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
     }

     span{
        display: none;
     }
   }

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

   @media (max-width: 900px){
      width: 240px;
      font-size: 13px;
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

   @media (max-width: 900px){
      font-size: 20px;
   }

`

export const SubTitle = styled.h4`

   color: #878482;
   font-weight: 400;

   @media (max-width: 900px){
      max-width: 150px;
      font-size:10px;
      line-height: 12px;
   }

`

export const LineVertical = styled.div`

   width: 2px;
   background-color: #cecece;
   border-radius: 60px;
   height: ${(props) => props.height};
   margin: ${(props) => props.margin};

   @media (max-width: 900px){
      display: none;
   }
    

`

export const SpanStyle = styled.span`

   color: ${(props) => props.color};
   font-weight: ${(props) => props.weight};

   @media (max-width: 900px){
      display: ${(props) => props.mobileDisplay};
      font-size: 6px;
   }

` 

export const SpaceMobile = styled.div`

   @media (max-width: 900px){
      width: 100%;
      margin: 30px 0;
   }   



`


