import React from 'react';
import {useIntl} from "react-intl";

const Lesson = ({el,idx}) => {
    const {formatMessage} = useIntl()
    return (
        <li><span>{idx + 1}</span>.<span className=" mr-2">{formatMessage({id: "lesson"})}.</span>{el.title}</li>
    );
};

export default Lesson;
