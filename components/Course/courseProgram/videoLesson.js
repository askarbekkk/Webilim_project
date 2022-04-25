import React from 'react';
import ReactPlayer from "react-player";
const border = {
    borderRadius: "20px"
}


const VideoLesson = ({el,idx}) => {
    return (
        <li>
            <span>{idx + 1}</span>.<span className=" mr-2">Сабак.</span>{el.contents.item.title}
            <div>
                <ReactPlayer
                    controls url={el.contents.item.url}
                    style={border}
                    className="border"
                    width="100%"
                    height="60vh"
                />
            </div>
        </li>
    );
};

export default VideoLesson;
