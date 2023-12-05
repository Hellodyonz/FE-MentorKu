import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Footer } from "react-bootstrap/lib/modal";

const Home = () => {
  const [mentor1, setMentor1] = useState([]);
  const [searchType, setSearchType] = useState('Mentor'); // Jenis pencarian awal
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate()

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan sesuatu dengan nilai searchType dan searchInput
    console.log(`Search Type: ${searchType}, Search Input: ${searchInput}`);
    navigate(`carimentor?keyword=${searchInput}`)

  };

  useEffect(() => {
    getMentor();
  }, []);

  async function getMentor() {
    const response = await fetch(
      "https://teal-colorful-lemur.cyclic.app/mentor"
    );
    const data = await response.json();
    setMentor1(data.data);
  }


  return (
    <div>
      <header>
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

        <div className="header">
          <div className="container">
            <section className="section-header">
              <div className="header-content row flex-xl-row flex-column-reverse">
                <div className="header-text col-12 col-lg-12 col-xl-6 col-sm-12 py-5 col-md-12 ">
                  <h1>
                    Konsultasi Dengan <span className="secondary">Mentor</span>{" "}
                    Kapanpun dan Dimanapun
                  </h1>
                  <p>
                    Booking dan temukan mentor proffesional dengan mudah <br />
                    lakukan konsultasi dan diskusi efektif dengan 1 on 1
                  </p>
                  <div className="search-bar">
                    <div id="select">
                      <p id="select-text">{searchType}</p>
                      <i className="bi bi-caret-down-fill"></i>
                      <ul id="list-search">
                        <li className="options" onClick={() => handleSearchTypeChange('Mentor')}>Mentor</li>
                        <li className="options" onClick={() => handleSearchTypeChange('Materi')}>Materi</li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      id="search-input"
                      placeholder="Search all in categories"
                      value={searchInput}
                      onChange={handleInputChange}
                    />
                    <button id="search-btn" className="search-button" onClick={handleSearch}>
                      <i className="bi bi-search"><FaSearch/></i>
                    </button>
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
                  <img src="https://iili.io/JIFNcrl.md.png" alt="" srcSet="" />
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
                <img src="https://iili.io/JIF8dx9.png" alt="" srcSet="" />
              </div>
              <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
                <img src="https://iili.io/JIF8HD7.png" alt="" srcSet="" />
              </div>
              <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
                <img src="https://iili.io/JIF82Ve.png" alt="" srcSet="" />
              </div>
              <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
                <img src="https://iili.io/JIF89NS.png" alt="" srcSet="" />
              </div>
              <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
                <img src="https://iili.io/JIFvyR2.png" alt="" srcSet="" />
              </div>
              <div className="col-xl-2 col-md-4 py-2 col-sm-4 col-6">
                <img src="https://iili.io/JIFvpHl.png" alt="" srcSet="" />
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
                <img src="https://iili.io/JIF6oOv.md.png" alt="" srcSet="" />
              </div>
              <div className="benefit-text col-xl-6">
                <h3>Apa Saja yang akan kamu dapat ?</h3>
                <div className="row">
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img
                        src="https://iili.io/JIF67gn.png"
                        alt=""
                        srcSet=""
                      />
                      <h4>Mentor Proffesional</h4>
                      <p>
                        Dapatkan mentor berpengalaman dari berbagai industri dan
                        start up
                      </p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img
                        src="https://iili.io/JIF6aJs.png"
                        alt=""
                        srcSet=""
                      />
                      <h4>1 On 1 Mentor</h4>
                      <p>
                        Hanya kamu dan mentor diskusikan & konsultasi efektif
                        dalam 45 menit
                      </p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img
                        src="https://iili.io/JIF6c5G.png"
                        alt=""
                        srcSet=""
                      />
                      <h4>Hemat Banget</h4>
                      <p>
                        Cari mentor profesional dengan harga yang sesuai untukmu
                      </p>
                    </div>
                  </div>
                  <div className="col-6 benefit-item">
                    <div className="benefit-card">
                      <img
                        src="https://iili.io/JIF6lef.png"
                        alt=""
                        srcSet=""
                      />
                      <h4>Kapanpun Dimanapun</h4>
                      <p>
                        Dilakukan secara online dan pilihlah penjadwalan sesuai
                        kemauanmu
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <a href="#" className="btn btn-outline-light mt-5">
                    Pelajari Lebih Lanjut
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recomendation-section">
          <div className="container">
            <h2>Temukan Mentor Terbaikmu</h2>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 ow-cols-sm-1 g-xl-4 g-md-2 g-sm-1">
              {mentor1.length == 0 ? (
                <div>Loading...</div>
              ) : (
                mentor1.map((item) => (
                  <div className="col" key={item.id}>
                    <a href={`/mentor?id=${item.id}`}>
                      <div className="card card-mentor">
                        <img
                          src={item.profile_image}
                          alt={item.profile_image}
                          srcSet=""
                        />
                        <h3>{item.name}</h3>
                        <div className="mentor-company d-inline-flex gap-2 align-items-center">
                          <i className="bi bi-suitcase-lg"></i>
                          <div className="mentor-company-text">
                            {item.position} di {item.company}
                          </div>
                        </div>
                        <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                          <div className="mentor-experience">
                            Experience <br /> <b>{item.yoe} Tahun</b>
                          </div>
                          <div className="mentor-status">available</div>
                        </div>
                        <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                          <div className="price">Rp{item.price}</div>
                          <div className="rating d-inline-flex gap-1">
                            <i className="bi bi-star-fill">
                              <FaStar />
                            </i>
                            4.9<b>(576)</b>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              )}


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

      <Footer/>
    </div>
  );
};

export default Home;
