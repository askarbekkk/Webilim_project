import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
import React from "react";

const RewiesTravel = () => {
    const data = useSelector(state => state.travelOne.data)
    return (
        <section>
            <div className="container py-[50px]">
                {
                    data?.reviews === 1 && <><h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">ВИДОЕОТЗЫВЫ О ТУРЕ</h1>
                        {
                            data?.reviews?.map(el => (
                                <>
                                    <h1 className="text-white py-[20px]">{el?.text}</h1>
                                    <ReactPlayer
                                        controls
                                        url={el?.video}
                                        className="border"
                                    />
                                </>
                            ))
                        }</>

                }

            </div>
        </section>
    );
};

export default RewiesTravel;