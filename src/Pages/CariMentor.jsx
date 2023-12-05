import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/carimentor.css'
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";


const CariMentor = () => {
  const [mentor1, setMentor1] = useState([]);
  const [searchMentor, setsearchMentor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchParams] = useSearchParams('');
  // const q = searchParams.get("keyword");
  // console.log('keyword', q)
  // setKeyword(q)

  const handleOnChange = event => {
    setsearchMentor(event.target.value);
  }

  const handleOnClick = () => {
    setKeyword(searchMentor)
  }

  useEffect(() => {
    const q = searchParams.get("keyword");
    console.log('keyword', q)
    setKeyword(q)
    setsearchMentor(q)
  }, [searchParams]);

  useEffect(() => {
    if (keyword !== "") {
      getMentorByKeyword(keyword);
    }
  }, [keyword]);

  async function getMentorByKeyword(keyword) {
    const response = await fetch(
      `https://teal-colorful-lemur.cyclic.app/mentor?q=${keyword}`
    );
    const data = await response.json();
    setMentor1(data.data);
  }
  

  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://iili.io/JIFNa14.md.png" alt="" className="me-1" />
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
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
                <button className="btn btn-flat">Login</button>
                <button className="btn btn-secondary">Register</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="search-section">
          <div className="container">
            <div className="pencarian-mentor">
              <h1>Cari Mentor Favoritmu</h1>
              <br />
              <input id="search-input" type="text" onChange={handleOnChange} />
              <button id="search-btn" onClick={handleOnClick}>Search Mentor</button>
            </div>


            {/* Card mentor */}
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

            <section className="search-result-section">
              <div
                id="result-container"
                className="result-container row row-cols-1 row-cols-xl-4 row-cols-md-3 ow-cols-sm-1 g-xl-4 g-md-2 g-sm-1"
              >
                {/* isi card */}
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer className="text-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <img className="my-2" src="https://iili.io/JIFNa14.md.png" alt="" />
              <h5 className="text-logo">
                Mentor<span className="primary">ku</span>
              </h5>
              <p>Booking dan temukan mentor proffesional dengan mudah.</p>
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

      {/* <script src="/script/carimentor.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script> */}
    </div>
  );
};

export default CariMentor;
