import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(to top, #a8e063, #7CBA32); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    flex-direction: column;
    padding: 50px;

    @media (max-width: 800px) {
    height: auto;
    }
`

export const ContainerBenefits = styled.div`
    display: flex;
    margin-top: 150px;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    flex-wrap: wrap;

    .containerIcon {
        text-align: center;
        background: white;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: 30px;
        img {
            width: 40px;
        }

        @media (max-width:500px){
            img {
                width: 35px;
            }
        }

    }
    
    @media (max-width:500px){
        margin-top: 50px;
    }
`

export const ProductContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    left: 15%;
    display: flex;
    width: 90vw;
    height: 550px;

    .circles {
        position: absolute;
        transform: translate(-20px,-400px);
        width: 450px;    
    }

    .product {
        z-index: 2;
    }

    @media (max-width:1000px){
        .circles {
            position: absolute;
            transform: translate(-20px,-350px);
            width: 350px;    
        }
    }

    @media (max-width: 800px) {
        height: auto;
        flex-wrap: wrap-reverse;
        width: 100%;
        margin-bottom: 20px;

        div {
            /* display: flex; */
            text-align: center;
        }

        .circles {
            position: absolute;
            transform: translate(-20px,-400px);
            width: 350px;    
        }
    }

    @media (max-width: 638px) {
        .circles {
            position: absolute;
            transform: translate(50px,-300px);
            width: 350px;    
        }
    }

`

export const Title = styled.h1`
    font: small-caps bold 48px/1 sans-serif;
    margin: 20px 0;
`

export const Description = styled.p`
    font: 18px normal arial, sans-serif;
    margin: 10px 0;
`

export const Button = styled.button`
    font: 24px "Fira Sans", sans-serif;
    color: #fff;
    background-color: #7CBA32;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 10px;
`

export const SubTitleSection = styled.h2`
    font: 16px normal arial, sans-serif;
    margin-bottom: 10px;
    color: #fff;
`

export const TitleSection = styled.h2`
    font: small-caps bold 40px/1 sans-serif;
    color: #fff;

    @media (max-width:500px){
        font-size: 25px;
    }
`

export const SubLegend = styled.p`
    font: small-caps 400 20px/1 sans-serif;
    color: #fff;
    text-transform: uppercase;

    @media (max-width:500px){
        font-size: 16px;
    }
`
