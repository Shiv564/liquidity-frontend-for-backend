import React, { useEffect, useState } from 'react'
import as from "./Register.module.css"
import { IoMdRocket } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import Origin from '../../Constants';
import Loader from '../Loader/Loader';
import secureLocalStorage from 'react-secure-storage';
import Pannel from '../Navbar/Pannel';
import { Link } from 'react-router-dom';

const Register = () => {



  const [formdata, setFormData] = useState({
    email: '',
    password: '',
    transactionPassword: '',
    inviteCode: ''
  });
  const [loaderVis, setloaderVis] = useState(false);

  const [borderState, setBorderState] = useState('Register');
  const [eyeSnatch, setEyeSnatch] = useState(false);
  const [eyeSnatch2, setEyeSnatch2] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  // this pannel is pro one 


  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rememberPassword) {
      setWalletAddress(null);
      setloaderVis(true);

      try {
        const res = await fetch(Origin+'/api/auth/Register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formdata),
        });

        const data = await res.json();
        console.warn(data);
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
          toast.error(data.error || 'Registration failed');
        }
      } catch (error) {
        toast.error('Network error, please try again');
      } finally {
        setloaderVis(false);
      }
    }
    else {
      toast.error("Accept terms and condition");

    }
  };



  return (
    <>
      {loaderVis && <Loader></Loader>}


      <ToastContainer position="top-right" autoClose={2000} />
      <Pannel></Pannel>

      {/* set of top nav buttons  */}
      <section className={`${as.RegisterContainer}`}   >

        <div className={`${as.greetBtnGroup} d-flex`}   >

          {/* Login Button  */}
          <button
            style={{
              borderBottom: borderState == "Login" ? ".18rem solid var(--redish)" : null,
              color: borderState == "Login" ? " var(--redish)" : null
            }} onClick={() => { setBorderState('Login'); navigate("/Login") }}
            className={`${as.LoginBtn} d-flex flex-column align-items-center`}  >
            <span><IoMdRocket></IoMdRocket></span>
            <span className='fw-bold'>Log in User</span>
          </button>


          {/* nav btn pack  */}
          <button
            style={{
              borderBottom: borderState == "Register" ? ".18rem solid var(--redish)" : null,
              color: borderState == "Register" ? " var(--redish)" : null
            }} onClick={() => { setBorderState('Register'); navigate("/Register") }}
            className={`${as.LoginBtn} d-flex flex-column align-items-center`}  >
            <span><MdRocketLaunch></MdRocketLaunch></span>
            <span className='fw-bold' >Register User</span>
          </button>

        </div>



        {/* form   */}

        <form onSubmit={handleSubmit} className={`${as.UserContainer}  mt-2`}   >

          {/* email  */}
          <label className='mt-3 d-flex' htmlFor='email'  >

            <i style={{ fontSize: "0.86rem" }} className="fi fi-ss-envelope"></i>
            <span style={{ fontSize: "0.86rem" }} className='ps-1'  >Email *</span>
          </label>

          <div className={`${as.PhoneContainer}`}  >
            <input className={`${as.PhoneNumberInput}`} name='email' type='email'
              value={formdata.email} onChange={handleChange} placeholder='Enter email address'
              required />
          </div>


          {/* Password */}
          <label className='mt-3 d-flex ' htmlFor='password'  >
            <i className="fi fi-ss-lock "  ></i>
            <span className='ps-1  ' >Password *</span>
          </label>

          <div className={`${as.PhoneContainer}`}  >
            <input className={`${as.PhoneNumberInput}`} name='password' type={eyeSnatch === true ? "text" : "password"}
              value={formdata.password} onChange={handleChange} placeholder='Password' required
            />

            <div className={`${as.CountryCodeInputContainer}`}  >
              {/* <span ></span> */}
              <span className={`${as.CountryCodeInput} d-flex align-items-center justify-content-center`} >
                {eyeSnatch === true ?
                  <i className="fi fi-ss-eye" onClick={() => setEyeSnatch(false)} ></i>
                  : <i className="fi fi-ss-eye-crossed" onClick={() => setEyeSnatch(true)}  ></i>
                }
              </span>
            </div>
          </div>


          {/* Transaction  Password */}
          <label className='mt-3 d-flex ' htmlFor='transactionPassword'  >
            <i className="fi fi-ss-lock "  ></i>
            <span className='ps-1  ' >Transaction Password *</span>
          </label>

          <div className={`${as.PhoneContainer}`}  >
            <input className={`${as.PhoneNumberInput}`} name='transactionPassword' type={eyeSnatch2 === true ? "text" : "password"}
              value={formdata.transactionPassword} onChange={handleChange} placeholder="Transaction Password" required
            />

            <div className={`${as.CountryCodeInputContainer}`}  >
              {/* <span ></span> */}
              <span className={`${as.CountryCodeInput} d-flex align-items-center justify-content-center`} >
                {eyeSnatch2 === true ?
                  <i className="fi fi-ss-eye" onClick={() => setEyeSnatch2(false)} ></i>
                  : <i className="fi fi-ss-eye-crossed" onClick={() => setEyeSnatch2(true)}  ></i>
                }
              </span>
            </div>
          </div>

          {/* Invite code. */}
          <label className='mt-3 d-flex' htmlFor='inviteCode' >
            <i className="fi fi-ss-refer-arrow"  ></i>
            <span className='ps-2 '>Invite Code </span>
          </label>
          <input name='inviteCode' className={`${as.inpuytioo}`} type='text'
            value={formdata.inviteCode} onChange={handleChange} placeholder='Please enter the Invite code'  ></input>



          <div className={`${as.formCony} d-flex align-items-center justify-content-start form-check mt-3 ps-0 mb-2`}>
            <input
              className="mb-1"
              type="checkbox"
              id="flexCheckDefault"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(e.target.checked)}
            />
            <label className={`${as.labelForm}   ${as.grayi} ps-2 form-check-label d-block`} htmlFor="flexCheckDefault">
              I understand and accept the <Link className={`${as.grayi} text-secondary`}  >Terms of Use and Privacy Policy</Link>
            </label>
          </div>

          {/* buttons  Send OTP */}
          <button


            type='submit'
            // type='submit'
            className={`${as.PenButton} mt-5`} style={{ width: "100%" }}  >
            Register
          </button>




        </form>




      </section>
    </>
  )
}

export default Register