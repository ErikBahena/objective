import Link from 'next/link';

// mobile navbar imports
import { BsHouse, BsHouseFill, BsSearch } from 'react-icons/bs';
import { IoNotificationsOutline, IoNotifications } from 'react-icons/io5';
import { useRouter } from 'next/router';

const MobileNavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      {/* offset the nav bar */}
      <div className='h-8'></div>

      <nav className='bg-white border-t w-full flex justify-between py-3.5 px-10 fixed bottom-0 text-sm font-normal text-gray-500'>
        {/* Home Button */}
        <Link href='/'>
          <button className='hover:text-blue-400 '>
            {currentPath === '/' ? (
              <BsHouseFill className='h-6 w-6 fill-blue-400' />
            ) : (
              <BsHouse className='h-6 w-6' />
            )}
          </button>
        </Link>

        {/* Search Button */}
        <Link href='/search'>
          <button className='hover:text-blue-400 '>
            {currentPath === '/search' ? (
              <BsSearch className='h-6 w-6 fill-blue-400' />
            ) : (
              <BsSearch className='h-6 w-6' />
            )}
          </button>
        </Link>

        {/* Notifications Button */}
        <Link href='/notifications'>
          <button className='hover:text-blue-400 '>
            {currentPath === '/notifications' ? (
              <IoNotifications className='h-6 w-6 fill-blue-400' />
            ) : (
              <IoNotificationsOutline className='h-6 w-6' />
            )}
          </button>
        </Link>
      </nav>
    </>
  );
};

export default MobileNavBar;
