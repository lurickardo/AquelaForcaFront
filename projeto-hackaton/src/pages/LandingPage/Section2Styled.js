import styled from "styled-components";

export const MainDiv = styled.div`
margin: 0;
margin-bottom: 4rem;
padding: 0;
height: 100%;
display: flex;
align-items: center;
`

export const Box1 = styled.div`
margin: 0;
height: 20rem;
display: flex;
flex-direction: column;
justify-content: center;
text-align: justify;
background-color: rgb(89,73,141,1);
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 0 5% 0 38%;

& > h1 {
    color: white;
}

& > p {
    color: white;
    font-size: 1rem;
}
`

export const Image = styled.div`
margin: 0;
padding: 0;
position: absolute;
z-index: 100;

& > img{
    width: 26rem;
    height: 26rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 3rem;
    box-shadow: 6px 4px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 26px 0 rgba(0, 0, 0, 0.19);
    
}
`
