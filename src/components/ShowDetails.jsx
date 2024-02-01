import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchShowDetails } from '../services/api';
import BookingForm from './BookingForm';
import Load from './Load';

const ShowDetails = () => {
     const { id } = useParams();
     const [showDetails, setShowDetails] = useState({});
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await fetchShowDetails(id);
                    setShowDetails(data);
               } catch (error) {
                    setError(error.message);
               } finally {
                    setLoading(false);
               }
          };

          fetchData();
     }, [id]);

     const backgroundImageStyle = {
          backgroundImage: `url(${showDetails.image?.original || 'placeholder.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
     };

     return (
          <div style={backgroundImageStyle}>
               <h1 className="text-4xl font-bold mb-4">{showDetails.name}</h1>
               {loading && <Load />}
               {error && <p>{error}</p>}
               {!loading && (
                    <>
                         <p className="text-lg mb-4">{showDetails.summary}</p>
                         <Link to="/">
                              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                                   Back to Home
                              </button>
                         </Link>
                         <BookingForm />
                    </>
               )}
          </div>
     );
};

export default ShowDetails;
