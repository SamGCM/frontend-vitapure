import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }

    .box-image {
        letter-spacing: 0;
        word-spacing: 0;
        font-size: 0;
        position: relative;
    }

    .container-info {
        position: absolute;
        top: 0;
        background: transparent;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    img {
        filter: brightness(0.7);
    }
`
export const Title = styled.h1`
    font: small-caps bold 30px/1 sans-serif;
    color: #fff;
`

export const Button = styled.a`
    border: 1px solid #fff;
    color: #fff;
    font: 18px "Fira Sans", sans-serif;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 20px;

    :hover {
        background: #8080806f;
    }
`

