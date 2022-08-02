import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';

// username link imports
import Link from 'next/link';

// action bar imports
import { FaHeartBroken } from 'react-icons/fa';
import { HiOutlineAnnotation } from 'react-icons/hi';
import { RiShareCircleLine } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

// post card imports
import Image from 'next/image';
import SiteLayout from '../components/layout';

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
    <div className='py-4 px-5 flex mx-auto container border-t'>
      <div>
        <Image
          src={person.image}
          alt='User Avatar'
          width={'100'}
          height={'100'}
          className='rounded-full'
        />
      </div>

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

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Objective | Home</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container max-w-screen-lg mx-auto flex flex-col'>
        <Heading />
        <a href="https://deploy-preview-391--hosted-player.netlify.app/?clientID=1000000000&eventID=2022071014" >Test on real website</a>

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

Home.getLayout = (page) => {
  return <div>Hi</div>;
};

export default Home;
