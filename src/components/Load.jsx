import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Load = () => (
     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-3 bg-black text-white">
          <div className="animate-spin text-4xl text-red-700">
               <FontAwesomeIcon icon={faSpinner} />
          </div>
     </div>
);

export default Load;
