import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowSmRight,
  HiChartPie,
  HiClipboardList,
  HiCreditCard,
  HiHome,
  HiUsers,
  HiMap,
  HiOutlineExclamationCircle,
  HiShoppingCart,
  HiLogout,
  HiOfficeBuilding,
  HiChevronDown,
  HiChevronUp,
  HiGlobe,
} from "react-icons/hi";

import '../styles/Sidebar.css';


function Sidebar(props) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const owner =
    <>
      <div className="mb-4">
        <img src="https://i0.wp.com/nagayon.com/wp-content/uploads/2024/05/logo_final-1-e1722758552298.png?resize=768%2C527&ssl=1" alt="" />
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/owner/dashboard" className="nav-link text-white">
            <HiChartPie className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/bookings" className="nav-link text-white">
            <HiClipboardList className="me-2" /> Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/transactions" className="nav-link text-white">
            <HiCreditCard className="me-2" /> Transactions
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/manage-accommodation" className="nav-link text-white">
            <HiHome className="me-2" /> Manage Accommodation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/partnership" className="nav-link text-white">
            <HiOfficeBuilding className="me-2" /> Partnership
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/feedback" className="nav-link text-white">
            <HiOutlineExclamationCircle className="me-2" /> Feedback
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/maps" className="nav-link text-white">
            <HiMap className="me-2" /> Maps
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner/manage-account" className="nav-link text-white">
            <HiUsers className="me-2" /> Manage Account
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <HiLogout className="me-2" /> Sign Out
          </Link>
        </li>
      </ul>
    </>;


  const tourism =
    <>

      <div className="mb-2 Sidebar">
        <img width={"200px"} src="https://i0.wp.com/nagayon.com/wp-content/uploads/2024/05/logo_final-1-e1722758552298.png?resize=768%2C527&ssl=1" alt="" />
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/tourism/dashboard" className="nav-link text-white">
            <HiChartPie className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tourism/requests" className="nav-link text-white">
            <HiClipboardList className="me-2" /> Requests
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tourism/transactions" className="nav-link text-white">
            <HiCreditCard className="me-2" /> Transactions
          </Link>
        </li>
        <li className="nav-item">
          <div
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleServices}
            style={{ cursor: "pointer" }}
          >
            <span>
              <HiGlobe className="me-2" /> Services
            </span>
            {isServicesOpen ? <HiChevronUp /> : <HiChevronDown />}
          </div>
          <ul
            className={`nav flex-column ps-3 collapse ${isServicesOpen ? "show" : ""}`}
          >
            <li className="nav-item">
              <Link to="/tourism/accommodation" className="nav-link text-white">
                <HiHome className="me-2" /> Accommodations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tourism/TouristSpotModule/TouristSpotList" className="nav-link text-white">
                <HiMap className="me-2" /> Tourist Spots
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tourism/event" className="nav-link text-white">
                <HiOfficeBuilding className="me-2" /> Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tourism/shop" className="nav-link text-white">
                <HiShoppingCart className="me-2" /> Shops
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/tourism/complaints" className="nav-link text-white">
            <HiOutlineExclamationCircle className="me-2" /> Complaints
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tourism/users" className="nav-link text-white">
            <HiUsers className="me-2" /> Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tourism/maps" className="nav-link text-white">
            <HiMap className="me-2" /> Maps
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tourism/registration" className="nav-link text-white">
            <HiArrowSmRight className="me-2" /> Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <HiLogout className="me-2" /> Sign Out
          </Link>
        </li>
      </ul>
    </>

  return (
    <div
      className="d-flex flex-column text-white p-3"
      style={{ width: "100%", height: "100%", backgroundColor: "#0A1B47" }}
    >
      {props.user ? owner : tourism}
    </div>
  );
}

export default Sidebar;
