import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import main from "./reducers/main";
import masterClass from "./reducers/master-class";
import course from "./reducers/course";
import mentor from "./reducers/mentor";
import webinar from "./reducers/webinar";
import article from "./reducers/article";
import faq from "./reducers/faq";
import batch from "./reducers/batch";
import packege from "./reducers/packege";
import playlistOne from "./reducers/palylistOne";
import travel_list from "./reducers/travel_list";
import travelOne from "./reducers/travelOne";
import chek from "./reducers/chek";
import profileOne from "./reducers/profileOne";



const store = configureStore({
    reducer: {
        main,
        course,
        masterClass,
        webinar,
        mentor,
        article,
        faq,
        batch,
        packege,
        playlistOne,
        profileOne,
        travel_list,
        chek,
        travelOne
    }, middleware:[]
})
const makeStore = () => store
export const wrapper = createWrapper(makeStore)


