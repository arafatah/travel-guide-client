import { useState, useEffect } from 'react';
import { FacebookShareButton } from 'react-share';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../Hooks/useAuth';

const AllStory = () => {
  const [stories, setStories] = useState([]);
  const {user} = useAuth();

  useEffect(() => {
    fetch('https://tour-guide-server-omega.vercel.app/review')
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="container mx-auto my-10">
      <Helmet>
        <title>User Stories</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6">User Stories</h2>
      {stories.map((story) => (
        <div key={story.id} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{story.username}</h3>
          <p className="mb-4">{story.review}</p>
          <FacebookShareButton url={`https://web.programming-hero.com`}>
            {user ?
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              <div className='flex items-center'>
                <FaFacebook className='mr-2'/> Share on Facebook
              </div>
            </button>:
            <button disabled className="bg-gray-400 text-white px-4 py-2 rounded-full transition duration-300">
            <div className='flex items-center'>
              <FaFacebook className='mr-2'/> Login to Share on Facebook
            </div>
          </button>
            }
          </FacebookShareButton>
          <Link to={`/allStory/${story._id}`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full ml-4 hover:bg-green-600 transition duration-300">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllStory;
