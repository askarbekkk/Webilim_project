import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import CommentsPage from "../../components/Profile/Comments/comments-page";


export default function Comments() {
    return (
        <HomeLayout>
            <PrivateHomelayout>
                <CommentsPage/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}