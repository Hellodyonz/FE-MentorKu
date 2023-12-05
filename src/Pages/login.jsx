import { useState } from 'react';
import '../style/login.css';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);

    fetch('https://teal-colorful-lemur.cyclic.app/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    })

    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.message == "Login berhasil") {
        console.log("Login Berhasil");
        localStorage.setItem('token', data.token);
        navigate('/')
      } else {
        alert("data yang dimasukkan salah")
      }
    })
    .catch(error => {
      console.error("Gagal melakukan login:", error);
    });
  };

  

  return (
    <div className="regist-page">
      <div className="row">
        <div className="col-md-6 custom-card" id="photo-regist">
          <div className="icon-page">
            <img className="my-2" src="https://iili.io/JIFNa14.md.png" alt="" />
            <h5 className="text-logo">
              Mentor<span className="primary">ku</span>
            </h5>
          </div>
          <div className="icon-regist">
            <img src="https://iili.io/JIK0mej.md.png" className="card-img-top" alt="" />
          </div>
        </div>
        <div className="col-md-6 custom-card" id="card-regist">
          <div className="card-body">
            <h2>Masuk Akun</h2>
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="password">Kata Sandi</label><br />
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
              </div>

              <br />
              <div className="button-submit-daftar">
                <input type="submit" value="Masuk" id="login" onClick={handleLogin} />
              </div>
              <div className="another-login">
                <h3>Login Dengan</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-google" viewBox="0 0 16 16">
                  <path
                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-facebook" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
