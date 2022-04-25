import MyPurchasesHero from "../MyPurchases/my-purchases-hero";
// import Data from "../../../";
// import ClubProcessItem from "../../../pages/packages";
// import {Data} from "../../data";

export default function SubscriptionPage() {
  return (
    <>
      <div className="w-[100%] p-4 md:px-6 md:py-10 mb-5 bg-[#282B2E] rounded-[15px]">
        <h1 className="text-white leading-relaxed  md:text-[32px] lg:text-[36px] text-[22px]  font-boldsm:w-[80%]">
          ПОДПИСКА
        </h1>
        <div className=" md:hidden">
          <div className="flex my-3">
            <p className="text-white font-light">Тариф :</p>
            <pre className="text-white font-light">Год +</pre>
          </div>
          <div className="flex my-3">
            <p className="text-white font-light">Статус :</p>
            <pre className="text-white font-light">Завершенная</pre>
          </div>
          <div className="flex my-3">
            <p className="text-white font-light">Сумма :</p>
            <pre className="text-white font-light">485 , 00 $</pre>
          </div>
          <div className="flex my-3">
            <p className="text-white font-light">Карта:</p>
            <pre className="text-white font-light">(5106 21 ХХ ХХХХ 4186)</pre>
          </div>
          <div className="flex my-3">
            <p className="text-white font-light">Действует до :</p>
            <pre className="text-white font-light">30 апреля 2022</pre>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:block">
          <div className="md:col-span-2">
            <p className="text-[18px] text-white font-bold my-5">Тариф :</p>
            <p className="text-[18px] text-white font-bold my-5">Статус :</p>
            <p className="text-[18px] text-white font-bold my-5">Сумма :</p>

          </div>
          <div>
            <pre className="text-[18px]  text-white font-bold my-5">Год +</pre>
            <pre className="text-[18px] text-white font-bold my-5">
              Завершенная
            </pre>
            <pre className="text-[18px] text-white font-bold my-5">
              485 , 00 $
            </pre>

            <pre className="text-[18px] text-white font-bold my-5">
              30 апреля 2022
            </pre>
          </div>
        </div>
      </div>
      <div className="w-[100%] p-4 md:px-6 md:py-10 mb-5 bg-[#282B2E] rounded-[15px]">
        <h1 className="md:text-[24px] text-[18px] text-white font-bold my-4">
          ОФОРМИТЬ ПОДПИСКУ
        </h1>
        <p className="md:text-[18px] md:font-bold text-[#DCDCDC]">
          Для получения доступа выберите свой тарифный пакет
        </p>
        <div className="grid md:grid-cols-2 gap-2 mt-4 md:mt-20">
          {/*{Data.map(item => {*/}
          {/*    return (*/}
          {/*        <ClubProcessItem item={item} isRecommended={item.isRecommended}/>*/}
          {/*    )*/}
          {/*})}*/}

          {/* {Data.map(item => {
                        return (
                            <ClubProcessItem item={item} isRecommended={item.isRecommended}/>
                        )
                    })} */}
        </div>
        <p className="text-[#838384] text-[14px] font-light md:w-[90%] my-4">
          При выборе тарифного пакета “Месяц” , с Вашей карты ежемесячно будет
          производится списании на условиях тарифного пакета- всего 19.00 $мес.
          При выборе тарифного пакета “Год” , с Вашей краты ежегодно будет
          производится списание на условиях тарифногот пакета - всего 225,00 $ .
          При выбора тарифного пакета “Год+”,с Вашей карты ежегодно будет
          автоматическими.
        </p>
        <p className="text-[#838384] text-[14px] font-light">
          {" "}
          Вы всегда можете отменить подписку в Вашем личном кабинете и больше
          списаний не будет.
        </p>
      </div>
    </>
  );
}
