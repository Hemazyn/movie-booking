import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../services/api';
import Load from './Load';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
     const [shows, setShows] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     useEffect(() => {
          window.scrollTo(0, 0);
          const fetchData = async () => {
               try {
                    const data = await fetchShows();
                    setShows(data);
               } catch (error) {
                    setError(error.message);
               } finally {
                    // Simulate a 10-second loading time before showing movie details
                    setTimeout(() => {
                         setLoading(false);
                    }, 1000);
               }
          };
          fetchData();
     }, []);

     return (
          <div className="bg-black text-white">
               {loading && <Load />}
               <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Movie Shows</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    {!loading && (
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                              {shows.map((show) => (
                                   show.show.image?.medium && (
                                        <div key={show.show.id} className="bg-white p-4 rounded shadow">
                                             <img src={show.show.image.medium} alt={show.show.name} className="w-full h-100 object-cover mb-4 rounded" />
                                             <h2 className="text-xl font-semibold mb-2 text-black">{show.show.name}</h2>
                                             <p className="text-red-700 mt-2">Genre:<span className="text-yellow-800">  {show.show.genres?.join(', ')}</span></p>
                                             <p className="text-red-700">Rating: <span className="text-yellow-800"> {show.show.rating?.average || 'N/A'}</span></p>
                                             <Link to={`/show/${show.show.id}`}>
                                                  <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
                                             </Link>
                                        </div>
                                   )
                              ))}
                         </div>
                    )}
               </div>
               <div className="fixed bottom-4 right-4 p-4 bg-red-700 text-white rounded-full block" onClick={scrollToTop}>
                    <FaArrowUp />
               </div>
          </div>
     );
};

export default Home;
