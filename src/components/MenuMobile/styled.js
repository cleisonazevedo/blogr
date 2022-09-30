import styled, { css } from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;

    a {
        color: hsl(356, 100%, 66%);
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: hsl(356, 100%, 66%);
    }

    background: hsl(0, 0%, 100%);

    opacity: 0;
    pointer-events: none;
    transform: scale(0.7);

    transition: .5s;

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
    `}
    
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`
export const MenuLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    button {
        background-color: hsl(356, 100%, 66%);
        color: hsl(0, 0%, 100%);
        margin-right: 10px;
        font-weight: 700;
        width: 120px;
        height: 40px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        :hover {
            color: hsl(0, 0%, 100%);
            background-color: hsl(355, 100%, 74%);
        }
    }
`

