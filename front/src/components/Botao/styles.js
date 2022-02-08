import styled from "styled-components";

export const Wrapper = styled.button`
    margin: 0;
    padding: 0;
    background: white;
    border: none;
    div:active {
        background: rgba(51, 51, 204, 0.5);
    }
    div {
        margin: 2vh 0;
        font-size:1rem;
        background: rgb(51, 51, 204);
        color: white;
        padding: 5px 3px;
        border-radius: 4px;
        width: 70px;
        text-align: center;
        border: none;
    }
`