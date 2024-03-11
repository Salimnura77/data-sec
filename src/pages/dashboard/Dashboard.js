import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import DashboardLayout from '../dashboard/siadenav/sidenav';

function getTitleFromPath(path) {
  const titleMappings = {
    '/dashboard/bar': 'Dashboard',
    '/dashboard/table': 'Users Table',
    '/dashboard/profile': 'Profile',
    '/dashboard/management': 'Management',
  };

  return titleMappings[path] || 'Dashboard';
}

function Dashboard() {
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const location = useLocation();

  useEffect(() => {
    const currentTitle = getTitleFromPath(location.pathname);
    setPageTitle(currentTitle);
  }, [location]);

  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-white bg-primary text-center border p-3">
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
