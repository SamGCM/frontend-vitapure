import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 37.5px;
`

export const ContainerProducts = styled.div`
    /* padding: 0 24px; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        justify-content: space-around;
    }

    @media (max-width: 638px) {
        margin-bottom: 30%;
        margin-top: 10%;
    }
`

export const TitlePage = styled.h1 `
    font: bold 32px system-ui, sans-serif;
    margin: 24px 0 0 24px;
`

export const Card = styled.div `
    width: 270px;
    box-shadow: 0px 0px 10px 1px #00000018;
    border-radius: 10px;
    margin: 24px;
    background: #fff;

    @media (max-width: 638px) {
        width: 215px;
        margin: 0;
        margin-bottom: 30px;
        box-shadow: none;
        border-radius: 10px;
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    padding: 5px 15px;
`

export const TitleProduct = styled.h2 `
    font: bold 24px system-ui, sans-serif;

    @media (max-width: 638px) {
        font: bold 18px system-ui, sans-serif;
    }
`

export const Quantity = styled.h2 `
    color: #7CBA32;
    font: bold 18px system-ui, sans-serif;
`

export const Description = styled.p `
    padding: 0 15px;
    word-break: break-all;
`

export const ContainerPrice = styled.div`

`

export const Price = styled.p`
    font: bold 24px system-ui, sans-serif;
    padding: 10px 15px;

`

export const ButtonBuy = styled.button`
    font: 18px "Fira Sans", sans-serif;
    color: #fff;
    background-color: #7CBA32;
    padding: 10px 20px;
    /* margin: 5px; */
    width: 100%;
    border-radius: 0px 0px 10px 10px;

    :hover  {
        background-color: #88d12e;
    }

    :active {
        background-color: #70b916;
    }

    @media (max-width: 638px) {
        
    }
`



