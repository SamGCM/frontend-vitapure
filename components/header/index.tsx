import { IHeader } from "./interface";



export default function Header (props: IHeader) {

    return (
        <header>
            <meta charSet="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{props.title}</title>
            <link rel="shortcut icon" href={''} type="image/x-icon"/>
            <meta name="description" content={'Vitapure, o melhor em produtos de suplementos alimentares, whey, cafeína, pré treino, vitamina C e muitos outros.'} />
            <meta name="theme-color" content='#4338CA'/> 
            <link rel="preload" as="font"></link>
        </header>
    )
}