import React, { useState } from 'react';

const RoomListing = () => {
  // Define the room data
  const rooms = [
    { id: 1, imgSrc: '.\\src\\assets\\room1.jpg', price: 10000, location: 'New Delhi' },
    { id: 2, imgSrc: '.\\src\\assets\\room2.jpg', price: 12000, location: 'Mumbai' },
    { id: 3, imgSrc: '.\\src\\assets\\room3.jpg', price: 11000, location: 'Kolkata' },
    { id: 4, imgSrc: '.\\src\\assets\\room4.jpg', price: 9000, location: 'Chennai' },
    { id: 5, imgSrc: '.\\src\\assets\\room5.jpg', price: 9500, location: 'Hyderabad' },
    { id: 6, imgSrc: '.\\src\\assets\\room6.jpg', price: 10500, location: 'Bengaluru' },
    { id: 7, imgSrc: '.\\src\\assets\\room11.jpg', price: 11500, location: 'Bhopal' },
    { id: 8, imgSrc: '.\\src\\assets\\room12.jpeg', price: 8500, location: 'Kochi' },
    { id: 9, imgSrc: '.\\src\\assets\\room9.jpg', price: 12500, location: 'Kanpur' },
    { id: 10, imgSrc: '.\\src\\assets\\room10.jpg', price: 13000, location: 'Coimbatore' },
    { id: 11, imgSrc: '.\\src\\assets\\room7.avif', price: 11000, location: 'Vellore' },
    { id: 12, imgSrc: '.\\src\\assets\\room8.avif', price: 10000, location: 'Mysuru' }
  ];

  // State to track which room is booked
  const [bookedRoom, setBookedRoom] = useState(null);

  // Function to handle booking
  const handleBookRoom = (roomId) => {
    setBookedRoom(roomId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <h2 className="p-4 underline font-bold text-xl">Room Listings</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {rooms.map(room => (
          <div key={room.id} style={{ margin: '10px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={room.imgSrc} width={500} height={600} alt={`Room ${room.id}`} />
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <p>Price: Rs.{room.price}</p>
                <p>Location: {room.location}</p>
                <button
                  style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '20px' }}
                  onClick={() => handleBookRoom(room.id)}
                  disabled={bookedRoom === room.id}
                >
                  {bookedRoom === room.id ? 'Room Booked' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer style={{ marginTop: 'auto', textAlign: 'center', background: 'black', padding: '30px', width: '100%', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '24px' }}>LinkedIn</a>
        </div>
        <div style={{ fontSize: '18px' }}>
          <p>13/7 2nd Cross St, Chennai, India</p>
          <p>Email: info@bookuroom.com</p>
          <p>Phone: +91 01234 56789</p>
        </div>
        <p>&copy; 2024 Book"UR"oom</p>
      </footer>
    </div>
  );
};

export default RoomListing;
