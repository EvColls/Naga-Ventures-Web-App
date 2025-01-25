
import Accommodation from './pages/tourism/accommodations';
import Shop from './pages/tourism/shops';
import TouristSpot from './pages/tourism/toursit-spot';
import Event from './pages/tourism/events';
import Dashboard from './pages/tourism/dashboard';
import Transaction from './pages/tourism/transaction';
import Request from './pages/tourism/request';
import AddAdmin from './pages/tourism/registration'
import Users from './pages/tourism/users'
import Complaints from './pages/tourism/complaints'
import Maps from './pages/tourism/maps'

import OwnerDashboard from './pages/owner/dashboard';

import Sidebar from './components/Sidebar'

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Row style={{ padding: "0", height: "100vh", width: "100vw" }}>
          <Col style={{ height: "100vh" }} xs={2}>
            <Sidebar user={false}/>
          </Col>
          <Col xs={10} style={{padding: "0"}}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/tourism/requests" element={<Request />} />
              <Route path="/tourism/transactions" element={<Transaction />} />
              <Route path="/tourism/dashboard" element={<Dashboard />} />
              <Route path="/tourism/accommodation" element={<Accommodation />} />
              <Route path="/tourism/shop" element={<Shop />} />
              <Route path="/tourism/tourist-spot" element={<TouristSpot />} />
              <Route path="/tourism/event" element={<Event />} />
              <Route path="/tourism/complaints" element={<Complaints />} />
              <Route path="/tourism/maps" element={<Maps />} />
              <Route path="/tourism/users" element={<Users />} />
              <Route path="/tourism/registration" element={<AddAdmin />} />
              <Route path="/owner/dashboard" element={<OwnerDashboard />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  )
}
export default App
