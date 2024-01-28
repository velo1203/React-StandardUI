import styled from "styled-components";

export const Select = styled.select`
    box-sizing: border-box;
    height: 45px;
    border-radius: 10px;
    border: 1px solid var(--Invisible);
    padding: 0 20px;
    font-size: 1rem;
    margin-bottom: 20px;
    box-shadow: var(--Shadow);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:focus {
        outline: none;
        border: 1px solid var(--PointColor);
    }
    &:hover {
        opacity: 0.8;
        transform: scale(1.02);
    }
    &:active {
        opacity: 0.8;
        transform: scale(1.02);
    }
    &:disabled {
        opacity: 0.5;
        transform: scale(1);
        cursor: not-allowed;
    }
`;