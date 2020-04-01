import React, { Component } from 'react';

class Navbar extends Component {
  state = {}
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <div className='navbar-brand'>
            <h1 className='display-5'><a href='/'>TodoList</a></h1>
          </div>
          <div className='navbar-toggler' data-toggle='collapse' data-target='#navlinks'>
            <div className='navbar-toggler-icon'></div>
          </div>
          <div className='collapse navbar-collapse navbar-right' id='navlinks'>
            <ul className='navbar-nav' >
              <li className='nav-item'> <a href='https://github.com/sechibueze/react-todolist-app' className='nav-link badge badge-info ml-3 p-1'><span className='fa fa-github mr-2'></span>Github</a> </li>
            </ul>
          </div>
        </div>
      </nav>
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="/">Navbar</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/">Link</a>
      //       </li>

      //       <li className="nav-item">
      //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      //       </li>
      //     </ul>

      //   </div>
      // </nav>

    );
  }
}

export default Navbar;