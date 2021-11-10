import styled from 'styled-components'

export const HeaderTop = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 0;
    border-bottom: 1px solid #ede8e6;

    @media (max-width: 900px){
        padding: 2% 4%;
    }

`

export const Logo = styled.img`

  width: 150px;

  &:hover{
      cursor: pointer;
  }

  @media (max-width: 900px){
      width: 100px;
  }

`