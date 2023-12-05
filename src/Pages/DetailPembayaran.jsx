import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/DetailPembayaran.css';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';

const Pembayaran = () => {
  
  const [mentor1, setMentor1] = useState([]);
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const id = searchParams.get("id");
    getMentor(id);
  }, [searchParams]);

  async function getMentor(id) {
    try {
      const response = await fetch(`https://teal-colorful-lemur.cyclic.app/mentor/${id}`);
      const data = await response.json();
      setMentor1([data.data]);
    } catch (error) {
      console.error("Gagal mendapatkan data mentor:", error);
    }
  }

  const selectedMentor = mentor1.length > 0 ? mentor1[0] : null;


  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <section className="breadcrumb-section">
          <div className="container">
            <div className="breadcrumb d-inline-flex gap-2 align-items-center">
              <i className="bi bi-arrow-left-short"><a href="/mentor">  </a></i>
              <h2>Konfirmasikan dan Bayar</h2>
            </div>
          </div>
        </section>

        <section className="payment-information-section">
          <div className="container">
            <div className="row">
              {selectedMentor ? (
                <div className="col-12 col-xl-7 col-md-12 col-sm-12">
                <div className="mentoring-details">
                  <h5>Mentoring Anda</h5>
                  <hr />
                  <h6>Mentor</h6>
                  <p id="namamentor">{selectedMentor.name}</p>
                  <h6>Hari/Tanggal</h6>
                  <p>Rabu, 02 November 2022</p>
                  <h6>Waktu</h6>
                  <p>13.00 - 13.45 WIB</p>
                </div>
                <br />
              </div>
              ): (
                <div>Loading...</div>
              )}

              <div className="col-12 col-xl-5 col-md-12 col-sm-12 py-xl-0 py-md-3 py-sm-4 py-3">
                <div className="card card-booking mb-3">
                  <div className="row g-0">
                    <div className="col-md-5 col-sm-12">
                      <img src="https://iili.io/JIKxDZb.md.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">Mentoring 1 on 1 <br /></h5>
                        <hr />
                        <div className="card-booking-rating d-inline-flex gap-2 align-items-center">
                          <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <div className="mentoring-details">
                  <h5>Detail Pembayaran</h5>
                  <hr />
                  {/*  */}
                  <div className="payment-cart">
                    <div className="normal-price">
                      <h6>1 on 1 Mentoring</h6>
                      <h6>Rp90.000</h6>
                    </div>
                    <div className="discount">
                      <h6>Diskon Spesial</h6>
                      <h6>- Rp10.000</h6>
                    </div>
                    <hr />
                    <div className="total-payment">
                      <div>
                        <h6>Total Biaya</h6>
                      </div>
                      <div>
                        <h6 className="total-payment-higlight">Rp.80.000</h6>
                      </div>
                    </div>
                    <div id="cta-payment" className="cta-payment">
                      <a className="btn btn-primary" href="/barcode">Lakukan Pembayaran</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>

      <script src="/script/detail-pembayaran.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Pembayaran;
