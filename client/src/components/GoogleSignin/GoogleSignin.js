import React from 'react';
// import './GoogleSignin.css';

const GoogleSignin = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 mt-1">
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn btn-icon btn-block text-left social-login-btn"
        >
          <span>
            <img
              alt="google-icon"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              className="img-fluid mr-1"
              width="25"
            />
          </span>
          Sign up with Google
        </button>
      </div>
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn btn-icon btn-block text-left social-login-btn"
        >
          <span>
            <img
              alt="facebook-icon"
              src="https://i.imgur.com/URmkevm.png"
              className="img-fluid mr-1"
              width="25"
            />
          </span>
          Sign up with Facebook
        </button>
      </div>
      {/* <div className="col-sm-9 mt-2">
        <button
          type="button"
          className="btn btn-icon btn-block text-left social-login-btn"
        >
          <span>
            <img
              alt="twitter-icon"
              src="https://img.icons8.com/color/48/000000/twitter.png"
              className="img-fluid mr-1"
              width="25"
            />
          </span>
          Sign up with Twitter
        </button>
      </div> */}
    </div>
  );
};

export default GoogleSignin;
