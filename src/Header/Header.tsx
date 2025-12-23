import {FaBlog} from "react-icons/fa"

const Header = () => {
  return (
    <div className=' bg-transparent lg:bg-green-400 md:bg-green-400 p-3 lg:p-4 flex flex-row justify-between items-center'>
      <h1 className='text-xl lg:text-4xl lg:font-light'>Password Generator </h1>

      <div className='rounded-full p-2 lg:p-3 border lg:border'>
        <FaBlog size={20} className='text-[#000000c1] lg:text-white md:text-white ' />
      </div>
    </div>
  )
}

export default Header
