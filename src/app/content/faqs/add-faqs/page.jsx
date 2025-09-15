"use client";
import MenuItem from "@/app/components/re-usable/MenuItem";
import React, { useState } from "react";

const Page = () => {
  const [questions, setQuestions] = useState([
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  const handleAdd = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <section>
      <div className="mb-6">
        <MenuItem
          parent={"Content"}
          page={"FAQ's"}
          addPage={"Add Question"}
          href={"/content/faqs"}
        />
      </div>

        <div className="bg-white p-4 rounded-2xl">
          <h3 className="text-[#181818] font-bold text-xl mb-6">
            Add Question
          </h3>

          {questions.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#FAF9FC] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
              <div className="flex flex-col">
                <label className="text-[#181818] text-lg mb-2">
                  Q{index + 1}
                </label>
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) =>
                    handleChange(index, "question", e.target.value)
                  }
                  className="py-2 bg-white border border-[#DCDCDC] rounded-lg px-2"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#181818] text-lg mb-2">
                  Ans {index + 1}
                </label>
                <input
                  type="text"
                  value={item.answer}
                  onChange={(e) =>
                    handleChange(index, "answer", e.target.value)
                  }
                  className="py-2 bg-white border border-[#DCDCDC] rounded-lg px-2"
                />
              </div>
            </div>
          ))}

          <p
            onClick={handleAdd}
            className="text-[#0E4F53] font-medium mb-6 cursor-pointer w-fit"
          >
            + Add Another
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="text-[#ED1400] border border-[#ED1400] px-4 py-2 rounded-md cursor-pointer">
              Cancel
            </button>
            <button className="bg-[#0E4F53] text-white px-4 py-2 rounded-md cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Page;
