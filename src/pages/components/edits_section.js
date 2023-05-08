import Edit_Card from "./edit_card"
import styled from "styled-components"

export default function Edits_Section() {

    const edits = [
        {title: "The Casual Edit",
        img: "/Developer-Test-Assets/doorway-1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare, felis eu imperdiet cursus, nisl risus tincidunt ipsum."
        },
        {title: "The Denim Edit",
        img: "/Developer-Test-Assets/doorway-2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare, felis eu imperdiet cursus, nisl risus tincidunt ipsum."}
    ]

    const edits_list = edits.map((edit, index) => {
        return <Edit_Card edit={edit} key={index} />
    })

    return (
        <EditsContainer>
        {edits_list}
        </EditsContainer>
    )
}

const EditsContainer = styled.div`
display: flex;
flex-direction: row;
width: 80%;
height: 50vh;
margin-left: 10rem;
margin-top: 2rem;
@media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    margin-left: 1rem;
    width: 100%;
}`