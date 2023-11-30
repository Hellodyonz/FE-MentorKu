import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/Barcode.css';

const PaymentBarcode = () => {
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
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
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
      </header>

      <main>
      <div className="container">
        <div className="row box-container">
          <div className="box-payment ">
            <div className="icon-payment">
              <img className="my-2" src="src/Assets/Img/Only-Logo.png" alt="" />
              <h5 className="text-logo">
                Mentor<span className="">ku</span>
              </h5>
            </div>
            <div className="card"></div>
            <div className="title-price">
              <p>Total</p>
              <span>Lakukan Pembayaran</span>
            </div>
            <div className="text-price">
              <h3>Rp100.000</h3>
              <span>13:58:09</span>
            </div>
            <div className="category-payment">
              <p>Gopay</p>
              <img src="src/assets/img/payment/gopay-icon.png" alt="Gopay" />
            </div>
            <div className="card"></div>
            <div className="barcode-payment">
              <img src="src/assets/img/payment/barcode.jpg" alt="" />
            </div>
            <div className="button-container">
              <div>
                <a href="/success">
                <button className="btn btn-primary" id="btn-payment-done">
                  Pembayaran Selesai ?
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default PaymentBarcode;
