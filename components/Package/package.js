import classNames from "classnames";


export default function ClubProcessItem({isRecommended, item}) {

    return (
        <div>

            <div className={classNames("ClubPackage md:w-[85%] md:m-6 p-4  bg-white rounded-[15px]", {
                hover: isRecommended
            })}>
                <h1 className="text-[#2C3E50] mt-4">{item.nameCard}</h1>
                <div className="flex flex-col md:flex-row md:items-end mt-2">
                    <h2 className="text-[#2C3E50] text-[36px]  leading-[54px] font-bold">{item.price}</h2>
                    <div className="relative ">
                        <span className="text-[#9099A3] newPrice ">{item.newPrice}</span>
                    </div>
                </div>
                <h5 className="text-[14px] text-white rounded-[5px]  bg-[#9099A3] w-[80px] h-[20px] flex justify-center items-center">Полгода</h5>
                <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard}</p>
                <div className="mt-12 w-[100%] flex flex-col items-center ">
                    <button
                        className={classNames("pt-2 pb-2 pl-8 pr-8 bg-[#2C3E50] :hover:bg-[#1A5CFF]  rounded-[15px] text-white ClubPackage_btn ", {
                            hover: isRecommended
                        })}>
                        Оформить подписку
                    </button>
                    <a href="#" className="mt-2 text-[#2C3E50]">Подробнее</a>
                </div>
            </div>

        </div>
    )
}
