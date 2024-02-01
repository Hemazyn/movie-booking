import React, { useState } from 'react';

const BookingForm = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
     });
     const [isSubmitted, setIsSubmitted] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
               ...prevData,
               [name]: value,
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          localStorage.setItem('bookingInfo', JSON.stringify(formData));
          setIsSubmitted(true);
          setTimeout(() => {
               setIsSubmitted(false);
               setFormData({ name: '', email: '' });
          }, 1000);
     };

     return (
          <form onSubmit={handleSubmit} className="mt-4">
               <label className="block mb-2 text-lg">Name:</label>
               <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded" required />
               <label className="block mb-2 text-lg">Email:</label>
               <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded" required />
               <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Book Now</button>
               {isSubmitted && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                         <div className="bg-green-500 text-white p-4 rounded flex flex-col items-center">
                              <div className="text-3xl">&#10003;</div>
                              <p className="text-lg font-semibold mb-2">Booking Form Submitted</p>
                         </div>
                    </div>
               )}
          </form>
     );
};

export default BookingForm;
