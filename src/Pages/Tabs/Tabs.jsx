import { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const indicator = document.querySelector('.indicator');
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    const panels = document.querySelectorAll('.tab-panel');

    if (indicator && activeTabElement) {
      indicator.style.width = `${activeTabElement.getBoundingClientRect().width}px`;
      indicator.style.left = `${activeTabElement.getBoundingClientRect().left - activeTabElement.parentElement.getBoundingClientRect().left}px`;
    }

    panels.forEach((panel) => {
      const panelId = panel.getAttribute('id');
      if (activeTab === parseInt(panelId.split('-')[1], 10)) {
        panel.classList.remove('invisible', 'opacity-0');
        panel.classList.add('visible', 'opacity-100');
      } else {
        panel.classList.add('invisible', 'opacity-0');
      }
    });
  }, [activeTab]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:w-11/12 lg:w-7/12 mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-full mx-auto h-12 grid grid-cols-1 sm:grid-cols-3 items-center px-[3px] sm:rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div className="absolute indicator h-11 my-auto top-0 left-0 sm:col-span-1 sm:right-auto sm:left-0 rounded-full bg-white shadow-md"></div>
          <button
            role="tab"
            aria-selected={activeTab === 1 ? 'true' : 'false'}
            aria-controls={`panel-${1}`}
            id={`tab-${1}`}
            tabIndex="0"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 1 ? 'bg-red-600 text-gray-800' : 'text-gray-800'
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span className='text-white'>Overview</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 2 ? 'true' : 'false'}
            aria-controls={`panel-${2}`}
            id={`tab-${2}`}
            tabIndex="-1"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 2 ? 'bg-red-600 text-gray-800' : 'text-gray-800'
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span className='text-white'>Our Packages</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 3 ? 'true' : 'false'}
            aria-controls={`panel-${3}`}
            id={`tab-${3}`}
            tabIndex="-1"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 3 ? 'bg-red-600 text-gray-800' : 'text-gray-800'
            }`}
            onClick={() => handleTabClick(3)}
          >
            <span className='text-white'>Meet Our Guides</span>
          </button>
        </div>
        <div className="mt-6 relative sm:rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id={`panel-${1}`}
            className="tab-panel p-6 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">First tab panel</h2>
            <p className="mt-4 text-gray-600">Welcome to [Your Company Name], where extraordinary journeys come to life! Embark on a voyage of discovery with our curated collection of immersive guided tours that redefine travel experiences. From enchanting cultural explorations to adrenaline-pumping adventures, we specialize in crafting memories that last a lifetime.

Why Choose [Your Company Name]?

At [Your Company Name], we believe that travel should be more than a destination; it should be an unforgettable adventure. Here's why our tours stand out:

🌍 Expert Guides: Our passionate and knowledgeable guides are the heartbeat of our tours. Unlock the secrets of each destination with local experts who bring history, culture, and stories to life.

🌟 Unique Experiences: Dive into the extraordinary! We curate experiences that go beyond the ordinary, providing you with exclusive access to hidden gems and off-the-beaten-path wonders.

🤝 Personalized Service: Your journey, your way. Enjoy a personalized touch with itineraries tailored to your preferences, ensuring every moment aligns with your travel dreams.

🌈 Diverse Destinations: From bustling cityscapes to serene natural wonders, our tours span the globe. Explore diverse landscapes, cultures, and cuisines in the company of fellow explorers.

🛡️ Safety and Comfort: Your safety is our top priority. Travel with peace of mind knowing that we uphold the highest standards of safety and comfort throughout your journey.

How It Works:

Explore: Browse our diverse range of destinations and tour types.
Discover: Dive into detailed tour descriptions, showcasing the unique highlights of each adventure.
Book: Seamless booking with secure payment options. Your journey begins with a click.
Join us in creating moments that go beyond the ordinary. Your next great adventure awaits with [Your Company Name].

Ready to redefine travel? Let's embark on this journey together.

Feel free to adapt and customize this text to align with your specific brand voice and offerings.</p>
          </div>
          <div
            role="tabpanel"
            id={`panel-${2}`}
            className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">Second tab panel</h2>
            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
          <div
            role="tabpanel"
            id={`panel-${3}`}
            className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">Third tab panel</h2>
            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
