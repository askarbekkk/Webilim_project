import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import MyPurchasesHero from "../../components/Profile/MyPurchases/my-purchases-hero";
import MyPurchasesHeroMd from "../../components/Profile/MyPurchases/my-purchases-hero-md";


export  default function  MyPurchases(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <MyPurchasesHero/>
                <MyPurchasesHeroMd/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}