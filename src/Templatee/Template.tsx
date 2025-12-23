import React, { useState } from "react";
import { templates, type templateData } from "../constants/data";
import { FaSearch, FaRegCopy } from "react-icons/fa";

const Template = () => {
  const [value, setvalue] = useState<string>("");
  const [filtered, setFiltered] = useState<templateData>(templates);
  // const [copy, setCopy] = useState<boolean>(false);

  const handleCanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
    setFiltered(templates);
  };

  const handleSearch = () => {
    if (value.trim() === "") return;

    const filtered = templates.filter(
      (template) =>
        template.name.toLowerCase().includes(value.trim().toLowerCase())
      // template.unique.toLowerCase().includes(value.trim().toLowerCase())
    );
    setFiltered(filtered);
  };

  const handleCopy = (item: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(item);
    } else {
      console.log("couldnn't copy")
    }
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between mx-4 p-4 lg:mx-8  md:mx-6 border-b-2">
        <h1 className="text-xl lg:text-4xl">Templates</h1>
        <div className="relative flex-row">
          <input
            placeholder="search templates"
            type="text"
            value={value}
            onChange={(e) => handleCanges(e)}
            className="bg-[#80808011] py-1.5 px-2.5 lg:p-3 rounded-3xl "
          />
          <button
            onClick={handleSearch}
            className="bg-[#80808032] backdrop-blur-10 rounded-[100%] p-2 lg:p-3 absolute right-2 lg:top-1.5 top-1.5 hover:bg-[#80808081]"
          >
            <FaSearch size={10} />{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:3 lg:4 p-4 lg:p-8">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col border-dotted border-4 p-3 lg-p4 m-2 lg:m-3 rounded-3xl"
          >
            <p className="font-light text-xl lg:text-2xl ">{item.id}</p>
            <p className="font-light text-2xl lg:3xl text-blue-400">
              {item.name}
            </p>
            <p className="font-normal text-xl ">{item.favPhrase}</p>
            <p className="font-medium text-sm lg:text-md line-through decoration-black text-[#80808070]">
              {item.unique}
            </p>
            <div className="rounded-full bg-[#80808016] hover:bg-[#80808018] hover:p-3 lg:hover:p-3 p-2 lg:p-3 absolute top-2 right-2">
            <FaRegCopy onClick={() => handleCopy(item.unique)} className="text-sm text-center text-[grey]"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
