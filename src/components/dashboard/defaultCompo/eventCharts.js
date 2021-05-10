import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import { chart1, chartsmall } from '../../../charts-data/default';
import ChartistGraph from 'react-chartist';
import configDB from '../../../data/customizer/config';
import {
  DollarSign,
  Tag,
  ShoppingBag,
  MessageCircle,
  MinusCircle,
  ThumbsUp,
  MessageSquare,
  Briefcase,
  MoreHorizontal,
  Send,
  Activity,
  Anchor,
  Compass,
  Cpu,
  Slack,
  Umbrella,
  Sun,
  Box,
  Book,
} from 'react-feather';

const primary =
  localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary =
  localStorage.getItem('secondary_color') ||
  configDB.data.color.secondary_color;

const EventCharts = () => {
  return (
    <Fragment>
      <div className="col-lg-8 col-md-9  col-sm-12  pb-5 col  mw-100 ">
        <div className="card shadow pb-5">
          <div className="card-body w-100">
            <div className="show-value-top"></div>
            <div className="smooth-chart flot-chart-container w-100 ">
              <div className="row">
                <div className="col-md-5">
                  <p>Transaction analysis</p>
                </div>
                <div
                  className="col-md-3 p-2 rounded mx-3"
                  style={{ backgroundColor: '#FBF7FD' }}
                >
                  <div className="value-left d-inline-block">
                    <div
                      className=" d-inline-block"
                      style={{
                        backgroundColor: '#5F31B4',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        marginRight: '5px',
                      }}
                    ></div>
                    <span>Inflow</span>
                  </div>
                </div>
                <div
                  className="col-md-3 p-2 rounded"
                  style={{ backgroundColor: '#ECFDF5' }}
                >
                  <div className="value-right d-inline-block">
                    <div
                      className=" d-inline-block"
                      style={{
                        backgroundColor: '#059669',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        marginRight: '5px',
                      }}
                    ></div>
                    <span>Outflow</span>
                  </div>
                </div>
              </div>
              <ChartistGraph
                key="2"
                className="ct-chart-line mw-100"
                data={{
                  labels: ['2009', '2010', '2011', '2012'],
                  series: [
                    [0, 6, 2, 6],
                    [0, 7, 1, 8],
                  ],
                }}
                type={'Line'}
                listener={{
                  draw: function (data) {
                    if (data.type === 'line' || data.type === 'area') {
                      data.element.animate({
                        d: {
                          begin: 2000 * data.index,
                          dur: 2000,
                          from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                          to: data.path.clone().stringify(),
                        },
                      });
                    }
                  },
                }}
                options={chart1}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCharts;
