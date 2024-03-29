import styled from "styled-components";

export const TextArea = styled.textarea`
    font: inherit;
    box-sizing: border-box;
    height: 100px;
    border-radius: 10px;
    border: 1px solid var(--Invisible);
    padding: 20px;
    font-size: 1rem;
    margin-bottom: 20px;
    box-shadow: var(--Shadow);
    transition: border 0.2s ease-in-out;
    &:focus {
        outline: none;
        border: 1px solid var(--PointColor);
    }


`;