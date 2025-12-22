// import {generatePasssword} from "../services/generator.ts"

import { useState } from "react"
import { generatePassword, type UserDetails, type passwordConfig, type passwordType } from '../services/generator';

const Formulator = () => {

  const [userDetails, setUserDetails] = useState <UserDetails>({
    firstname: '',
    lastname: '',
    favPhrase: '',
    remembered: ''
  })

  const [config, setConfig] = useState <passwordConfig> ({
    lenght: 12,
    type: "mixed",
    case:"mixed",
  })

  const [passwords, setPasswords] = useState <string[]>([]);

  const handleGenerate = () => {
    const newPassword = generatePassword(userDetails, config)
    console.log("New Password", newPassword)
    setPasswords(newPassword)
  }

  return (
    <div className='flex flex-col md:flex-row md:justify-evenly lg:justify-evenly lg:flex-row p-4 lg:p-6 gap-2 lg:gap-4'>
        <div  className='flex flex-col justify-evenly w-[full] md:w-[50%] lg:w-[50%] border p-4 lg:p-8 gap-8 my-10 lg:my-6'>

        <h1>FIll in form to generate Password</h1>

        <input required value={userDetails.firstname} onChange={(e) => setUserDetails({...userDetails, firstname: e.target.value})} placeholder='1. Your First Name' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black'/>

        <input value={userDetails.lastname} onChange={(e) => setUserDetails({...userDetails, lastname: e.target.value})} placeholder='2. Your Last Name' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <input value={userDetails.favPhrase} onChange={(e) => setUserDetails({...userDetails, favPhrase: e.target.value})} placeholder='3. Your Vibes Name/Phrase' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <input value={userDetails.remembered} onChange={(e) => setUserDetails({...userDetails, remembered: e.target.value})} placeholder='4. Most remembered character' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />
        
        
        <select name="" id="" value={config.type} onChange={(e) => setConfig({...config, type: e.target.value as passwordType})} className="bg-[#80808022] text-[#000000cf] py-2 px-4 lg:py-3 lg:px-4 outline-none w-full rounded-2xl text-black">
          {['password type','numeric', 'alphabetical', 'mixed'].map((char, index) => (
            <option key={index} value={char} className="text-[grey]">{char}</option>
          ))} 
        </select>

        <select name="" id="" value={config.lenght} onChange={e => setConfig({...config, lenght: Number(e.target.value)})} className="bg-[#80808022] text-[#000000ac] py-2 px-4 lg:p-3 lg:px-4 w-full rounded-2xl text-black">
          {[8, 12, 16, 22, 24].map((char, index) => (
            <option key={index} value={char}>{char} chars</option>
          ))}
        </select>

        {/* <input value={config.lenght} onChange={} placeholder='5. Password lenght' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' /> */}

        <button onClick={handleGenerate} className='bg-green-500 p-2 lg:p-3 rounded-3xl text-white hover:bg-green-300'>Submit</button>
        </div>

        <div className='w-[full] lg:w[50%] md:w-[50%] border-dashed border-2  my-8 md:my-10 lg:my-6 p-4 lg:p-8 flex items-center justify-center'>
            { 
              passwords.length > 0 ? (

                <div className="">
                  <p className="p-2 lg:p-4">Generated Password</p>
                  { passwords.map((char, index) => (
                    <p key={index} className="font-medium space-x-3 p-1 lg:p-2 text-center">{char}</p>
                  ))}
                </div>
                ) : (
                  <p>No password Generated yet</p>
                )
            }
        </div>
   
    </div>
  )
}

export default Formulator
