import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../dashboard/siadenav/sidenav';

function getTitleFromPath(path) {
  const titleMappings = {
    '/dashboard/bar': 'Dashboard',
    '/dashboard/users': 'Users table',
    '/dashboard/profile': ' User Profile',
    '/dashboard/booking': ' Bookings',
  };

  return titleMappings[path] || 'Dashboard';
}

function Dashboard() {
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentTitle = getTitleFromPath(location.pathname);
    setPageTitle(currentTitle);
  }, [location]);

  
  useEffect(() => {
    
    navigate('/dashboard/bar');
  }, []); 

 
  const borderStyle = {
    borderRadius: '20px',
    padding: '10px ',
    textDecoration: 'none',
    
  };


  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center  bg-light  p-3 sticky-top" style={borderStyle}>
                      {pageTitle}
                      
                    </h5>
                   
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
