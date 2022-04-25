import HomeLayout from "../../components/HomeLayout";
import PrivateHomLayout from "../../components/Profile/private-homelayout";
import NotificationsPage from "../../components/Profile/Notifications/notifications-page";


export  default function  PrivatePage(){
    return(
        <HomeLayout>
            <PrivateHomLayout>
                <NotificationsPage/>
            </PrivateHomLayout>
        </HomeLayout>
    )
}