import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      
      {/* Contact info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Address:</h3>
          <p className="text-gray-600">123 Travel Street, Cityville, Country</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Email:</h3>
          <p className="text-gray-600">info@yourcompany.com</p>
        </div>
      </div>

      {/* Contact form */}
      <form className="mt-8">
        <label className="block text-sm font-semibold mb-2">Name:</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md mb-4"
          placeholder="Your Name"
        />

        <label className="block text-sm font-semibold mb-2">Email:</label>
        <input
          type="email"
          className="w-full border p-2 rounded-md mb-4"
          placeholder="Your Email"
        />

        <label className="block text-sm font-semibold mb-2">Message:</label>
        <textarea
          rows="4"
          className="w-full border p-2 rounded-md mb-4"
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
