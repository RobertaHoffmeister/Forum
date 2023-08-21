import styled from "styled-components";

export const BtnUpload = styled.button`
    width: 60vw;
    height: 8vh;
    padding: 10px 300px;
    font-size: 20px;
    font-weight: var(--fonte-largura-seminegrito);
    color: var(--azul-claro);
    border: 2px solid var(--azul-claro);
    background-color: var(--branco);

    display: flex;
    // flex-direction: row;
    aligh-items: center;
    justify-content: space-around;

    &:hover {
        background-color: var(--azul-claro);
        color: var(--branco);
        cursor: pointer;
    }
`

export const UploadBtnArea = styled.div`
    margin-top: 45px;
`

export const ImagePreview = styled.div`

    padding: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    img {
        border-radius: 15px;
        width: 300px;
        heigth: 200px;
    }

    h1 {
        color: #5f5f5f;
        font-size: 18px;
    }
`