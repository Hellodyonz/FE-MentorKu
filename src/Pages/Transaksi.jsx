import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/transaksi.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Transaksi = () => {

  const navigate = useNavigate()

  const handleMentoring = () => {
    window.location.href = 'https://us05web.zoom.us/j/88962964514?pwd=lPynFRdw9BdGQroilsaxpRkFp4bSMM.1';
  }


  return (
    <>
      <header>
        <Navbar/>
      </header>

      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="profile-sec">
              <img src="src/assets/img/mentor/Lina Wiona.png" alt="" />
              <h2>Lina Wiona</h2>
              
            </div>
            <div className="side-bar">
              <a href="/dashboard">
                <button>Dashboard</button>
              </a>
              <a href="/jadwal">
                <button>Jadwal Saya</button>
              </a>
              <a href="/event">
                <button>Event</button>
              </a>
              <a href="/transaksi">
                <button className="click">Transaksi</button>
              </a>
              <a href="/">
                <button>Logout</button>
              </a>
            </div>
          </div>

          <div className="col-md-10" id="card-transaction-section">
            <div className="container mt-5">
              <div className="row">
                <h5>Transaksi</h5>
                <div className="col-md-12 d-flex justify-content-between active-mentoring p-3 align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="src/Assets/Img/mentor/mentor4.png"/>
                      <div className="p-3">
                          <h5 className="card-title">Micho Suhada</h5>
                          <p className="card-text">
                              Product Designer di Gojek
                          </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="box-time align-items-center">
                      <h5 className="title-mentoring p-3">
                        <p style={{fontSize: '20px', color : 'red'}}>Akan berlangsung</p>
                        Mentoring <span>10:00 - 12:00</span></h5>
                      </div>
                      <br />
                      <button style={{backgroundColor: '#FF764A',fontSize: '16px',color: "white", border: "none"}} onClick={handleMentoring}>Join Mentoring</button>
                    </div>
                </div>
                
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

export default Transaksi;
