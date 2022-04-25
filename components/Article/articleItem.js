// import ImgFile from "../../assets/img/file-text 1.png";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function ArticleItem({ el }) {
  const router = useRouter();
  const getTime = (date) => {
    const current = new Date();
    const created = new Date(date);
    const timestamp = current - created;

    let logic = useMemo(() => {
      return timestamp > 3600
        ? timestamp > 86400
          ? `${new Date(
              new Date(timestamp).getDay() - current.getDay()
            ).getDate()} күн`
          : `${new Date(timestamp).getHours()} час.`
        : `${new Date(timestamp).getMinutes()} мин.`;
    }, []);
    return logic;
  };
  return (
    <div className="  bg-white  rounded-xl   px-3 py-3 relative " id={el.id}>
      <div className="flex items-center">
        <div className="w-[25px] h-[30px] relative mx-4">
          <i className="fas fa-book-open" />
        </div>
        <p className="invDesc text-[14px]">Статья</p>
      </div>

      <div className="mt-10 ">
        <h1
          onClick={() => router.push(`/article/${el.id}`)}
          className="invTitle cursor-pointer mb-2 hover:underline lg:text-[36px] md:text-[30px] text-[24px] md:w-[70%]"
        >
          {el.title}
        </h1>
        <p className="invDesc2 md:text-[18px]">{el.subtitle}</p>
        <p className="invDesc text-[14px] pt-[15px] flex  ml-2">
          {el.created_at}{" "}
          <span className="ml-2 invDesc text-[14px]">
            {getTime(el.created_at)}
          </span>
        </p>

        <div className="flex flex-col md:flex-row md:items-center py-4 my-6">
          <div className="w-[60px] h-[60px] relative overflow-hidden flex justify-center items-center rounded-[40%]">
            <img src={el.author.image} layout="fill" />
          </div>
          <div className="md:ml-4  md:-mt-2">
            <h1 className="font-bold   text-[16px]">{el.author.full_name}</h1>
            <p
              className="invDesc2  text-[16px]"
              dangerouslySetInnerHTML={{ __html: el.author.short_bio }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
