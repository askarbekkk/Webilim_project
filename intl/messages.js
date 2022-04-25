import {LOCALES} from "./locales";
import {Hero} from "./messages/hero";
import {Header} from "./messages/header";
import {Footer} from "./messages/footer";
import {Faq} from "./messages/faq";
import {Arcticle} from "./messages/arcticle";
import {MasterClass} from "./messages/master-class";
import {Courses} from "./messages/courses";
import {More} from "./messages/more";

export const MESSAGES = {
    [LOCALES.KYRGYZ]:{
        ...Hero[LOCALES.KYRGYZ],
        ...Header[LOCALES.KYRGYZ],
        ...Footer[LOCALES.KYRGYZ],
        ...Faq[LOCALES.KYRGYZ],
        ...Arcticle[LOCALES.KYRGYZ],
        ...MasterClass[LOCALES.KYRGYZ],
        ...Courses[LOCALES.KYRGYZ],
        ...More[LOCALES.KYRGYZ],

    },
    [LOCALES.RUSSIAN]:{
        ...Hero[LOCALES.RUSSIAN],
        ...MasterClass[LOCALES.RUSSIAN],
        ...Header[LOCALES.RUSSIAN],
        ...Footer[LOCALES.RUSSIAN],
        ...Faq[LOCALES.RUSSIAN],
        ...Courses[LOCALES.KYRGYZ],
        ...Arcticle[LOCALES.RUSSIAN],
        ...More[LOCALES.RUSSIAN],
    }

}
