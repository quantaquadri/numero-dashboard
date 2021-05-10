import React, { Fragment } from 'react';
import './style.css';

import ChartistGraph from 'react-chartist';
import EventCharts from './eventCharts';
import DashBoardSideBar from './dashboardSideBar';

const Default = () => {
  return (
    <Fragment>
      <div
        className="container-fluid py-3  px-5"
        style={{ backgroundColor: '#fff', borderRadius: '20px' }}
      >
        <h4 className="mx-1">Dashboard</h4>
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 xl-100">
            <div className="row">
              <EventCharts />
              {/* side section */}
              <DashBoardSideBar />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Sample Card</h5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </div>
              <div className="card-body">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Default;
