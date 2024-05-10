import React, { Component } from 'react';
import { Container, Row, Col, NavItem, Nav } from 'reactstrap';
import { RxDashboard } from "react-icons/rx";
import { PiUsers } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { SiDataverse } from 'react-icons/si';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {
  render() {
    const borderStyle = {
      borderRadius: '10px',
      padding: '10px ',
      textDecoration: 'none',
      
    };

    
    const activeLinkStyle = {
      color: ' #fff', 
      backgroundColor:"#000"
      
     
    };

    const hrStyle = {
      backgroundColor: '#000',
      height: '2px',
      border: 'none',
      margin: '20px',
      cursor: 'pointer',
    };

    return (
      <div style={{ position: 'sticky', top: '0', zIndex: '100', backgroundColor: '#fff', paddingTop: '0px' }}>
        <Nav vertical className="bg-light" style={{ height: '100vh', maxWidth: '300px' }}>
          <div className="p-3  d-grid justify-content-center ">
            <CiDeliveryTruck style={{ fontSize: '80px', color: ' #000' }} />
          </div>
          <hr style={hrStyle} />

          <NavItem>
            <NavLink
              className="m-3  border d-flex align-items-center noUnderline color"
              style={{ ...borderStyle, ...(window.location.pathname === '/dashboard/bar' ? activeLinkStyle : {}), }}
              to="/dashboard/bar"
            >
              
              <RxDashboard  className="m-2" />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="m-3  border d-flex align-items-center noUnderline color"
              style={{ ...borderStyle, ...(window.location.pathname === '/dashboard/users' ? activeLinkStyle : {}), }}
              to="/dashboard/users"
            >
              <PiUsers className="m-2" />
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="m-3  border d-flex align-items-center noUnderline color"
              style={{ ...borderStyle, ...(window.location.pathname === '/dashboard/booking' ? activeLinkStyle : {}), }}
              to="/dashboard/booking"
            >
              <IoSettingsOutline className="m-2" />
             Booking
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="m-3 text-dark border d-flex align-items-center noUnderline color"
              style={{ ...borderStyle, ...(window.location.pathname === '/dashboard/profile' ? activeLinkStyle : {}) }}
              to="/dashboard/profile"
            >
              <CgProfile className="m-2" />
              Profile
            </NavLink>
          </NavItem>

          <div className="mt-auto p-3">
            <NavItem>
              <NavLink to="/login">
                <button className="btn btn-dark">Logout</button>
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>
    );
  }
}

class DashboardLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="ml-auto">
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardLayout;
