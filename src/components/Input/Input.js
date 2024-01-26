import styled from "styled-components";

export const Input = styled.input`
    height: 45px;
    border-radius: 10px;
    border: 1px solid var(--BorderColor);
    padding: 0 20px;
    font-size: 1rem;
    margin-bottom: 20px;
    box-shadow: var(--Shadow);
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
    }
`