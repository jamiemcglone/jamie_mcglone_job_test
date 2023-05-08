import styled from "styled-components";

export default function Notice_Section() {
    return (
    <NoticeSection>
        <MainNotice>Get your gifts in time for the holidays</MainNotice>
        <SubNotice>Free, extended returns until January 20th</SubNotice>
        <MoreButton>Learn More</MoreButton>
    </NoticeSection>
    )
}

const NoticeSection = styled.div`
background-color: #1C291D;
margin-top: 18rem;
height: 20vh;
width: 100%;
color: white;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;
@media (max-width: 700px) {
    margin-top: 35rem;
    height: 30vh;
}
`

const MainNotice = styled.div`
font-size: 1.5rem;
margin-top: 3.5rem;
`

const SubNotice = styled.div`
opacity: 50%;
margin-top: .8rem;`

const MoreButton = styled.div`
margin-top: 1.5rem;
width: 8%;
height: 3vh;
display: flex;
flex-direction: row;
@media (max-width: 700px) {
    width: 22%;
}
:hover{
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.05);
    transition: .3s;
}
`