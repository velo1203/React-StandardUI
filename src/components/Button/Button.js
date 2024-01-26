import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--PointColor);
    color: var(--WhiteColor);
    width:110px;
    height: 45px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: var(--Shadow);
    cursor: pointer;
    &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }

`