


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://iili.io/JIFNa14.md.png"
                alt=""
                srcSet=""
                className="me-1"
              />
              Mentor<span className="primary">Ku</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Top Mentor
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Event
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Jadi Mentor
                  </a>
                </li>
              </ul>

              <div>
                <a href="/login">
                  <button id="btnLogin" className="btn btn-flat">
                    Login
                  </button>
                </a>
                <a href="/regist">
                  <button id="btnRegist" className="btn btn-secondary">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar