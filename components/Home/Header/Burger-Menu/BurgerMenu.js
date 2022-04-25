import Link from "next/link";
import {useEffect} from "react";
import {useSelector} from "react-redux";

// import {useIntl} from "react-intl";

export default function BurgerMenu() {
    // const {formatMessage, locale} = useIntl()

    const menu = () => {
        if (process.browser) {
            const burgerMenu = document.querySelector(".burger__menu")

            burgerMenu.addEventListener('click', () => {
                document.querySelector(".burger__menu").classList.toggle("active")
                document.querySelector(".menu").classList.toggle("m_active")
                document.querySelector('#header').classList.toggle('menu-bg')
                document.querySelector('.menu').classList.toggle('burger-menu-bg')

            })
        }
    }
    useEffect(() => {
        menu();
    }, [])

    const access = useSelector(state => state.main.access_token)
    const refresh = useSelector(state => state.main.refresh_token)
    const userID = useSelector(state => state.main.user_id)

    const isAuth = access && refresh && userID

    return (
        <div className="sm:flex md:hidden ">
            <div className="burger__menu">
                <span className="burger"/>
            </div>
            <div className="menu">
                <nav className="menu__nav-items">
                    <Link href={'/'}><a
                        className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                        Башкы бет
                    </a>
                    </Link>

                    <Link href={'/all-courses'}>
                        <a
                            className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            Тренингдер
                        </a>
                    </Link>
                    <Link href={'/travel'}>
                        <a
                            className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            Саякат
                        </a>
                    </Link>

                    {
                        isAuth ?
                            <>
                                <Link href={'/course-paybox'}>
                                    <a
                                        className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                                        Активные
                                    </a>
                                </Link>


                            </>

                            :
                            <>
                                <Link href={'/login'}>
                                    <a
                                        className="font-medium text-gray-400  text-xl leading-5 mx-4 hover:text-white nav-item">
                                        войти
                                    </a>
                                </Link>

                            </>
                    }
                    <Link href={isAuth ? '/profile/private-page' : "/login"}>
                        <a
                            className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            Личный кобинет
                        </a>
                    </Link>


                    {/*<Link href={'/trips'}>*/}
                    {/*<a*/}
                    {/*    className="font-medium text-gray-700 text-xl leading-5 cursor-pointer  mx-4 nav-item">*/}
                    {/*    Саякат*/}
                    {/*</a>*/}
                    {/*/!*</Link>*!/*/}
                    {/*<a href="/#subscribe" className="menu__nav-items__btn">Жазылуу</a>*/}

                </nav>
            </div>
        </div>
    )
}