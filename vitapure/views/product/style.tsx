import styled from 'styled-components'

export const Container = styled.div`
    height: 526px;
    display: flex;
    align-items: center;
    overflow: hidden;

    @media (max-width: 800px) {
    height: auto;
    }
`

export const ContainerBenefits = styled.div`
    
`

export const ProductContainer = styled.div`
    justify-content: center;
    align-items: center;
    left: 15%;
    display: flex;
`

export const Title = styled.h1`
    font: small-caps bold 48px/1 sans-serif;
`

export const Description = styled.p`
    font: 18px normal arial, sans-serif;
`

export const Button = styled.button`
    font: 24px "Fira Sans", sans-serif;
`

export const SubTitleSection = styled.h2`
    font: 16px normal monospace;
`

export const TitleSection = styled.h2`
    font: small-caps bold 48px/1 sans-serif;
`

export const SubLegend = styled.p`
    font: 16px normal arial, sans-serif;
`