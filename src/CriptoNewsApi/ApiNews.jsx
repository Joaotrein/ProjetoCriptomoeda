import styled from 'styled-components'

export const AreaNoticia = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: justify;

   img{
    width: 70%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
   }

   p{
    font-size: 18px;
   }

   a {
    color: #dea20a;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 5vh;
    &:hover{
        text-decoration: underline;
  }
}


`

export default AreaNoticia;