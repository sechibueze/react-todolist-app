import React, { Component } from 'react';
class Footer extends Component {
  state = {}
  render() {
    return (
      <footer className='ápp-footer'>
        <div className='footer-content'>
          {/* <img className='dev' src='./todolist-app-270x180.png' alt='Developer' /> */}
          <div className='footer-text-wrapper'>

            <span className=''>Made with <i className='badge badge-light'>?<i className='fa fa-heart'></i></i></span>
            <br />
            <a href='https://sechibueze.github.io/'>Samuel Chibueze</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;