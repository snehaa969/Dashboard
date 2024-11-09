import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
    {/* Main Layout Container */}
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left sidebar (Event, Contact, Projects) */}
      <div className="lg:col-span-3 space-y-6">
        {/* Event Section */}
        <div className="p-4 rounded-lg shadow-md relative bg-white">
          <h2 className="font-bold text-lg mb-4">Events</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm flex justify-between items-center">
                Indoor cricket
                <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
              </p>
              <p className="text-xs text-gray-500">
                10:00 21/11/23 - 13:00 21/11/23
              </p>
              <p className="text-xs text-gray-500">
                1 Manager, 2 Workers, 3 Guests
              </p>
            </div>
            <div>
              <p className="text-sm flex justify-between items-center">
                Indoor cricket
                <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
              </p>
              <p className="text-xs text-gray-500">
                10:00 21/11/23 - 13:00 21/11/23
              </p>
              <p className="text-xs text-gray-500">
                1 Manager, 2 Workers, 3 Guests
              </p>
            </div>
            <div>
              <p className="text-sm flex justify-between items-center">
                Indoor cricket
                <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
              </p>
              <p className="text-xs text-gray-500">
                10:00 21/11/23 - 13:00 21/11/23
              </p>
              <p className="text-xs text-gray-500 mb-4">
                1 Manager, 2 Workers, 3 Guests
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="text-xs text-blue-500 inline-block absolute bottom-3 right-3"
          >
            Show All
          </Link>
        </div>

        {/* Contact */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-bold text-lg mb-4 flex justify-between items-center">
            21 Contacts
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">
              + New Contact
            </button>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="profile.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-xs">
                <p>Adriana Janes</p>
                <p className="text-xs text-gray-500">Last Update 1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="profile.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-xs">
                <p>Adriana Janes</p>
                <p className="text-xs text-gray-500">Last Update 1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="profile.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-xs">
                <p>Adriana Janes</p>
                <p className="text-xs text-gray-500 mb-4">
                  Last Update 1 day ago
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="text-blue-500 text-xs inline-block absolute bottom-3 right-3"
            >
              Show All
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="p-4 rounded-lg bg-white shadow-md relative">
          <h2 className="font-bold text-lg mb-4 flex justify-between items-center">
            Projects
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">
              + New Contact
            </button>
          </h2>
          <div className="space-y-4 mb-4">
            <p className="text-xs flex justify-between items-center">
              A Training Project
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
          </div>
          <div className="space-y-4 mb-4">
            <p className="text-xs flex justify-between items-center">
              Adoption Applications
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
          </div>
          <div className="space-y-4 mb-4">
            <p className="text-xs flex justify-between items-center">
              Birmingham Youth
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
          </div>
          <Link
            to="/"
            className="text-blue-500 text-xs inline-block absolute bottom-3 right-3 "
          >
            Show All
          </Link>
        </div>

        {/* Albums */}
        <div className="p-4 bg-white rounded-lg shadow-md relative">
          <h2 className="font-bold text-lg mb-4 justify-between items-center flex">
            Albums
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">
              + New Contact
            </button>
          </h2>
          <div className="space-y-4">
            <p className="text-xs flex justify-between items-center">
              All Hubs
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
            <p className="text-xs flex justify-between items-center">
              Broadford
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
            <p className="text-xs flex justify-between items-center">
              Funders
              <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
            </p>
          </div>
        </div>

        {/* organisation */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-bold text-lg mb-2 flex items-center justify-between">
            Organisation
            <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} />
          </h2>
          <span>We are the Sportykids</span>
          <h2>Admin</h2>
        </div>
      </div>

      {/* Middle section (NewsFeed) */}
      <div className="lg:col-span-6 space-y-6">
        {/* input field */}
        <div className="bg-white flex items-center gap-3 shadow-sm p-2">
          {/* input field */}
          <input
            type="text"
            placeholder="SportyKids Admin share some progress"
            className="flex-grow px-4 py-2 text-gray-600 outline-none text-sm"
          />

          {/* Post Button */}
          <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-200 rounded-md text-sm">
            Post
          </button>
        </div>

        {/* mainfeed */}
        <div className="max-w-2xl mx-auto">
          {/* Header with story filter */}
          <div className="flex relative mb-4">
            <button className="text-blue-500 text-sm hover:text-blue-600 absolute right-2">
              Story Filter ▼
            </button>
          </div>

          {/* Post Container */}
          <div className="bg-white rounded-lg shadow-md relative p-4">
            <h2 className="text-gray-700 font-semibold text-lg mb-4">
              NEWSFEED
            </h2>
            {/* Post Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                {/* profile image */}
                <img
                  src="profile.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                {/* user info */}
                <div>
                  <h3 className="text-blue-500 font-medium">
                    Demo Sports Coach User
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Posted at 11:15 on 21st Nov 2023
                  </p>
                  <span className="inline-block px-3 py-1">Update</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  Posted about 8 hours ago
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">
                <span className="text-blue-500">New Update</span> by Demo Sports
                Coch User working on the
                <span className="text-blue-500"> Sample Project</span> for{" "}
                <span className="text-blue-500">We Are The SportyKids</span>
              </p>
              <p className="">
                Indoor Cricket Session witnessed an attendance of 100 people
              </p>
            </div>

            {/* Post Footer */}
            <div className="flex justify-between items-center">
              {/* Like button */}
              <button className="text-gray-400 hover:text-red-500 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Stats */}
              <div className="text-gray-400 text-sm">
                <span>0 Comments</span>
                <span className="mx-2">.</span>
                <span>0 Favourites</span>
              </div>
            </div>

            {/* Comment Input */}
            <div className="mt-4 flex items-center gap-3 sm:p-4">
              {/* Icon container */}
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0">
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </div>
              {/* Comment Input */}
              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-grow p-2 sm:p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg"
              />
              {/* Post Button */}
              <button className="text-white bg-red-500 rounded-full px-3 py-1 font-semibold text-xs sm:text-xs md:text-base sm:px-4 sm:py-2 hover:bg-red-600 transition-colors duration-200">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Newsfeed 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          {/* Post Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg class="w-8 h-8 text-pink-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </div>

              {/* user Info */}
              <div>
                <h3 className="text-blue-500 font-medium">Sportykids Admin</h3>
                <p className="text-gray-500 text-sm">
                  First posted at 17:51 on 20th Nov 2023
                </p>
                <p className="text-gray-500 text-sm">
                  Last edited at 17:51 on 20th Nov 2023
                </p>
                <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs rounded-full mt-1">
                  Update
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-4 items-start">
              <span className="text-sm text-gray-400">Edited 1 day ago</span>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-gray-600 mb-3">
              <span className="text-blue-500">10 Attendances (Sessions)</span>by
              <span className="text-blue-500">Sportykids Admin</span> working on
              the
              <span className="text-blue-500">Birmingham Youth</span> project
              for
              <span className="text-blue-500">We Are The SportyKids</span> with
              <span className="text-blue-500">
                Alex Cooper, Alfie Lee, Adriana Jones
              </span>
            </p>

            {/* Expand Story */}
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-200">
              Expand Story
            </button>
          </div>

          {/* Post Footer */}
          <div className="flex justify-between items-center">
            {/* like button */}
            <button className="text-gray-400 hover:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Stats */}
            <div className="text-gray-400 text-sm">
              <span>0</span>
              <span className="mx-2">.</span>
              <span>0 Favourite</span>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mt-4 flex items-center gap-3 p-2 sm:p-4">
            {/* Icon container */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>

            {/* Comment input */}
            <input
              type="text"
              placeholder="Write a Comment..."
              className="flex-grow p-2 sm:p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg"
            />
            {/* Post Button */}
            <button className="rounded-full text-white bg-red-600 font-semibold px-3 py-1 sm:text-sm md:text-base sm:px-4 sm:py-2 transition-colors duration-200">
              Post
            </button>
          </div>
        </div>
        {/* Newsfeed 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          {/* Post Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg class="w-8 h-8 text-pink-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </div>

              {/* user Info */}
              <div>
                <h3 className="text-blue-500 font-medium">Sportykids Admin</h3>
                <p className="text-gray-500 text-sm">
                  First posted at 17:51 on 20th Nov 2023
                </p>
                <p className="text-gray-500 text-sm">
                  Last edited at 17:51 on 20th Nov 2023
                </p>
                <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs rounded-full mt-1">
                  Update
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-4 items-start">
              <span className="text-sm text-gray-400">Edited 1 day ago</span>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-gray-600 mb-3">
              <span className="text-blue-500">10 Attendances (Sessions)</span>by
              <span className="text-blue-500">Sportykids Admin</span> working on
              the
              <span className="text-blue-500">Birmingham Youth</span> project
              for
              <span className="text-blue-500">We Are The SportyKids</span> with
              <span className="text-blue-500">
                Alex Cooper, Alfie Lee, Adriana Jones
              </span>
            </p>

            {/* Expand Story */}
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-200">
              Expand Story
            </button>
          </div>

          {/* Post Footer */}
          <div className="flex justify-between items-center">
            {/* like button */}
            <button className="text-gray-400 hover:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Stats */}
            <div className="text-gray-400 text-sm">
              <span>0</span>
              <span className="mx-2">.</span>
              <span>0 Favourite</span>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mt-4 flex items-center gap-3 p-2 sm:p-4">
            {/* Icon container */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>

            {/* Comment input */}
            <input
              type="text"
              placeholder="Write a Comment..."
              className="flex-grow p-2 sm:p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg"
            />
            {/* Post Button */}
            <button className="rounded-full text-white bg-red-600 font-semibold px-3 py-1 sm:text-sm md:text-base sm:px-4 sm:py-2 transition-colors duration-200">
              Post
            </button>
          </div>
        </div>
        {/* Newsfeed 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          {/* Post Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-white">
                <svg class="w-8 h-8 text-pink-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </div>

              {/* user Info */}
              <div>
                <h3 className="text-blue-500 font-medium">Sportykids Admin</h3>
                <p className="text-gray-500 text-sm">
                  First posted at 17:51 on 20th Nov 2023
                </p>
                <p className="text-gray-500 text-sm">
                  Last edited at 17:51 on 20th Nov 2023
                </p>
                <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs rounded-full mt-1">
                  Update
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-4 items-start">
              <span className="text-sm text-gray-400">Edited 1 day ago</span>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-gray-600 mb-3">
              <span className="text-blue-500">10 Attendances (Sessions)</span>by
              <span className="text-blue-500">Sportykids Admin</span> working on
              the
              <span className="text-blue-500">Birmingham Youth</span> project
              for
              <span className="text-blue-500">We Are The SportyKids</span> with
              <span className="text-blue-500">
                Alex Cooper, Alfie Lee, Adriana Jones
              </span>
            </p>

            {/* Expand Story */}
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors duration-200">
              Expand Story
            </button>
          </div>

          {/* Post Footer */}
          <div className="flex justify-between items-center">
            {/* like button */}
            <button className="text-gray-400 hover:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Stats */}
            <div className="text-gray-400 text-sm">
              <span>0</span>
              <span className="mx-2">.</span>
              <span>0 Favourite</span>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mt-4 flex items-center gap-3 p-2 sm:p-4">
            {/* Icon container */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>

            {/* Comment input */}
            <input
              type="text"
              placeholder="Write a Comment..."
              className="flex-grow p-2 sm:p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg"
            />
            {/* Post Button */}
            <button className="rounded-full text-white bg-red-600 font-semibold px-3 py-1 sm:text-sm md:text-base sm:px-4 sm:py-2 transition-colors duration-200">
              Post
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-4">
          <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Load More...
          </button>
        </div>
      </div>

      {/* Right Side (Board, Personal Progress) */}
      <div className="lg:col-span-3 space-y-6">
        {/* Board section */}
        <div className="p-4 rounded-lg bg-white shadow-md relative">
          <h2 className="font-bold text-lg mb-4 flex justify-between items-center">
            Board
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">
              + New Project
            </button>
          </h2>
          <div className="space-y-4 mb-4">
            <p className="text-sm flex justify-between items-center">
              All Hubs
              <i
                className="fa-sharp fa-solid fa-gear"
                style={{ color: "#74C0FC" }}
              ></i>
            </p>
            <p className="text-sm flex justify-between items-center">
              Broadford
              <i
                class="fa-sharp fa-solid fa-gear"
                style={{ color: "#74C0FC" }}
              ></i>
            </p>
            <p className="text-sm flex justify-between items-center">
              Funders
              <i
                class="fa-sharp fa-solid fa-gear"
                style={{ color: "#74C0FC" }}
              ></i>
            </p>
            <Link
              to="/"
              className="text-blue-500 text-xs inline-block absolute bottom-3 right-3"
            >
              Show All
            </Link>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-4 flex justify-between items-center border-gray-200">
            <h2 className="font-semibold text-gray-700 ">Personal Progress</h2>
            <Link to="/" className="text-blue-500 text-sm">
              Go to
            </Link>
          </div>

          {/* Progress Item */}
          <div className="p-4 space-y-4">
            {/* Progress Item */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">I feel very lonely</p>
                <div className="bg-gray-200 w-full h-2 rounded-full overflow-hidden mt-1">
                  <div className="bg-green-500 h-full w-1/4"></div>
                </div>
              </div>
              <button className="text-blue-500 bg-gray-100 px-2 py-1 rounded-full">
                +
              </button>
            </div>

            {/* Progress Item 2 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-400"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  I get stomach-aches/cramps
                </p>
                <div className="rounded-full bg-gray-200 h-2 w-full overflow-hidden mt-1">
                  <div className="bg-red-500 h-full w-1/4"></div>
                </div>
              </div>
              <button className="text-blue-500 bg-gray-100 px-2 py-1 rounded-full">
                +
              </button>
            </div>

            {/* Progress Item 3 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-400"></div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">I have horrible dreams</p>
                <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden mt-1">
                  <div className="bg-purple-500 h-full w-1/2"></div>
                </div>
              </div>
              <button className="bg-gray-100 rounded-full text-blue-500 px-2 py-1">
                +
              </button>
            </div>

            {/* Progress Item 4 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-400"></div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">I have horrible dreams</p>
                <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden mt-1">
                  <div className="bg-red-500 h-full w-1/2"></div>
                </div>
              </div>
              <button className="bg-gray-100 rounded-full text-blue-500 px-2 py-1">
                +
              </button>
            </div>

            {/* Progress Item 5 */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-400"></div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">I have horrible dreams</p>
                <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden mt-1">
                  <div className="bg-green-500 h-full w-1/2"></div>
                </div>
              </div>
              <button className="bg-gray-100 rounded-full text-blue-500 px-2 py-1">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-lg mb-4">Tasks</h2>
          <div className="space-y-2">
            <p className="text-sm">100 Session Attendances this Year</p>
            <p className="text-sm">Coach for Birmingham Youth</p>
          </div>
          <button className="text-blue-500 text-xs mt-4 inline-block">
            View All
          </button>
        </div>
      </div>
    </div>

    <div 
       class="h-1 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-orange-500 via-red-500 via-pink-500 to-purple-500">
     </div>

    </div>
  );
};
