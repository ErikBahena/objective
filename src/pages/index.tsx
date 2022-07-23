import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { NextPage } from 'next';
import Head from 'next/head';

// username link imports
import Link from 'next/link';

// action bar imports
import { FaHeartBroken } from 'react-icons/fa';
import { HiOutlineAnnotation } from 'react-icons/hi';

const people = [
  {
    id: uuidv4(),
    name: 'Calvin Hawkins',
    username: 'chawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: uuidv4(),
    name: 'Kristen Ramos',
    username: 'kRam',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: uuidv4(),
    name: 'Ted Fox',
    username: 'tFox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const statements = [
  {
    id: uuidv4(),
    text: `Excepteur aute ut aute fugiat. Proident incididunt qui deserunt enim labore id officia ad excepteur consectetur cillum nulla. Anim id veniam voluptate mollit occaecat exercitation culpa nostrud mollit. Ullamco Lorem et ullamco incididunt quis cillum. Incididunt et nostrud ad culpa quis non. Laborum est excepteur amet cillum ipsum dolor esse enim.

Lorem fugiat labore fugiat occaecat pariatur exercitation laboris ullamco est adipisicing duis occaecat commodo amet. Sint voluptate consectetur nostrud non deserunt Lorem in do quis magna aliqua incididunt culpa nulla. Consequat reprehenderit magna est et nostrud culpa pariatur do ea minim eu non sint Lorem. Irure id commodo Lorem et nulla qui culpa. Elit sint consectetur proident sint laborum pariatur ut tempor qui cillum laboris.

`,
    user: people[0],
    // new date 5 hours ago
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 12),
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
];

// create a tailwind css heading component
const Heading = () => {
  return (
    <div className='border flex px-5 py-3 items-center'>
      <h1 className='text-base font-normal flex-1 leading-6'>
        Todays Top Statements
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

const Post = () => {
  const post = statements[0];
  const person = people[0];
  const [liked, setLiked] = React.useState(false);

  return (
    <div className='py-4 px-5 flex mx-auto container'>
      <img className='h-10 w-10 rounded-full' src={person?.image} alt='' />

      <div className='ml-2'>
        <p className='text-sm font-bold text-gray-900 flex flex-wrap'>
          {person?.name} 
          <span>
            <UserNameLink username={person?.username} />{' '}
            <TimeStamp time={post?.createdAt} />
          </span>
        </p>
        <p className='text-sm font-normal text-gray-900'>{post?.text}</p>

        <div className='flex justify-between'>
          <div className='flex'>
            <button
              className='text-sm font-normal text-gray-500 hover:text-blue-400'
              onClick={() => setLiked(!liked)}
            >
              {liked ? 'Liked' : 'Like'}
            </button>
            <span className='text-sm font-normal text-gray-500'>
              {post?.likes?.length}
            </span>
          </div>

          <div className='flex items-center'>
            <button className='text-sm font-normal text-gray-500 hover:text-blue-400'>
              <FaHeartBroken className='h-5 w-5 mr-1' />
            </button>
            <span className='text-sm font-normal text-gray-500'>
              {post?.dislikes?.length}
            </span>
          </div>

          <div className='flex items-center'>
            <button className='text-gray-500 hover:text-blue-400 '>
              <HiOutlineAnnotation className='h-5 w-5 mr-1' />
            </button>
            <span className='text-sm font-normal text-gray-500'>
              {post?.comments?.length}
            </span>
          </div>

          <button className='text-sm font-normal text-gray-500 hover:text-blue-400 '>
            Share
          </button>
        </div>
      </div>
    </div>
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
        <Heading />
        <Post />
      </main>
    </>
  );
};

export default Home;
