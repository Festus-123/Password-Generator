// import {generatePasssword} from "../services/generator.ts"

import { useState } from "react";
import {
  generatePassword,
  type UserDetails,
  type passwordConfig,
  type passwordType,
} from "../services/generator";

import { FaCopy, FaRegCopy } from "react-icons/fa";

const Formulator = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstname: "",
    lastname: "",
    favPhrase: "",
    remembered: "",
  });

  const [config, setConfig] = useState<passwordConfig>({
    lenght: 12,
    type: "mixed",
    case: "mixed",
  });

  const [errors, setErrors] = useState<string>("");
  const [copy, setCopy] = useState<boolean>(false);

  const [passwords, setPasswords] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!userDetails.firstname.trim() || userDetails.firstname.length < 0) {
      setErrors(`invalid input ${userDetails.firstname}`);
    } else if (
      !userDetails.lastname.trim() ||
      userDetails.lastname.length < 0
    ) {
      setErrors(`invalid input ${userDetails.lastname}`);
    } else if (
      !userDetails.favPhrase.trim() ||
      userDetails.favPhrase.length < 0
    ) {
      setErrors(`invalid input ${userDetails.favPhrase}`);
    } else if (
      !userDetails.remembered.trim() ||
      userDetails.remembered.length < 0
    ) {
      setErrors(`invalid input ${userDetails.remembered}`);
    } else {
      setErrors("");
      const newPassword = generatePassword(userDetails, config);
      console.log("New Password", newPassword);
      setPasswords(newPassword);
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      passwords.map((char) => {
        navigator.clipboard.writeText(char);
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
        console.log("Copy","copying")
      });
    } else {
      setCopy(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly lg:justify-evenly lg:flex-row p-4 lg:p-6 gap-2 lg:gap-4">
      <div className="flex flex-col justify-evenly w-[full] md:w-[50%] lg:w-[50%] border p-4 lg:p-8 gap-8 my-10 lg:my-6">
        <h1>FIll in form to generate Password</h1>

        <input
          required
          value={userDetails.firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserDetails({ ...userDetails, firstname: e.target.value })
          }
          placeholder="1. Your First Name"
          type="text"
          className="bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black"
        />

        <input
          required
          value={userDetails.lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserDetails({ ...userDetails, lastname: e.target.value })
          }
          placeholder="2. Your Last Name"
          type="text"
          className="bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black"
        />

        <input
          required
          value={userDetails.favPhrase}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserDetails({ ...userDetails, favPhrase: e.target.value })
          }
          placeholder="3. Your Vibes Name/Phrase"
          type="text"
          className="bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black"
        />

        <input
          required
          value={userDetails.remembered}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserDetails({ ...userDetails, remembered: e.target.value })
          }
          placeholder="4. Most remembered character"
          type="text"
          className="bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black"
        />

        <select
          required
          name=""
          id=""
          value={config.type}
          onChange={(e) =>
            setConfig({ ...config, type: e.target.value as passwordType })
          }
          className="bg-[#80808022] text-[#000000cf] py-2 px-4 lg:py-3 lg:px-4 outline-none w-full rounded-2xl text-black"
        >
          {["numeric", "alphabetical", "mixed"].map((char, index) => (
            <option key={index} value={char} className="text-[grey]">
              {char}
            </option>
          ))}
        </select>

        <select
          required
          name=""
          id=""
          value={config.lenght}
          onChange={(e) =>
            setConfig({ ...config, lenght: Number(e.target.value) })
          }
          className="bg-[#80808022] text-[#000000ac] py-2 px-4 lg:p-3 lg:px-4 w-full rounded-2xl text-black"
        >
          {[8, 12, 16, 22, 24].map((char, index) => (
            <option key={index} value={char}>
              {char} chars
            </option>
          ))}
        </select>

        {/* <input value={config.lenght} onChange={} placeholder='5. Password lenght' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' /> */}
        {errors ? (
          <p className="text-red-600 font-bold p-1 lg:p-2">{errors}</p>
        ) : null}

        <button
          onClick={handleGenerate}
          className="bg-green-500 p-2 lg:p-3 rounded-3xl text-white hover:bg-green-300"
        >
          Submit
        </button>
      </div>

      <div className="relative w-[full] lg:w[50%] md:w-[50%] border-dashed border-2  my-8 md:my-10 lg:my-6 p-4 lg:p-8 flex items-center justify-center hover:bg-[#80808008]">
        <div className="rounded-full p-2 lg:p-3 hover:bg-[#80808026] absolute left-2 top-2 bg-[#8080800a]">
          {copy ? (
            <FaRegCopy className="text-center" />
          ) : (
            <FaCopy className="text-center" onClick={handleCopy} />
          )}
        </div>
        {passwords.length > 0 ? (
          <div className="">
            <p className="p-2 lg:p-4">Generated Password</p>
            {passwords.map((char, index) => (
              <div>
                <p
                  key={index}
                  className="font-medium space-x-3 p-1 lg:p-2 text-center"
                >
                  {char}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No password Generated yet</p>
        )}
      </div>
    </div>
  );
};

export default Formulator;
