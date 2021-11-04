import styled from 'styled-components'

export const Container = styled.div`
    height: 526px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    a {
        letter-spacing: 0;
        word-spacing: 0;
        font-size: 0;
    }

    @media (max-width: 800px) {
        height: auto;
    }
`

export const ProductContainer = styled.div`
    position: absolute;
    left: 15%;
`

export const Title = styled.h1`
    font: small-caps bold 24px/1 sans-serif;
`

export const Legend = styled.p`
    font: caption;
`

export const Button = styled.button`
    font: 16px "Fira Sans", sans-serif;
`


