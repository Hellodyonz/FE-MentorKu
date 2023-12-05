import "../style/detail-mentor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaDribbble, FaInstagram, FaLinkedin, FaYoutube, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Mentor = () => {
  const [mentor1, setMentor1] = useState([]);
  const [selectedMentoringTime, setSelectedMentoringTime] = useState(null);
  const [searchParams] = useSearchParams('');
  const navigate = useNavigate()

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

  const btnSesi = selectedMentor && selectedMentor.Mentoring_time
    ? selectedMentor.Mentoring_time.map((mentoringTime) => {
      // Ubah format tanggal
      const formattedDate = new Date(mentoringTime.avaliable_date_time);
      const day = formattedDate.toLocaleDateString('id-ID', { weekday: 'long' });
      const date = formattedDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      const time = formattedDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });

      return (
        <button
          key={mentoringTime.id}
          type="button"
          className="btn-sesi"
          onClick={() => handleButtonClick(mentoringTime.avaliable_date_time)}
        >
          <div className="sesi-hari">{day}</div>
          <div className="sesi-tgl">{date}</div>
          <div className="sesi-tgl">{time}</div>
        </button>
      );
    })
    : null;

  const handleButtonClick = (mentoringDateTime) => {
    // Simpan waktu mentoring terpilih saat tombol di klik
    setSelectedMentoringTime(mentoringDateTime);
  };

  const handleBooking = async () => {
    console.log('Mencoba melakukan booking:', selectedMentoringTime + " dengan mentor id : " + selectedMentor.id);
    
    
  
    if (selectedMentor && selectedMentoringTime) {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch('https://teal-colorful-lemur.cyclic.app/payment/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, 
          },
          body: JSON.stringify({
            mentor_id: selectedMentor.id,
            mentoring_date_time: selectedMentoringTime,
          }),
        });

  
        if (response.ok) {
          console.log('Booking berhasil');
        } else {
          console.error('Gagal melakukan booking');
        }

        navigate(`/pembayaran?id=${selectedMentor.id}`)
      } catch (error) {
        console.error('Gagal melakukan booking:', error);
      }
    } else {
      console.error('Pilih waktu mentoring terlebih dahulu');
    }
  };
  

  
  return (
    <>
      {/* Header Section Start */}
      <header>
        <Navbar/>
      </header>
      {/* Header Section End */}

      {/* Hero Section start */}
      <div className="background"></div>
      {/* <div className="background"></div> */}
      {selectedMentor ? (
        <div className="container" id="hero">
          <div className="hero-section">
            <div className="hero-text">
              <img
                src={selectedMentor.profile_image}
                alt="MentorKu"
              />
              <div className="hero-desc">
                <h2>
                  {selectedMentor.name}<span>{selectedMentor.position} di {selectedMentor.company}</span>
                </h2>
                <div className="hero-social-media">
                  <a href={selectedMentor.linkedin} className="fa">
                    <FaLinkedin />
                  </a>
                  <a href={selectedMentor.instagram} className="fa">
                    <FaInstagram />
                  </a>
                  <a href={selectedMentor.personal_web} className="fa">
                    <FaDribbble />
                  </a>
                  <a href="#" className="fa">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card" id='card-line'></div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* Description Section Start */}
      <div className="container">
        <div className="row">
      {selectedMentor ? (
        <div className="col-md-7 wider-column" id="description">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" id="desc-card">
                Deskripsi Mentor
              </h3>
              <p className="card-text" id="desc-text">
                {selectedMentor.desc}
              </p>
              <h3 className="card-title" id="desc-card">
                Pengalaman Kerja
              </h3>
              <p className="card-text" id="desc-text">
                <span>{selectedMentor.skill_1} ( 2020 - Sekarang )</span>
                <span>{selectedMentor.skill_2} ( 2018 - 2019 )</span>
                <span>{selectedMentor.skill_3} ( 2017 )</span>
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="button-professional">
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_1}
                    </button>
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_2}
                    </button>
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_3}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="social-media-btn">
                <a href={selectedMentor.linkedin} className="fa">
                  <FaLinkedin />
                </a>
                <a href={selectedMentor.instagram} className="fa">
                  <FaInstagram />
                </a>
                <a href={selectedMentor.personal_web} className="fa">
                  <FaDribbble />
                </a>
                <a href="#" className="fa">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="button-tutorial">
                    <p>Bingung Memulai Mentoring?</p>
                    <button type="button" className="btn-tutorial">
                      Panduan Mentoring &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
          <div className="col-md-5">
            {/* Dua kolom kanan */}
            <div className="row">
              <div className="col-md-12" id="card-sesi-jadwal">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title" id="card-jadwal">
                      Pilih Jadwal
                    </h3>
                    <div className="card" id="card-list-jadwal"></div>
                    <p className="card-sesi">Sesi Tersedia</p>
                    <div className="button-sesi">
                    <div className="date-sesi">
                    {btnSesi}
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card" id="detail-pembayaran">
                    <div className="card-body">
                      <h3 className="card-title" id="card-detail">
                        Detail Pembayaran
                      </h3>
                      
                      {/*  */}
                      <div className="range-mentoring">
                        <p>1 on 1 Mentoring</p>
                        {selectedMentor && (
                            <>
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                              }).format(selectedMentor.price)}
                            </>
                          )}
                      </div>
                      {/* <div className="range-diskon">
                        <p>Diskon Spesial</p>
                        <p>- Rp10.000</p>
                      </div> */}
                      <div className="card"></div>
                      <div className="range-total">
                        <p>Total Biaya</p>
                        <p className="range-total-harga">
                          {selectedMentor && (
                            <>
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                              }).format(selectedMentor.price)}
                            </>
                          )}
                        </p>
                      </div>
                      <div className="button-book">
                        <button
                            id="btn-booking-mentor"
                            type="button"
                            className="btn-book"
                            onClick={handleBooking}
                          >
                            Booking Mentor
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description Section End */}

      <div className="container" id="card-rating-container">
        <div className="row">
          <div className="col-md-7" id="rating-card">
            <div className="card">
              <div className="container" id="card-rating">
                <div className="card-rating-reviewer">
                  <h5 className="card-tittle-rating">Ulasan Mentor</h5>
                  <div className="rate-mentor">
                    <div className="rating-mentor">
                      <div className="rating-mentor-2">
                        <div className="rating-mentor-3">
                          <p className="description-rating">
                            <span>4.8</span>/5
                          </p>
                          <div className="star-rating">
                            <div className="star-rating-yes">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <div className="star-rating-no">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill">
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container" id="rate-star-container">
                    <div className="row">
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Semua (20)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 5 (19)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 4 (1)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 3 (0)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 2 (0)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 1 (0)</p>
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
      <div className="container" id="card-container-reviewer">
        <div className="row">
          {/* Repeat the following block for each card */}
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="https://iili.io/JIKBxWl.md.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="https://iili.io/JIKBox4.md.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="https://iili.io/JIKBCbf.md.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="button-centered">
            <button className="button-reviewer" id="load-more-button">
              Lihat Ulasan Lainnya
            </button>
          </div>
        </div>
      </div>

      <section className="recomendation-section">
          <div className="container">
            <h2>Temukan Mentor Terbaikmu</h2>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 ow-cols-sm-1 g-xl-4 g-md-2 g-sm-1">
              {mentor1.length == 0 ? (
                <div>Loading...</div>
              ) : (
                mentor1.map((item) => (
                  <div className="col" key={item.id}>
                    <a href="mentor?id=1">
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

      <Footer/>
    </>
  );
};

export default Mentor;
