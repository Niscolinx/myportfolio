import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='dark'>
            <Head />
            <link rel='icon' type='image/png' href='/favicon.png' />
            <title>Igboanugwo Collins</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
