import { useState, useEffect } from "react";
import OurPackages from "../Home/OurPackage/OurPackages";
import TourGuide from "../TourGuide/TourGuide";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const indicator = document.querySelector(".indicator");
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    const panels = document.querySelectorAll(".tab-panel");

    if (indicator && activeTabElement) {
      indicator.style.width = `${
        activeTabElement.getBoundingClientRect().width
      }px`;
      indicator.style.left = `${
        activeTabElement.getBoundingClientRect().left -
        activeTabElement.parentElement.getBoundingClientRect().left
      }px`;
    }

    panels.forEach((panel) => {
      const panelId = panel.getAttribute("id");
      if (activeTab === parseInt(panelId.split("-")[1], 10)) {
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        panel.classList.add("invisible", "opacity-0");
      }
    });
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:w-11/12 lg:w-full mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-full mx-auto h-12 grid grid-cols-1 sm:grid-cols-3 items-center px-[3px] sm:rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div className="absolute indicator h-11 my-auto top-0 left-0 sm:col-span-1 sm:right-auto sm:left-0 rounded-full bg-emerald-700 shadow-md"></div>
          <button
            role="tab"
            aria-selected={activeTab === 1 ? "true" : "false"}
            aria-controls={`panel-${1}`}
            id={`tab-${1}`}
            tabIndex="0"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 1 ? "bg-red-600 text-gray-800" : "text-gray-800"
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span className="text-white">Overview</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 2 ? "true" : "false"}
            aria-controls={`panel-${2}`}
            id={`tab-${2}`}
            tabIndex="-1"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 2 ? "bg-red-600 text-gray-800" : "text-gray-800"
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span className="text-white">Our Packages</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 3 ? "true" : "false"}
            aria-controls={`panel-${3}`}
            id={`tab-${3}`}
            tabIndex="-1"
            className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
              activeTab === 3 ? "bg-red-600 text-gray-800" : "text-gray-800"
            }`}
            onClick={() => handleTabClick(3)}
          >
            <span className="text-white">Meet Our Guides</span>
          </button>
        </div>
        <div className="mt-6 relative sm:rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id={`panel-${1}`}
            className="tab-panel p-6 transition duration-300"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">
                Welcome to <span className="text-indigo-600">TRAVOL</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="block mb-6">
                  Embark on a voyage of discovery with our curated collection of
                  immersive guided tours that redefine travel experiences. From
                  enchanting cultural explorations to adrenaline-pumping
                  adventures, we specialize in crafting memories that last a
                  lifetime.
                </span>

                <span className="block mb-6 font-semibold">
                  Why Choose TRAVOL?
                </span>

                <ul className="list-disc list-inside mb-6">
                  <li>
                    🌍{" "}
                    <span className="font-normal">
                      Expert Guides: Our passionate and knowledgeable guides
                      bring history, culture, and stories to life.
                    </span>
                  </li>
                  <li>
                    🌟{" "}
                    <span className="font-normal">
                      Unique Experiences: Dive into the extraordinary with
                      exclusive access to hidden gems.
                    </span>
                  </li>
                  <li>
                    🤝{" "}
                    <span className="font-normal">
                      Personalized Service: Enjoy itineraries tailored to your
                      preferences.
                    </span>
                  </li>
                  <li>
                    🌈{" "}
                    <span className="font-normal">
                      Diverse Destinations: Explore diverse landscapes,
                      cultures, and cuisines.
                    </span>
                  </li>
                  <li>
                    🛡️{" "}
                    <span className="font-normal">
                      Safety and Comfort: Travel with peace of mind with our
                      high safety standards.
                    </span>
                  </li>
                </ul>

                <span className="block mb-6 font-semibold">How It Works:</span>

                <ol className="list-decimal list-inside mb-6">
                  <li>
                    <span className="font-normal">
                      Explore: Browse our diverse range of destinations and tour
                      types.
                    </span>
                  </li>
                  <li>
                    <span className="font-normal">
                      Discover: Dive into detailed tour descriptions, showcasing
                      the unique highlights of each adventure.
                    </span>
                  </li>
                  <li>
                    <span className="font-normal">
                      Book: Seamless booking with secure payment options. Your
                      journey begins with a click.
                    </span>
                  </li>
                </ol>

                <span className="block mb-6">
                  Join us in creating moments that go beyond the ordinary. Your
                  next great adventure awaits with{" "}
                  <span className="font-semibold text-indigo-600">TRAVOL</span>.
                </span>

                <span className="block">
                  Ready to redefine travel? Let's embark on this journey
                  together.
                </span>
              </p>
            </div>
          </div>
          <div
            role="tabpanel"
            id={`panel-${2}`}
            className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Explore Our Packages
            </h2>
            <OurPackages />
          </div>
          <div
            role="tabpanel"
            id={`panel-${3}`}
            className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <TourGuide></TourGuide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
