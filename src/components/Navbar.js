
import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsDekho</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">business</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">entertainment</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">generalhealth</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">science</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">sports</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="/abput">technology</a></li>
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
