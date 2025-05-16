import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Sidebar from './components/Sidebar';

// Pages - Root
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

// Pages - Owner
import OwnerDashboard from './pages/owner/dashboard';

// Pages - Tourism
import Dashboard from './pages/tourism/dashboard';
import Transaction from './pages/tourism/transaction';
import Request from './pages/tourism/request';
import AddAdmin from './pages/tourism/registration';
import Users from './pages/tourism/users';
import Complaints from './pages/tourism/complaints';
import Maps from './pages/tourism/maps';

// Pages - Modules
import Accommodation from './pages/tourism/AccomodationModule/accommodations';
import Shop from './pages/tourism/ShopsModule/shops';
import Event from './pages/tourism/EventsModule/events';
import TouristSpotList from './pages/tourism/TouristSpotModule/TouristSpotList';
import TouristSpotDetails from './pages/tourism/TouristSpotModule/TouristSpotDetails';

// Fonts
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

function App() {
  return (
    <BrowserRouter>
      <Row style={{ padding: "0", height: "100vh", width: "100vw" }}>
        <Col style={{ height: "100vh" }} xs={2}>
          <Sidebar user={false} />
        </Col>
        <Col xs={10} style={{ padding: "0" }}>
          <Routes>
            {/* General */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Tourism Section */}
            <Route path="/tourism/dashboard" element={<Dashboard />} />
            <Route path="/tourism/transactions" element={<Transaction />} />
            <Route path="/tourism/requests" element={<Request />} />
            <Route path="/tourism/registration" element={<AddAdmin />} />
            <Route path="/tourism/users" element={<Users />} />
            <Route path="/tourism/complaints" element={<Complaints />} />
            <Route path="/tourism/maps" element={<Maps />} />

            {/* Modules */}
            <Route path="/tourism/accommodation" element={<Accommodation />} />
            <Route path="/tourism/shop" element={<Shop />} />
            <Route path="/tourism/event" element={<Event />} />
            <Route path="/tourism/TouristSpotModule/TouristSpotList" element={<TouristSpotList />} />
            <Route path="/tourism/TouristSpotModule/TouristSpotDetails/:id" element={<TouristSpotDetails />} />

            {/* Owner Section */}
            <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;
