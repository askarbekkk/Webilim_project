import SubscriptionPage from "../../components/Profile/Subscription/subscription-page";
import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";



export  default function  PrivatePage(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <SubscriptionPage/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}