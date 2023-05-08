import styled from "styled-components";
import { ReactSVG } from "react-svg";

export default function Header() {
    return (
        <HeaderContainer>
        <img src="/Developer-Test-Assets/logo.svg"/>  
        <HeaderLine />      
        <HeaderNavBar>
            <HeaderNavBarItem>What's New</HeaderNavBarItem>
            <HeaderNavBarItem>Designers</HeaderNavBarItem>
            <HeaderNavBarItem>Clothing</HeaderNavBarItem>
            <HeaderNavBarItem>Accessories</HeaderNavBarItem>
            <HeaderNavBarItem>Journal</HeaderNavBarItem>
            <HeaderNavBarItem>Offer</HeaderNavBarItem>
        </HeaderNavBar>
        <HeaderSearchBar>
            <BarLogo>
                <ReactSVG src="/Developer-Test-Assets/search.svg" />
            </BarLogo>
            <BarText>Search for 'Cashmere'</BarText>
        </HeaderSearchBar>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
width: 100%;
margin-top: 1rem;
margin-left: 2rem;
@media (max-width: 700px) {
    display: none
};
`
const HeaderNavBar = styled.div`
display: flex;
flex-direction: row;
gap: 3rem;
width: 75%;
font-weight: 549;
margin-top: 1rem;
`

const HeaderNavBarItem = styled.li`
align-items: center;
gap: 10rem;
list-style: none;
:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: .3s;
}
`

const HeaderLine = styled.div`
border-left: 1px solid grey;
opacity: 30%;
margin: 0rem;
`

export const HeaderSearchBar = styled.div`
width: 30%;
display: flex;
flex-direction: row;
gap: 1rem;
height: 5vh;
align-items: center;
background-color: #F1F1F2;
justify-content: flex-start;
margin-right: 5rem;
:hover{
    cursor: pointer;
}
@media (max-width: 700px) {
    width: 90%;
    margin-top: 1rem;
    margin-left: 1.2rem;
};
`

export const BarText = styled.div`
font-weight: 0;
opacity: 50%;
`

export const BarLogo = styled.div`
margin-left: 1.5rem;
`