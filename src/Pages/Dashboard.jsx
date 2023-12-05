import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dashboard.css'
import Navbar from './components/navbar';

const Dashboard = () => {
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
                <button className="click">Dashboard</button>
              </a>
              <a href="/jadwal">
                <button>Jadwal Saya</button>
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

          <div className="col-md-10">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="card" id="card-dashboard">
                    <div className="card-body" id="card-dashboard-1">
                      <h5 className="card-title">Halo, Lina Wiona!</h5>
                      <p className="card-text">
                        Mari memulai belajar lagi, selesaikan materi yang tersedia
                      </p>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card" id="card-point">
                            <div className="card-body">
                              <div className="container">
                                <div className="row" id="card-dashboard-2">
                                  <div className="col-md-6">
                                    <h2>PointKu</h2>
                                    <p>
                                      70 <span>Point</span>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <h2>VoucherKu</h2>
                                    <p>
                                      5 <span>Voucher</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="row">
                      <div className="col-md-12" id="card-progress-section">
                        <h5>Lanjutkan Progressmu Terakhir</h5>
                        <div className="card">
                          <div className="card-body" id="card-progress">
                            <img src="src/Assets/Img/card-detail.png" alt="" />
                            <div className="card-progress-description">
                              <h5 className="card-title">Design Thinking</h5>
                              <p className="card-text">8/10 Submateri</p>
                              <div className="progress-container">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  >
                                    80%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col-md-12" id="card-progress-section">
                        <div className="card">
                          <div className="card-body" id="card-progress">
                            <img src="src/Assets/Img/card-detail.png" alt="" />
                            <div className="card-progress-description">
                              <h5 className="card-title">UI/UX</h5>
                              <p className="card-text">5/10 Submateri</p>
                              <div className="progress-container">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  >
                                    50%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4" id="info-section">
                  <h2>Informasi</h2>
                  <div className="card">
                    <div className="card-body" id="card-info-section">
                      <img src="src/assets/img/mentor/Lina Wiona.png" alt="" />
                      <div className="info-desc">
                        <h5 className="card-title">Lengkapi profilmu sekarang</h5>
                        <p className="card-text">
                          Kamu masih kekurangan profil untuk dilengkapi, lengkapi
                          sekarang juga!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <img
                className="my-2"
                src="src/Assets/Img/Only-Logo.png"
                alt=""
              />
              <h5 className="text-logo">
                Mentor<span className="primary">ku</span>
              </h5>
              <p>
                Booking dan temukan mentor proffesional dengan mudah.
              </p>
              <div className="sosmed-footer">
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/instagram.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/linkedin.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/twitter.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/youtube.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5>Mentorku</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Karir</a>
                </li>
                <li>
                  <a href="#!">Tentang Kami</a>
                </li>
                <li>
                  <a href="#!">Partner</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5>Layanan</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Mentoring</a>
                </li>
                <li>
                  <a href="#!">Course</a>
                </li>
                <li>
                  <a href="#!">Challenge</a>
                </li>
                <li>
                  <a href="#!">Event</a>
                </li>
                <li>
                  <a href="#!">Paket</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <h5>Bantuan dan Panduan</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Syarat dan Ketentuan</a>
                </li>
                <li>
                  <a href="#!">Kebijakan Privasi</a>
                </li>
                <li>
                  <a href="#!">Bantuan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Dashboard;
