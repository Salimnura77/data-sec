import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem,} from 'reactstrap';
import { MdOutlineDashboard } from "react-icons/md";
import { SiAsana } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { SiDataverse } from 'react-icons/si';
import {  NavLink } from 'react-router-dom';


class Sidebar extends Component {
  render() {
    const borderStyle = {
      borderRadius: '10px',
      padding: '15px ',
      textDecoration: 'none' 
      
    };
    const hrStyle = {
      backgroundColor: '#000',
      height: '2px',
      border: 'none',
      margin: '20px',
      cursor: 'pointer',
    };
   

    return (
      <Nav vertical className="bg-light  " style={{ height: '100vh', maxWidth: '300px' }}>
        <div className="p-3  d-grid justify-content-center ">
         <SiDataverse style={{ fontSize: '80px', color: ' #007BFF' }} /> 
        </div>
        <hr style={hrStyle} />

        <NavItem>
          <NavLink className="bg-primary m-3  text-light border d-flex align-items-center noUnderline " style={borderStyle}  to="/dashboard/bar">
            <MdOutlineDashboard className="m-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className=" m-3   text-light border  text-dark border d-flex align-items-center noUnderline" style={borderStyle}  to="/dashboard/users">
            <SiAsana className="m-2" />
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className=" m-3   text-dark border  text-dark border  text-dark border d-flex align-items-center noUnderline" style={borderStyle}  to="/dashboard/Management">
            <IoSettingsOutline className='m-2' />
            Management
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className=" m-3   text-dark border  text-dark border  text-light border d-flex align-items-center noUnderline" style={borderStyle}  to="/dashboard/profile">
            <CgProfile className="m-2" />
            profile
          </NavLink>
        </NavItem>

        <div className="mt-auto p-3">
          <NavItem>
            <NavLink  to="/login">
              <button className='btn btn-primary'>
                Logout
              </button>
            </NavLink>
          </NavItem>
        </div>
      </Nav>
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
