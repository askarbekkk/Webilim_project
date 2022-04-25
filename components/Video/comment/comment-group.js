
import axios from "axios"
import CommentAdd from "./comment-add";
import CommentList from "./comment-list";
import React , {Component} from "react";



class CommentGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {id: 1, body: "new Comment for Moition-web it company"},
                {id: 2, body: "news kyrgyzstan bishkek motionWeb Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos id molestiae porro? Consequatur ducimus ipsum quo quos. Consequuntur doloremque ea enim eos in itaque iure libero modi nobis qui? "},
            ]
        }


    }

    handleCommentSubmit(data) {
        const postData = {
            comment: data
        };

        axios.post(`/api/comments/save`, postData).then((responce) => {
            console.log("responce"  , responce.data);
            let comments = this.state.comments;
            comments.unshift({
                id : comments.length + 1,
                body : responce.data.comment
            })
            this.setState({ comments: comments})
        })
    }
    renderComments(){
        const {comments} =this.state;
        return comments.map(comment => {
            const {id , body} = comment
            return (
                <CommentList key={id} body={body}/>
            )
        })
    }

    render(){
        return (
            <section id="comments-wrapper">
                <CommentAdd handleCommentSubmit={this.handleCommentSubmit}/>
                <div className="container mx-auto">
                    <div className="w-[75%]  p-8 h-[70vh] overflow-hidden">
                        {this.renderComments()}
                    </div>
                </div>
                <div className="elips2 mt-10"/>
            </section>
        )
    }
}
export default CommentGroup;


