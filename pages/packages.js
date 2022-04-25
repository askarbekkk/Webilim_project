import HomeLayout from "../components/HomeLayout";
import Faq from "../components/Home/FAQ/FAQ";
import MainForm from "../components/Home/FormReq/MainForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import api from "../components/axiosAPI/api";
import BatchItem from "../components/Package/batchItem";
import {setBatch} from "../redux/reducers/batch";

export default function Package() {
    const dispatch = useDispatch()

    const fetchBatch = async () => {
        dispatch(setBatch(null))
        const {data} = await api.get(`/ru/api/v1/package-list/`)
        dispatch(setBatch(data))
    }
    useEffect(() => {
        fetchBatch()
    }, [])

    const data = useSelector(state => state.batch.batch)

    return (
        <HomeLayout>
            <section id="package" className="mb-14 pt-[40px]">
                <div className="container mx-auto">
                    <div className="flex justify-center flex-col items-center mt-4">
                        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mt-10 lg:mb-6">ВЫБЕРИТЕ
                            СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                        <p className="text-center text-white">Присоединяйтесь к международному сообществу учеников
                            Кайдзен Школы и <br/>
                            становитесь эффективными и счастливыми без хронической занятости и выгорания</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-20">
                        {data ? (
                            data.map((item) => (
                                <BatchItem el={item} key={item.id}/>
                            ))
                        ) : (
                            <h1>Loading</h1>
                        )}


                    </div>
                    <p className="pt-[20px] text-center text-[#9099A3]">Списания будут автоматическими. Вы всегда можете
                        отменить подписку <br/>
                        в Вашем личном кабинете и больше списаний не будет.</p>
                </div>
            </section>
            <MainForm/>
            <Faq/>
        </HomeLayout>
    )
}

