import styled from "styled-components";

export const BtnPublish = styled.button`
    background-color: var(--azul-claro);
    font-size: var(--fonte-subtitulo);
    font-weight: var(--fonte-largura-seminegrito);
    color: white;
    border: none;
    border-radius: 12px;
    height: 7vh;
    width: 10vw;
    padding: 10px 0 0 0;

    display: flex;
    flex-direction: row;
    aligh-items: center;
    justify-content: space-evenly;


    &:hover {
        cursor: pointer;
        background-color: var(--branco);
        color: var(--azul-claro);
        font-style: var(--azul-claro);
        outline: 2px solid var(--azul-claro);
    }
`

export const BtnBack = styled.button`
    background-color: var(--branco);
    border: 2px solid var(--laranja);
    border-radius: 12px;
    color: var(--laranja);
    height: 7vh;
    padding: 0 10px;

    &:hover {
        cursor: pointer;
        background-color: var(--laranja);
        color: var(--branco);
        font-style: var(--branco);
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    font-family: var(--fonte-montserrat)
`

export const BtnSection = styled.div`
    width: 60vw;
    margin-bottom: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TitleInput = styled.input`
    width: 58vw;
    height: 4vh;
    padding: 10px;
    border: none;
    border-radius: 10px;

    font-size: var(--fonte-texto);
    text-indent: 15px;
    box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);

    &:focus {
        box-shadow: 0 0 15px rgb(247, 149, 53);
        outline: none;
    }
`
export const LabelInput = styled.h1`
    text-indent: 5px;
    text-align: left;

    color: #5f5f5f;
    font-size: 16px;
`

export const TextArea = styled.textarea`
    width: 58vw;
    height: 20vh;
    padding: 10px;
    border: none;
    border-radius: 15px;

    font-size: 16px;
    text-indent: 15px;
    box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.25);

    &:focus {
        box-shadow: 0 0 15px rgb(247, 149, 53);
        outline: none;
    }
`

export const AreaInput = styled.div`
    width: 60vw;
    margin-top: 5vh;

`