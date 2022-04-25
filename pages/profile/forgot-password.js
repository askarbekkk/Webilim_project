import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import PasswordForgot from "../../components/Profile/password-forgot";


export default function  ForgotPassword(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <PasswordForgot/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}