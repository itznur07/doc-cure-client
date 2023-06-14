import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useState(false);

  return (
    <nav className={`bg-white`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            {/* Website Logo */}
            <Link to='/' className='flex items-center'>
              <img className='w-32' src={logo} alt='logo' />
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {/* Primary Navbar items */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                to='/'
                className='text-gray-500 hover:text-[#27374D] px-3 py-2 text-md font-medium'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-gray-500 hover:text-[#27374D] px-3 py-2 text-md font-medium'
              >
                About
              </Link>
              <Link
                to='/appointment'
                className='text-gray-500 hover:text-[#27374D] px-3 py-2 text-md font-medium'
              >
                Appointment
              </Link>
            </div>
            {/* Secondary Navbar items */}
            <div className='hidden md:flex items-center space-x-4'>
              {/* Conditional rendering of Dashboard and Login button */}
              {user ? (
                <>
                  <Link
                    to='/dashboard'
                    className='text-gray-500 hover:text-[#27374D] px-3 py-2 text-md  font-medium  rounded'
                  >
                    Dashboard
                  </Link>

                  <Link to={`/dashboard`}>
                    <img
                      src={user?.photoURL}
                      className='w-10 rounded-full'
                      alt='user'
                    />
                  </Link>

                  <button className='bg-[#1F8A70] hover:bg-[#27374D] text-white hover:text-white px-3 py-1.5 text-md font-medium rounded'>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to='/login'
                    className='bg-[#1F8A70] hover:bg-[#27374D] text-white transition duration-300 px-4 py-2 text-md font-medium rounded'
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
            {/* Mobile menu button */}
            <div className='-mr-2 flex md:hidden'>
              <button
                className='text-[#1F8A70] hover:text-[#27374D] inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            to='/'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#27374D]'
          >
            Home
          </Link>
          <Link
            to='/instructors'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#27374D]'
          >
            Instructors
          </Link>
          <Link
            to='/classes'
            className='block text-sm px-3 py-2 text-gray-500 font-medium hover:text-[#27374D]'
          >
            Classes
          </Link>
        </div>
        <div className='px-2 py-3 space-y-1'>
          {/* Conditional rendering of Dashboard and Login button */}
          {user ? (
            <>
              <Link
                to='/dashboard'
                className='text-gray-500 hover:text-[#27374D] px-3 py-2 text-md  font-medium  rounded'
              >
                Dashboard
              </Link>
              <img
                src={user?.photoURL}
                className='w-10 rounded-full'
                alt='user'
              />
              <button className='bg-[#1F8A70] hover:bg-[#27374D] text-white px-3 py-1.5 text-md font-medium rounded'>
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='block text-sm px-3 py-2 bg-[#1F8A70] hover:bg-[#27374D] text-white transition duration-300 font-medium rounded'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
