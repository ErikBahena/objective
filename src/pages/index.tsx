import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { NextPage } from 'next';
import Head from 'next/head';

// username link imports
import Link from 'next/link';

// action bar imports
import { FaHeartBroken } from 'react-icons/fa';
import { HiOutlineAnnotation } from 'react-icons/hi';
import { RiShareCircleLine } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const people = [
  {
    id: uuidv4(),
    fullName: 'Calvin Hawkins',
    username: 'chawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: uuidv4(),
    fullName: 'Kristen Ramos',
    username: 'kRam',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: uuidv4(),
    fullName: 'Ted Fox',
    username: 'tFox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const statements = [
  {
    id: uuidv4(),
    statement: true,
    text: `Excepteur aute ut aute fugiat. Proident incididunt qui deserunt enim labore id officia ad excepteur consectetur cillum nulla.`,
    user: people[0],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    likes: [people[0]?.id, people[1]?.id],
    dislikes: [people[2]?.id],

    comments: [
      {
        id: uuidv4(),
        text: 'I agree',
        userID: people[0]?.id,
        createdAt: new Date(),
        likes: [people[1]?.id, people[2]?.id],
        dislikes: [],
      },
    ],
  },
  {
    id: uuidv4(),
    question: true,
    text: `Excepteur aute ut aute fugiat. Proident incididunt qui deserunt enim labore id officia ad excepteur consectetur?`,
    user: people[1],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    likes: [people[0]?.id, people[2]?.id],
    dislikes: [],

    comments: [
      {
        id: uuidv4(),
        text: 'I agree',
        userID: people[0]?.id,
        createdAt: new Date(),
        likes: [people[1]?.id, people[2]?.id],
        dislikes: [],
      },
    ],
  },
];

// create a tailwind css heading component
const Heading = () => {
  return (
    <div className='px-5 py-3'>
      <h1 className='text-base font-semibold flex-1 leading-6'>
        Todays Top Posts
      </h1>
    </div>
  );
};

const UserNameLink = ({ username }: { username: any }) => {
  return (
    <Link passHref href={'/' + username}>
      <a className='text-sm font-normal hover:text-blue-400 text-gray-500 visited:text-purple-600'>
        @{username}
      </a>
    </Link>
  );
};

const aboutHowLongAgo = (time: Date) => {
  const timeAgo = new Date().getTime() - time.getTime();
  const minutes = Math.floor(timeAgo / 1000 / 60);
  const hours = Math.floor(timeAgo / 1000 / 60 / 60);
  const days = Math.floor(timeAgo / 1000 / 60 / 60 / 24);
  const weeks = Math.floor(timeAgo / 1000 / 60 / 60 / 24 / 7);
  const months = Math.floor(timeAgo / 1000 / 60 / 60 / 24 / 30) + 1; // +1 because it's 0 indexed
  const years = Math.floor(timeAgo / 1000 / 60 / 60 / 24 / 365) + 1; // +1 because it's 0 indexed

  if (minutes < 1) {
    return 'just now';
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours < 24) {
    return `${hours}h`;
  } else if (days < 7) {
    return `${days}d`;
  } else if (weeks < 4) {
    return `${weeks}w`;
  } else if (months < 12) {
    return `${months}mo`;
  } else {
    return `${years}y ago`;
  }
};

const TimeStamp = ({ time }: { time: any }) => {
  return (
    <span className='text-sm font-normal text-gray-500'>
      • {aboutHowLongAgo(time)}
    </span>
  );
};

const PostActionBar = ({ post }: { post: any }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div
      title='action-bar'
      className='flex justify-between w-5/6 py-2.5 text-sm font-normal text-gray-500'
    >
      <div className='flex items-center'>
        <button className='hover:text-blue-400 '>
          <HiOutlineAnnotation className='h-5 w-5 mr-1' />
        </button>

        {post.comments.length}
      </div>

      <div className='flex items-center'>
        <button
          className='hover:text-blue-400'
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <FcLike className='h-5 w-5 mr-1' />
          ) : (
            <FcLikePlaceholder className='h-5 w-5 mr-1' />
          )}
        </button>
        {post.likes.length}
      </div>

      <div className='flex items-center'>
        <button className='hover:text-blue-400'>
          <FaHeartBroken className='h-5 w-5 mr-1' />
        </button>
        {post.dislikes.length}
      </div>

      <button className='hover:text-blue-400 '>
        <RiShareCircleLine className='h-5 w-5' />
      </button>
    </div>
  );
};

const Post = ({
  post,
  person,
}: {
  post: { createdAt: Date; text: string; statement?: boolean };
  person: any;
}) => {
  return (
    <div className='py-4 px-5 flex mx-auto container'>
      <img className='h-10 w-10 rounded-full' src={person.image} alt='' />

      <div className='ml-2'>
        <p className='text-sm font-bold text-gray-900 flex flex-wrap'>
          {person.fullName} 
          <span>
            <UserNameLink username={person.username} />{' '}
            <TimeStamp time={post.createdAt} />
          </span>
        </p>
        <p className='text-sm font-normal text-gray-900'>{post.text}</p>

        <PlainChip
          label={post.statement ? 'statement' : 'question'}
          className='mt-1'
        />
        <PostActionBar post={post} />
      </div>
    </div>
  );
};

const PlainChip = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={
        'px-4 py-1 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm w-max cursor-pointer active:bg-gray-300 transition duration-300 ease' +
        ' ' +
        className
      }
    >
      {label}
    </div>
  );
};

const DesktopNavBar = () => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block lg:hidden h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                alt='Workflow'
              />
              <img
                className='hidden lg:block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                alt='Workflow'
              />
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href='#'
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                  aria-current='page'
                >
                  Dashboard
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Team
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className='ml-3 relative'>
              <div>
                <button
                  type='button'
                  className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              <div
                className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
                tabIndex={-1}
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-0'
                >
                  Your Profile
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-1'
                >
                  Settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700'
                  role='menuitem'
                  tabIndex={-1}
                  id='user-menu-item-2'
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href='#'
            className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
            aria-current='page'
          >
            Dashboard
          </a>

          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Team
          </a>

          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Projects
          </a>

          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container max-w-screen-lg mx-auto flex flex-col h-screen'>
        <DesktopNavBar />
        <Heading />

        {statements.map((post) => {
          const personWhoPosted = people.find(
            (person) => person.id === post?.user?.id,
          );

          return <Post key={post.id} post={post} person={personWhoPosted} />;
        })}
      </main>
    </>
  );
};

export default Home;
