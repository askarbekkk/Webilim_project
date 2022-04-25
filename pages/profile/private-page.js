import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import PrivateHero from "../../components/Profile/PrivateHero/private-hero";
import {useDispatch, useSelector} from "react-redux";
import {setAllCourses, setAllCoursesLoaded} from "../../redux/reducers/course";
import api from "../../components/axiosAPI/api";
import {useEffect} from "react";
import {setProfileOne} from "../../redux/reducers/profileOne";
import Spinner from "../../components/Spinner";


export  default function  PrivatePage(){

    const dispatch = useDispatch();
    const userId = useSelector(state => state.main.user_id)
    const userToken = useSelector(state => state.main.access_token)
    const {data} = useSelector(state => state.profileOne);

    const profileOne = useSelector(state => state.profileOne);


    const fetchAllCourses = () => {
        // const {data} = await api.get(`/ru/api/v2/user-profile/${userId}/` , {
        //     auth: { 'token':  userToken }
        // });
        // dispatch(setProfileOne(data));
        api.get(`/ru/api/v2/user-profile/${userId}/`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then(({data}) => {
                dispatch(setProfileOne(data));

            });




    }


    useEffect(() => {
        fetchAllCourses();
    }, [dispatch]);


    if (!profileOne) {
        return <Spinner/>;
    }

    return(
        <HomeLayout>
            <PrivateHomelayout>
                <PrivateHero fetchAllCourses={fetchAllCourses}/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}