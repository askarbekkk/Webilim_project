import {NotificationData} from "./NotificationData";


export default function NotificationsPage() {
    return (
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E]  rounded-[15px]">
                <div>
                    <h1 className='text-white leading-relaxed  md:text-[22px] lg:text-[24px] text-[18px]  font-bold md:w-[80%]'>ХОТИТЕ ПОЛУЧАТЬ УВЕДОМЛЕНИЯ В
                        TELEGRAM-БОТ?</h1>
                    <p className="text-white text-[18px] font-light my-4 md:w-[80%]">Вы можете подключить наш чат-бот м
                        вовремя получать все уведомления платформы </p>
                </div>
                <div className="mt-16 mb-8">
                    <button className=" p-3 pr-6 rounded-[15px] font-bold bg-[#239FD3] text-white"><i
                        className="fab fa-telegram-plane text-white mx-4"/>Подключить бот
                    </button>
                </div>
            </div>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <h1 className='text-white md:text-[24px] text-[18px] font-bold md:w-[80%]'>УВЕДОМЛЕНИЯ</h1>
                <div className="mt-8">
                    {
                        NotificationData.map((item) => {
                            return (
                                <div className="my-8">
                                    <div className="flex md:items-center flex-col md:flex-row">
                                        <div
                                            className="flex justify-center md:mx-8 items-center w-[50px] h-[50px] rounded-full bg-[#494D51]">
                                            <i className="fal fa-credit-card text-[#A1ABB6]"/>
                                        </div>
                                        <div className="">
                                            <p className="text-[#A1ABB6] font-light text-[15px]">{item.date}</p>
                                            <p className="text-white  text-[15px]">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
