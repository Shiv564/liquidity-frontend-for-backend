import React, { useState, useEffect } from 'react'
import as from "./Login.module.css"


import { IoMdRocket } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";


import { useNavigate } from 'react-router';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage';
import Navbar from '../Navbar/Navbar';
import Pannel from '../Navbar/Pannel';

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [eyeSnatch, setEyeSnatch] = useState(false)
  const [loaderVis, setloaderVis] = useState(false);


  const [borderState, setBorderState] = useState('Login');


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setloaderVis(true);

    try {
      const res = await fetch(Origin + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);

        // Save token securely
        secureLocalStorage.setItem('TnTrdx', data.token);

        // Save other needed user info
        if (data.user) {
          secureLocalStorage.setItem('user', JSON.stringify(data.user));
        }

        // If wallet is needed globally
        if (data.walletAddress) {
          secureLocalStorage.setItem('walletAddress', data.walletAddress);
        }

        // Redirect to homepage or dashboard
        navigate("/");
      } else {
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      toast.error('Network error, please try again');
    } finally {
      setloaderVis(false);
    }
  };



  return (
    <>

      <ToastContainer position="top-right" autoClose={2000} />
      {loaderVis && <Loader></Loader>}

      <Pannel></Pannel>


      <section className={`${as.LoginContainer}`}   >

        <div className={`${as.greetBtnGroup} d-flex`}   >

          {/* Login Button  */}
          <button
            style={{
              borderBottom: borderState == "Login" ? ".18rem solid var(--redish)" : null,
              color: borderState == "Login" ? " var(--redish)" : null
            }} onClick={() => { setBorderState('Login'); navigate("/Login") }}
            className={`${as.LoginBtn} d-flex flex-column align-items-center`}  >

            <span><MdRocketLaunch></MdRocketLaunch></span>
            <span className='fw-bold' >Log in User</span>
          </button>


          {/* Register Button  */}
          <button
            style={{
              borderBottom: borderState == "Register" ? ".18rem solid var(--redish)" : null,
              color: borderState == "Register" ? " var(--redish)" : null

            }} onClick={() => { setBorderState('Register');; navigate("/Register") }} className={`${as.LoginBtn} d-flex flex-column align-items-center`}  >

            <span><IoMdRocket></IoMdRocket></span>
            <span className='fw-bold' >Register User</span>
          </button>

        </div>




        {/* user container  */}
        <form onSubmit={handleSubmit} className={`${as.UserContainer} mt-2`}   >



          {/* user id  */}
          {/* Password */}
          <label className={`${as.labeli}`} htmlFor='email'  >



            <i style={{ fontSize: "0.9rem" }} className="fi fi-ss-envelope"></i>
            <span className='ps-1'  >Email *</span>
          </label>

          {/* Password Container  */}
          <div className={`${as.PhoneContainer}`}  >
            <input className={`${as.PhoneNumberInput}`} name='email' type='email'
              value={formData.email}
              onChange={handleChange} placeholder='Enter email address' required
            />

          </div>



          {/* Password */}
          <label className={`${as.labeli} mt-3 d-flex`} htmlFor='password'  >


            <i style={{ fontSize: "1rem" }} className="fi fi-ss-lock" ></i>
            <span className='ps-1' style={{ paddingTop: "0.1rem" }} >Password *</span>
          </label>

          {/* Password Container  */}
          <div className={`${as.PhoneContainer}`}  >
            <input className={`${as.PhoneNumberInput}`} name='password' type={eyeSnatch === true ? "text" : "password"}
              value={formData.password}
              onChange={handleChange} placeholder=' Password' required autoComplete='true'
            />

            <div className={`${as.CountryCodeInputContainer}`}  >

              <span className={`${as.CountryCodeInput} d-flex align-items-center justify-content-center`} >
                {eyeSnatch === true ?
                  <i className="fi fi-ss-eye" onClick={() => setEyeSnatch(false)} ></i>
                  :
                  <i className="fi fi-ss-eye-crossed" onClick={() => setEyeSnatch(true)}  ></i>
                }

              </span>
            </div>
          </div>


          {/* remember password  */}
          <div className={`${as.formCony} d-flex align-items-center justify-content-start form-check mt-1 ps-0 mb-2`}>
            <input
              className="mb-1"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className={`${as.labelForm}   ${as.grayi} ps-2 form-check-label d-block mt-1`} htmlFor="flexCheckDefault">
              Remember Password
            </label>
          </div>


          {/* buttons  Send OTP */}
          <button type='submit' className={`${as.PenButton} mt-4`} style={{ width: "100%" }}  >
            Login
          </button>

        </form>

        <Navbar></Navbar>

      </section>
    </>
  )
}

export default Login