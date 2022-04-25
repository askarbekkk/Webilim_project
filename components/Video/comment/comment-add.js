import React, {useState} from "react";


function CommentAdd(props) {
    const {handleCommentSubmit} = props;
    const [comment, setComment] = useState("")
    return (


        <div className="container mx-auto pt-[40px]">
            <div className="my-20">
                <h1 className="text-[36px] text-white font-bold my-4">Дополнительные материалы</h1>
                <pre className="text-white text-[16px] font-light -mt-3 mb-4">Чтобы скачать материал, нажмите натназвание материала</pre>
                <div className="flex pt-6">
                    <div
                        className="flex items-center justify-center border-[#9099A3] px-10 py-4  border-2 rounded-[15px]">
                        <pre className="text-[#9099A3] "><i className="fas fa-file"/>Рабочая тетрадь</pre>
                    </div>
                    <div
                        className="flex items-center border-[#9099A3] justify-center  px-10 py-4  mx-5 border-2 rounded-[15px]">
                        <pre className="text-[#9099A3] "><i className="fas fa-file"/>Конспекть урока №1 </pre>
                    </div>
                </div>
            </div>
            <div className="pt-10">
                <h1 className="text-[36px] text-white font-bold my-4">Комментарии</h1>
                <div className="w-[55%] p-8 rounded-[15px] bg-[#2B2C30] my-6">
                        <textarea className='w-[100%] p-4 rounded-[15px] bg-[#5A5A5A] text-white' name="comment"
                                  id="comment" cols="30" rows="10"
                                  onChange={(event) => setComment(event.target.value)}
                                  value={comment}
                                  placeholder="Ваш  комментарий"
                        />
                    <button className="btn" onClick={() => {
                        handleCommentSubmit(comment)
                        setComment('')
                    }
                    }>
                        Отправить
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CommentAdd


