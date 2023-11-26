import { useLoaderData } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FacebookShareButton } from 'react-share';

const SingleStory = () => {
  const story = useLoaderData();

  const shareUrl = `http://localhost:5173/allStory/${story?.id}`; // Replace with your actual URL

  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">{story?.username}'s Story</h2>
      <p className="mb-2">
        <strong className="text-blue-500">Tour Type:</strong> {story?.tourType}
      </p>
      <p className="mb-2">
        <strong className="text-blue-500">Rating:</strong> {story?.rating}/5
      </p>
      <p className="mb-2">
        <strong className="text-blue-500">Date:</strong> {story?.date}
      </p>
      <p className="mb-4">
        <strong className="text-blue-500"></strong> {story?.review}
      </p>
      <FacebookShareButton url={shareUrl} quote={story?.review}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          <div className="flex items-center">
            <FaFacebook className="mr-2" /> Share on Facebook
          </div>
        </button>
      </FacebookShareButton>
    </div>
  );
};

export default SingleStory;
