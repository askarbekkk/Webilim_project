import ReactPlayer from "react-player";
import Spinner from "../Spinner";

export const ContentList = ({data}) => {
    if (data?.length === 0) {
        return <Spinner/>
    }

    const getContent = (contentData) => {
        if (contentData?.url) {
            return <ReactPlayer url={contentData?.url}/>;
        } else if (contentData?.body) {
            return <div className="text-white text-2xl"> {contentData?.body}</div>;
        } else if (contentData?.file) {
            return (
                <a
                    href={contentData?.file}
                    target="_blank"
                    className="text-white text-2xl"
                >
                    {contentData?.title}
                </a>
            );
        } else if (contentData?.image) {
            return <img src={contentData?.image} alt=""/>;
        }
    };

    return (
        <div className="flex flex-col items-center">
            {data?.contents?.length === 0 ? (
                <h1 className="text-white text-2xl">Материалов урока пока что нет.</h1>
            ) : (
                data?.contents?.map((item, i) => {
                    return <div key={item?.title + "" + i}>{getContent(item?.item)}</div>;
                })
            )}
        </div>
    );
};
