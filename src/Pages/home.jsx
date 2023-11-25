import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaStar } from "react-icons/fa6";


const Home = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="src/assets/img/Only-Logo.png" alt="" srcSet="" className="me-1" />
              Mentor<span className="primary">Ku</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">Top Mentor</a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">Event</a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">Jadi Mentor</a>
                </li>
              </ul>

              <div>
                <a href="/login">
                <button id="btnLogin" className="btn btn-flat">Login</button>
                </a>
                <a href="/regist">
                  <button id="btnRegist" className="btn btn-secondary">Register</button>
                  </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="header">
          <div className="container">
            <section className="section-header">
              <div className="header-content row flex-xl-row flex-column-reverse">
                <div className="header-text col-12 col-lg-12 col-xl-6 col-sm-12 py-5 col-md-12 ">
                  <h1>Konsultasi Dengan <span className="secondary">Mentor</span> Kapanpun dan Dimanapun</h1>
                  <p>Booking dan temukan mentor proffesional dengan mudah <br />
                    lakukan konsultasi dan diskusi efektif dengan 1 on 1</p>
                  <div className="search-bar">
                    <div id="select">
                      <p id="select-text">Mentor</p>
                      <i className="bi bi-caret-down-fill"></i>
                      <ul id="list-search">
                        <li className="options">Mentor</li>
                        <li className="options">Materi</li>
                      </ul>
                    </div>
                    <input type="text" id="search-input" placeholder="Search all in categories" />
                    <button id="search-btn" className="search-button"><i className="bi bi-search">Q</i></button>
                  </div>
                  <div className="row">
                    <div className="statistic col-lg-2 col-md-2 col-sm-2 col-4">
                      <h3>20+</h3>
                      <p>Partner</p>
                    </div>
                    <div className="statistic col-lg-2 col-md-2 col-sm-2 col-4">
                      <h3>108+</h3>
                      <p>Mentee</p>
                    </div>
                    <div className="statistic col-lg-2 col-md-2 col-sm-2 col-4">
                      <h3>723+</h3>
                      <p>Mentor</p>
                    </div>
                  </div>
                </div>
                <div className="header-image col-lg-6 col-sm-12 col-md-12 col-12 d-flex justify-content-center">
                  <img src="src/Assets/Img/header-logo.png" alt="" srcSet="" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="partner-section">
      <div className="container">
        <div className="row text-center align-items-center">
          <h3>Lebih dari 200 perusahaan bergabung dengan MentorKu</h3>
          <div className="col-xl-2 col-md-4 py-3 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/slack.png" alt="" srcSet="" />
          </div>
          <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/airbn.png" alt="" srcSet="" />
          </div>
          <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/tinder.png" alt="" srcSet="" />
          </div>
          <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/google.png" alt="" srcSet="" />
          </div>
          <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/amazon.png" alt="" srcSet="" />
          </div>
          <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
            <img src="src/Assets/Img/brand/paypal.png" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
      </header>

      <main>
        <section className="benefit-section">
          <div className="container">
            <div className="row benefit">

              <div className="benefit-image col-xl-5">
                <img src="src/Assets/Img/benefit-image.png" alt="" srcSet="" />
              </div>
              <div className="benefit-text col-xl-6">
                <h3>Apa Saja yang akan kamu dapat ?</h3>
                <div className="row">
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img src="src/Assets/Img/benefit icon/verif.png" alt="" srcSet="" />
                      <h4>Mentor Proffesional</h4>
                      <p>Dapatkan mentor berpengalaman dari berbagai industri dan start up</p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img src="src/Assets/Img/benefit icon/people.png" alt="" srcSet="" />
                      <h4>1 On 1 Mentor</h4>
                      <p>Hanya kamu dan mentor diskusikan & konsultasi efektif dalam 45 menit</p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img src="src/Assets/Img/benefit icon/money.png" alt="" srcSet="" />
                      <h4>Hemat Banget</h4>
                      <p>Cari mentor profesional dengan harga yang sesuai untukmu</p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img src="src/Assets/Img/benefit icon/connect.png" alt="" srcSet="" />
                      <h4>Kapanpun Dimanapun</h4>
                      <p>Dilakukan secara online dan pilihlah penjadwalan sesuai kemauanmu</p>
                    </div>
                  </div>
                </div>
                <div className="row text-center"><a href="#" className="btn btn-outline-light mt-5">Pelajari Lebih Lanjut</a></div>
              </div>

            </div>
          </div>
        </section>

        <section className="recomendation-section">
      <div className="container">
        <h2>Temukan Mentor Terbaikmu</h2>
        <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 ow-cols-sm-1 g-xl-4 g-md-2 g-sm-1">
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor1.png" alt="" srcSet="" />
                <h3>Nadine Anggela</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor2.png" alt="" srcSet="" />
                <h3>Micho Suhada</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Shopee</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor3.png" alt="" srcSet="" />
                <h3>Lina Wiona</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor4.png" alt="" srcSet="" />
                <h3>Bambang Riven</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor4.png" alt="" srcSet="" />
                <h3>Nicola Sera</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor3.png" alt="" srcSet="" />
                <h3>Daniel Suharta</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor2.png" alt="" srcSet="" />
                <h3>Sasuke Sarutobi</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
          <div className="col">
            <a href="detail-mentor.html?id=1">
              <div className="card card-mentor">
                <img src="src/Assets/Img/mentor/mentor1.png" alt="" srcSet="" />
                <h3>Melani Nia</h3>
                <div className="mentor-company d-inline-flex gap-2 align-items-center">
                  <i className="bi bi-suitcase-lg"></i>
                  <div className="mentor-company-text">Data Analysis di Google</div>
                </div>
                <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="mentor-experience">
                    Experience <br /> <b>4 years</b>
                  </div>
                  <div className="mentor-status">available</div>
                </div>
                <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                  <div className="price">Rp95.000</div>
                  <div className="rating d-inline-flex gap-1">
                    <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                  </div>
                </div>
              </div>
            </a>
          </div>          
        </div>
        <div className="d-flex justify-content-center py-5">
          <button className="button-mentor">Lihat Lainnya</button>
        </div>
      </div>
    </section>


    <section className="join-mentor-section">
      <div className="container">
        <div className="banner-join-mentor text-center">
          <h1>
            Mari Bergabung Menjadi mentor <br />
            Bantu Mentee Melangkah Lebih Jauh
          </h1>
          <button className="button-mentor">Jadi Mentor</button>
        </div>
      </div>
    </section>
      </main>

      <footer className="text-black">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <img className="my-2" src="src/Assets/Img/Only-Logo.png" alt="" />
            <h5 className="text-logo">Mentor<span className="primary">ku</span></h5>
            <p>Booking dan temukan mentor profesional dengan mudah.</p>
            <div className="sosmed-footer">
              <div className="sosmed-logo">
                <img src="src/Assets/Img/social media/instagram.png" alt="" />
              </div>
              <div className="sosmed-logo">
                <img src="src/Assets/Img/social media/linkedin.png" alt="" />
              </div>
              <div className="sosmed-logo">
                <img src="src/Assets/Img/social media/twitter.png" alt="" />
              </div>
              <div className="sosmed-logo">
                <img src="src/Assets/Img/social media/youtube.png" alt="" />
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

    </div>
  );
};

export default Home;
