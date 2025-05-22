import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';

const IndexPage = () => {
  return (
    <div>
      <div
        className="welcome-page"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div className="mt-15 "style={{ textAlign: 'center' }}>
          <h1 className="font-bold text-5xl p-2 ">Welcome to Book"UR"oom!</h1>
          <p className='font-bold text-xl p-1 '>Discover amazing rooms for your stay.</p>
        </div>
        <Link to="/listing">
          <button className='bg-primary text-white rounded-full m-5 p-3'>View Listings</button>
        </Link>
      </div>
      <footer style={{ background: 'black', padding: '30px', textAlign: 'center', color: 'white' }}>
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

export default IndexPage;
