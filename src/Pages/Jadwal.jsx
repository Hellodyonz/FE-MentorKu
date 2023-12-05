import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/jadwal.css'
import Footer from './components/footer';
import Navbar from './components/navbar';

const Jadwal = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="profile-sec">
              <img src="src/assets/img/mentor/Lina Wiona.png" alt="" />
              <h2>Lina Wiona</h2>
              <button className="button-link">https://linawiona.com</button>
            </div>
            <div className="side-bar">
              <a href="/dashboard">
                <button>Dashboard</button>
              </a>
              <a href="/jadwal">
                <button className="click">Jadwal Saya</button>
              </a>
              <a href="/event">
                <button>Event</button>
              </a>
              <a href="/transaksi">
                <button>Transaksi</button>
              </a>
              <a href="/">
                <button>Logout</button>
              </a>
            </div>
          </div>

          <div className="col-md-10" id="card-time-section">
      <div className="container mt-5">
        <div className="row">
          <h5>Jadwal Saya</h5>

          {/* Card 1 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 2 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 3 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 4 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>

      <Footer/>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Jadwal;
