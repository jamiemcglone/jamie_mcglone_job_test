import styled from "styled-components";

export default function Edit_Card({edit}) {
    return(
        <EditCard>
        <img src={edit.img} />
        <EditTitle>{edit.title}</EditTitle>
        <EditDescription>{edit.description}</EditDescription>
        <EditsShopAllButton>Shop All</EditsShopAllButton>
        </EditCard>
    )
}

const EditCard = styled.div`
display: flex;
flex-direction: column;
width: 50%;
text-align: left;
margin: .5rem;
@media (max-width: 700px) {
    width: 90%;
}
`
const EditTitle = styled.p`
font-size: 1.5rem;
margin-top: 2rem;`

const EditDescription = styled.p`
margin-top: 0;
opacity: 60%;
`

const EditsShopAllButton = styled.div`
display: flex;
flex-direction: row;
width: 15%;
height: 5vh;
:hover{
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.05);
    transition: .3s;
}
@media (max-width: 700px) {
    width: 25%;
}`