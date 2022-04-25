import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { logout } from "../../axiosAPI/api_axios";
import { clear } from "../../../redux/reducers/main";
import { useDispatch } from "react-redux";

export default function PrivateHeader() {
  const dispatch = useDispatch();
  const router = useRouter();
  const coole = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
    Cookies.remove("user_id");
  };
  function Links(el) {
    return (
      <div
        className={el.links}
        onClick={() => {
          if (el.name === "Выйти") {
            logout();
            dispatch(clear());
            coole();
          }
        }}
      >
        <Link href={el.links}>
          <a className="text-[#8C8C8C] font-bold text-[17px] hover:text-white hover:ease-in-out	">
            {el.name}
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col PrivateHeader">
        <div className="flex items-center my-3 " style={{opacity: "0"}}>
          <div className="privateIcone mx-5">
            <i className="far fa-user " />
          </div>
          <Links
            links="/profile/private-page"
            name={"Личные данные"}
            className=""
          />
        </div>
        <div className="flex items-center my-3 cursor-pointer">
          <div className="privateIcone mx-5">
            <i className="far fa-user " />
          </div>
          <Links
              links="/profile/private-page"
              name={"Личные данные"}
              className="cursor-pointer"
          />
        </div>
        <div className="flex items-center my-3">
          <div className="privateIcone mx-5">
            <i className="far fa-credit-card" />
          </div>
          <Links links="/profile/subscription" name={"Подписка"} />
        </div>
        <div className="flex items-center my-3">
          <div className="privateIcone mx-5">
            <i className="fas fa-shopping-basket" />
          </div>
          <Links links="/profile/my-purchases" name={"Мои покупки"} />
        </div>
        <div className="flex items-center my-3">
          <div className="privateIcone mx-5">
            <i className="far fa-bell" />
          </div>
          <Links links="/profile/notifications" name={"Уведомления"} />
        </div>
        <div className="flex items-center my-3">
          <div className="privateIcone mx-5">
            <i className="fal fa-comment-alt" />
          </div>
          <Links links="/profile/comments" name={"Комментарии"} />
        </div>
        <div className="flex items-center my-3">
          <div className="privateIcone mx-5">
            <i className="fal fa-sign-out" />
          </div>
          <Links links="/" name={"Выйти"} />
        </div>
      </div>
    </>
  );
}
