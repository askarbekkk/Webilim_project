import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import api from "../../axiosAPI/api";
import { useDispatch, useSelector } from "react-redux";
import { setFaq } from "../../../redux/reducers/faq";

export default function Accordion({children}) {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };


  const dispatch = useDispatch();
  const fetchFaq = async () => {
    dispatch(setFaq(null));
    const { data } = await api.get("api/v2/faq-list/");
    dispatch(setFaq(data));
  };

  // })
  useEffect(() => {
    fetchFaq();
  }, []);
  console.log(children , "faqChildren")

  const data = useSelector((state) => state.faq.faq);

  return (
    <IconContext.Provider value={{ color: "#e00d30", size: "25px" }}>
      <div className="AccordionSection">
        {children?.length > 0 ? (
          children?.map((item, index) => {
            return (
              <div key={index}>
                <div className="Wrap" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>
                    {clicked === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                {clicked === index ? (
                  <div className="Dropdown">
                    <p className="answer">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
            data?.map((item, index) => {
              return (
                  <div key={index}>
                    <div className="Wrap" onClick={() => toggle(index)} key={index}>
                      <h1>{item.question_ky}</h1>
                      <span>
                    {clicked === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                    </div>
                    {clicked === index ? (
                        <div className="Dropdown">
                          <p className="answer">{item.answer_ky}</p>
                        </div>
                    ) : null}
                  </div>
              );
            })
        )}
      </div>
    </IconContext.Provider>
  );
}
