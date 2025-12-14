
const Formulator = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-evenly lg:justify-evenly lg:flex-row p-4 lg:p-6 gap-2 lg:gap-4'>
        <form action="" className='flex flex-col justify-evenly w-[full] md:w-[50%] lg:w-[50%] border p-4 lg:p-8 gap-8 my-10 lg:my-6'>

        <h1>FIll in form to generate Password</h1>

        <input placeholder='1. Your First Name' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black'/>

        <input placeholder='2. Your Last Name' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <input placeholder='3. Your Vibes Name/Phrase' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <input placeholder='4. PRevious Vibe Phrase' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <input placeholder='5. Most Remebered Character' type="text" className='bg-[#80808022] p-2 lg:p-3 w-full rounded-2xl text-black' />

        <button className='bg-green-500 p-2 lg:p-3 rounded-3xl text-white hover:bg-green-300 '>Submit</button>
        </form>

        <div className='w-[full] lg:w[50%] md:w-[50%] border-dashed border-2  my-8 md:my-10 lg:my-6 p-4 lg:p-8 flex items-center justify-center'>
            <p>No paswword Generated yet</p>
        </div>
   
    </div>
  )
}

export default Formulator
