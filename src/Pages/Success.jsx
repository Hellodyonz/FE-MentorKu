import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Success.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

const PaymentSuccess = () => {
  return (
    <div>
        <header>
        <Navbar/>
        </header>

        <main>
          <div className="container">
            <div className="row box-container">
              <div className="box-payment ">
                <i className="bi bi-check-circle-fill"></i>
                <h2>Pembayaran Berhasil</h2>
                <p>
                  Selamat pembayaran berhasil dilakukan. Silahkan lihat <br /> detail sesi mentoring Anda.
                </p>
                <div className="button-container">
                  <div>
                    <a href="/transaksi">
                    <button className="btn btn-primary">Detail Transaksi</button>
                    </a>
                  </div>
                  <div>
                    <a href="/">
                    <button id="back-home" className="btn btn-border-primary">
                      Kembali ke Home
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

       <Footer/>
    </div>
  );
};

export default PaymentSuccess;
