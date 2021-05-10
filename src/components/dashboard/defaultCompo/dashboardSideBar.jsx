import React, { Fragment } from 'react';
import balance from './assets/balance-bg.png';

export default function DashBoardSideBar() {
  return (
    <>
      <Fragment>
        <div className="col-md-3 col-sm-12 left-border col col-lg-4 ">
          <div className="money-details mb-4">
            <div className="w-100 px-2 image-holder ">
              <img src={balance} width="350px" alt="...balance" />
              <div className=" py-3 text-light money-holder">
                <span>Total balance</span>
                <p className="money-text">NGN 7,000,000.00</p>
                <div
                  className="rounded px-2 py-3 d-flex text-light align-items-center"
                  style={{ backgroundColor: '#3D2381' }}
                >
                  <span
                    className="mr-3"
                    style={{ fontSize: '12px', fontWeight: 'lighter' }}
                  >
                    Available Balance:
                  </span>
                  {'   '}
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    NGN 7,000,000.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*....... */}

          <div
            className="d-flex mb-3 p-3 align-items-center mw-100"
            style={{ background: '#FBF7FD', borderRadius: '10px' }}
          >
            <div className="mx-4">
              {/* SVG */}
              <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="41" height="42" rx="10" fill="#5F31B4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.0002 17.0003C24.4473 17.0003 24.0002 17.4483 24.0002 18.0003V23.5863L15.7072 15.2932C15.3162 14.9022 14.6842 14.9022 14.2932 15.2932C13.9022 15.6842 13.9022 16.3162 14.2932 16.7072L22.5863 25.0002H17.0003C16.4473 25.0002 16.0003 25.4482 16.0003 26.0002C16.0003 26.5522 16.4473 27.0002 17.0003 27.0002H25.0002C25.5532 27.0002 26.0002 26.5522 26.0002 26.0002V18.0003C26.0002 17.4483 25.5532 17.0003 25.0002 17.0003Z"
                  fill="white"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="14"
                  y="15"
                  width="13"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.0002 17.0003C24.4473 17.0003 24.0002 17.4483 24.0002 18.0003V23.5863L15.7072 15.2932C15.3162 14.9022 14.6842 14.9022 14.2932 15.2932C13.9022 15.6842 13.9022 16.3162 14.2932 16.7072L22.5863 25.0002H17.0003C16.4473 25.0002 16.0003 25.4482 16.0003 26.0002C16.0003 26.5522 16.4473 27.0002 17.0003 27.0002H25.0002C25.5532 27.0002 26.0002 26.5522 26.0002 26.0002V18.0003C26.0002 17.4483 25.5532 17.0003 25.0002 17.0003Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect x="8" y="9" width="24" height="24" fill="white" />
                </g>
              </svg>
              {/* SVG */}
            </div>
            <div>
              <span>Total balance</span>
              <p className="money-text-sm">NGN 7,000,000.00</p>
            </div>
          </div>
          <div
            className="d-flex mb-3 p-3 align-items-center"
            style={{ background: '#ECFDF5', borderRadius: '10px' }}
          >
            <div className="mx-4">
              {/* SVG */}
              <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="41" height="42" rx="10" fill="#059669" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9998 24.9997C15.5527 24.9997 15.9998 24.5517 15.9998 23.9997L15.9998 18.4137L24.2928 26.7067C24.6838 27.0977 25.3157 27.0977 25.7068 26.7067C26.0978 26.3158 26.0978 25.6838 25.7068 25.2927L17.4138 16.9997L22.9998 16.9997C23.5528 16.9997 23.9998 16.5518 23.9998 15.9997C23.9998 15.4477 23.5528 14.9997 22.9998 14.9997L14.9998 14.9997C14.4468 14.9997 13.9998 15.4477 13.9998 15.9997L13.9998 23.9997C13.9998 24.5517 14.4468 24.9997 14.9998 24.9997Z"
                  fill="white"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="14"
                  y="15"
                  width="13"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.9998 24.9997C15.5527 24.9997 15.9998 24.5517 15.9998 23.9997L15.9998 18.4137L24.2928 26.7067C24.6838 27.0977 25.3157 27.0977 25.7068 26.7067C26.0978 26.3158 26.0978 25.6838 25.7068 25.2927L17.4138 16.9997L22.9998 16.9997C23.5528 16.9997 23.9998 16.5518 23.9998 15.9997C23.9998 15.4477 23.5528 14.9997 22.9998 14.9997L14.9998 14.9997C14.4468 14.9997 13.9998 15.4477 13.9998 15.9997L13.9998 23.9997C13.9998 24.5517 14.4468 24.9997 14.9998 24.9997Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect
                    x="32"
                    y="33"
                    width="24"
                    height="24"
                    transform="rotate(-180 32 33)"
                    fill="white"
                  />
                </g>
              </svg>
              {/* SVG */}
            </div>
            <div>
              <span>Total balance</span>
              <p className="money-text-sm">NGN 7,000,000.00</p>
            </div>
          </div>
          <div
            className="d-flex mb-3 p-3 align-items-center"
            style={{ background: '#F7F7F8', borderRadius: '10px' }}
          >
            <div className="mx-4">
              {/* svg */}
              <svg
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="41" height="42" rx="10" fill="#5F31B4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 12C27.45 12 27 12.45 27 13V28C27 28.55 27.45 29 28 29C28.55 29 29 28.55 29 28V13C29 12.45 28.55 12 28 12ZM21 16C20.45 16 20 16.45 20 17V28C20 28.55 20.45 29 21 29C21.55 29 22 28.55 22 28V17C22 16.45 21.55 16 21 16ZM13 21C13 20.45 13.45 20 14 20C14.55 20 15 20.45 15 21V28C15 28.55 14.55 29 14 29C13.45 29 13 28.55 13 28V21Z"
                  fill="white"
                />
              </svg>
              {/* svg */}
            </div>
            <div>
              <span>Total balance</span>
              <p className="money-text-sm">NGN 7,000,000.00</p>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
}
