import {useSelector} from 'react-redux'
import {IntlProvider} from "react-intl";
import {MESSAGES} from "../intl/messages";
import {wrapper} from "../redux/reducer";
import 'tailwindcss/tailwind.css'
import '../styles/scss/index.scss';
import Head from "next/head";
import {DefaultSeo} from "next-seo";
import {metaTags} from "../constants/seo";


function MyApp({Component, pageProps}) {
    const isBrowser = typeof window !== "undefined";
    console.log(isBrowser , "window")
    // return isBrowser ? (
    //     <Component {...pageProps} />
    // ) : null;

    const locale = useSelector(state => state.main.locale);
    return  (
        <>
            <Head>
                <title>Webilim 24</title>
                <link rel="icon" href="/web.png/"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta
                    name="description"
                    content="
                         ИШКЕРДИК АКАДЕМИЯСЫ📍БИЗНЕС
                        Образование
                       🇰🇬КРдеги №1 кыргыз тилдүү тренинг борбору!
                       📍Натыйжалар @otzivi_iakademy
                       📍30 миңден ашуун бүтүрүүчү🥳
                       📍Онлайн ж/а оффлайн
⠀
                       Турусбеков 109/2 (Maximum)
                       "
                />


            </Head>


            <IntlProvider locale={locale} messages={MESSAGES[locale]}>
                <DefaultSeo {...metaTags} />
                <Component {...pageProps}/>
            </IntlProvider>
        </>

    )
}

export default wrapper.withRedux(MyApp);
