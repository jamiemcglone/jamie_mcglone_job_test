import styled from "styled-components"
import React from "react";
import { ReactSVG } from "react-svg";

export default function New_Section(){
    return (
    <NewContainer>
    <NewImage src="/Developer-Test-assets/AFeature.png"></NewImage>
    <OverlayContainer>
    <WhatsNewOverlayText>
        <NewOverlayText1>What's New</NewOverlayText1>
        <NewOverlayText2>The Winter Collection</NewOverlayText2>
    </WhatsNewOverlayText>
    <OverlayLineDiv />
    <ArrowIcon>
        <ReactSVG src="/Developer-Test-Assets/right-arrow.svg"/>
    </ArrowIcon>
    </OverlayContainer>
    </NewContainer>
    )
}

const NewImage = styled.img`
width: 100%;
height: 90vh;
max-width: 100%;
min-width: 1200px;
align-items: center;
background-size: cover;
justify-content: center;
@media (max-width: 700px) {
    margin-left: -25rem;
    width: auto;
    position: relative;
}
`

const NewContainer = styled.div`
width: 100%;
height: 50%;
margin-top: 2rem;
@media (max-width: 700px) {
    overflow-x: hidden;
}
`

const WhatsNewOverlayText = styled.div`
color: white;
`

const NewOverlayText1 = styled.p`
color: rgb(227, 220, 220);
padding-left: 2rem;
font-size: 1.1rem;
@media (max-width: 700px) {
    font-size: .8rem;
    margin-top: 1rem;
}
opacity: 40%;
margin-top: 3rem;
`

const NewOverlayText2 = styled.p`
padding-left: 2rem;
font-size: 1.6rem;
@media (max-width: 700px) {
    font-size: 1rem;
    width: 100%;
    margin-top: 0;
}
margin-top: -1rem;
margin-bottom: 3rem;
`

export const ArrowIcon = styled.div`
gap: 2rem;
color: white;
margin-top: 4rem;
margin-left: 2.3rem;
@media (max-width: 700px) {
    margin-top: 2.2rem;
    margin-left: 1.5rem;
    gap: 0;
    margin-right: 1rem;
}
`

const OverlayContainer = styled.div`
display: flex;
background-color: #242632;
width: 20%;
max-width: 30rem;
min-width: 30rem;
margin-left: 4rem;
position: absolute;
top: 80vh;
margin-bottom: -10rem;
left: 0;
right: 15px;
height: 14%;
width: 30%;
visibility: none;
:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: .3s;
}
@media (max-width: 700px) {
    min-width: 20rem;
    max-width: 20rem;
    margin-left: 1.5rem;
    width: 30%;
    margin-left: 1rem;
    height: 10%;
    margin-top: 3rem;
}`

const OverlayLineDiv = styled.div`
border-left: 1.5px solid grey;
opacity: 30%;
margin-left: 7rem;
@media (max-width: 700px) {

}
`