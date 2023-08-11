import styled from 'styled-components'

export const AreaNoticia = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: justify;

   img{
    width: 80%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
   }

   p{
    font-size: 18px;   
   }

   button{
    color: #ffae00;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 5vh;
    border: none;
    padding: 10px;
    border-radius: 9px;
    cursor: pointer;
    background-color: #003296;
    &:hover{
        text-decoration: underline;
  }
}
`

export default AreaNoticia;