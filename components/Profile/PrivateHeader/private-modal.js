


import Link from "next/link";
import {useRouter} from "next/router";


export default function PrivateModal() {
    const router = useRouter()
    function Links(el) {

        return (
            <div className={el.links}>
                <Link href={el.links}><a
                    onClick={() => router.replace(`${el.links}`)}
                    className="text-[#8C8C8C] font-bold text-[15px] hover:text-white hover:ease-in-out	"
                >{el.name}</a>
                </Link>
            </div>
        )
    }

    return (
        <div className="PrivateModal">
            <div className=" grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center  md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-user "/>
                    </div>
                    <Links links="/profile/private-page" name={"Личные данные"}/>
                </div>
                <div className="flex flex-col justify-center  items-center md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-credit-card"/>
                    </div>
                    <Links links="/profile/subscription" name={"Подписка"}/>
                </div>
                <div className="flex flex-col justify-center items-center  md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="fas fa-shopping-basket"/>
                    </div>
                    <Links links="/profile/my-purchases" name={"Мои покупки"}/>
                </div>
                <div className="flex flex-col justify-center  items-center md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-wallet"/>
                    </div>
                    <Links links="/profile/payment-cards" name={"Платежные карты"}/>
                </div>
                <div className="flex flex-col justify-center items-center md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-bell"/>
                    </div>
                    <Links links="/profile/notifications" name={"Уведомления"}/>
                </div>
                <div className="flex flex-col  justify-center items-center md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="fal fa-comment-alt"/>
                    </div>
                    <Links links="/profile/comments" name={"Комментарии"}/>
                </div>
                <div className="flex flex-col justify-center items-center md:mx-3">
                    <div className="privateIcone mx-5">
                        <i className="fal fa-sign-out"/>
                    </div>
                    <Links links="/" name={"Выйти"}/>
                </div>
            </div>
        </div>
    )
}
