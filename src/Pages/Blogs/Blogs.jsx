import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Exploring the Sundarbans: A Unique Wildlife Adventure',
      author: 'John Doe',
      date: 'November 15, 2023',
      image: 'https://i.ibb.co/kmQHssT/pexels-cottonbro-studio-4979492.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'Cultural Delights of Old Dhaka: A Foodie’s Paradise',
      author: 'Jane Doe',
      date: 'October 28, 2023',
      image: 'https://i.ibb.co/BNM7m2b/pexels-te-lensfix-1371360.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'A Journey Through the Tea Gardens of Srimangal',
      author: 'Alice Smith',
      date: 'September 12, 2023',
      image: 'https://i.ibb.co/H4q4RdL/pexels-oliver-sj-str-m-1122462.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'Sailing the Meghna River: A Tranquil Cruise Experience',
      author: 'Bob Johnson',
      date: 'August 5, 2023',
      image: 'https://i.ibb.co/zZMKzt3/pexels-iurii-ivashchenko-3498323.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'Historical Wonders: A Tour of Ancient Ruins',
      author: 'Eva Davis',
      date: 'July 19, 2023',
      image: 'https://i.ibb.co/SB6B6zK/pexels-murat-ahin-3522880.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'Traditional Festivals Tour: Immerse in Cultural Experiences',
      author: 'Samuel Wilson',
      date: 'June 8, 2023',
      image: 'https://i.ibb.co/31C1mbK/pexels-maria-orlova-4940748.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
  ];

  return (
    <div className="container mx-auto py-8">
        <Helmet>
            <title>Blogs | TRAVOL</title>
        </Helmet>
      <h2 className="text-3xl font-bold mb-4">Explore Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-500 mb-2">
              By {post.author} on {post.date}
            </p>
            <p className="text-gray-500">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
