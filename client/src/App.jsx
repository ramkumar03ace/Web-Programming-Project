import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ListingPage from './pages/ListingPage.jsx'; // import the ListingPage component
import axios from 'axios';
import { UserContextProvider } from "./UserContext.jsx";
import { useEffect } from "react";

axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/account" element={<AccountPage/>} />
          <Route path="/listing" element={<ListingPage />} /> {/* add the ListingPage route */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
