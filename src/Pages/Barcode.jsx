import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/Barcode.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

const PaymentBarcode = () => {
  return (
    <div>
      <header>
      <Navbar/>
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

    <Footer/>

    </div>
  );
};

export default PaymentBarcode;
