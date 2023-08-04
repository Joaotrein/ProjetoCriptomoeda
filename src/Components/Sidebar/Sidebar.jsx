import styled from "styled-components"

export const Sidenav = styled.nav`
    position: fixed;
    height: 100vh;
    min-height: 500px;
    width: 4%;
    top: 0;
    left: 0;
    background-color: #003296;
    overflow: hidden;
    transition: 0.6s ease-in-out;
    box-shadow: black 0 0 10px 0 ;
    z-index: 1;

    &:hover{
     width: 200px;
     overflow: visible;
     /* position: absolute; */

     & hr {
          width: 85%;
          margin: 2% 6%;
          transition: 0.2s ease-in-out
    }

    & p a {
       
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 500;
  opacity: 0;
  animation-name: aparecer;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes aparecer {
  to {
    opacity: 1;
  }
  }

    }

`

export const Navegation = styled.div`
    height: 60vh;
    min-height: 300px;
`
export const Logo = styled.div`
> img {
  width: 70%;
  margin: 8% 15% 0 15%;
  border-radius: 50%;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
}
 
`
export const Lista = styled.ul`  
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
`

export const ItemLista = styled.a`
  width: 14vw;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  padding: 0.8vh 0.48vw;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
  background-image: linear-gradient(
    to right,
    #FFB800 5px,
    rgba(255, 255, 255, 0.1) 7px
  ); 
  color: #ffffff;
}

    > p {
        width: 120px;
        font-size: 16px;
        text-align: left;
        letter-spacing: 0.3px;
        font-weight: 500;
    }

    > p a{
      text-decoration: none;
      color: #FFFFFF;
      font-weight: 500;
     
    }
    > i {
        font-size: 20px;
        text-align: right;
        
    }
`

export const Line = styled.hr`
    width: 70%;
    margin: 10% 0;
    margin-left: 0.5vw;
    transition:  0.3s ease-in;  
`