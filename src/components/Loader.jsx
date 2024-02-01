import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-3 bg-black text-white">
          <div className="animate-spin text-4xl text-red-700">
               <FontAwesomeIcon icon={faSpinner} />
          </div>
          <h1 className="text-4xl font-bold ml-2 text-center">Welcome to <br /> <span className="font-Barlow text-red-600"> devEmma </span> Movie Booking App</h1>
     </div>
);

export default Loader;
