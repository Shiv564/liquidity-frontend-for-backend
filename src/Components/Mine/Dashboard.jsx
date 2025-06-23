import React from 'react'
import as from "./Mine.module.css"
import { Link, useNavigate } from 'react-router-dom'



const Dashboard = () => {
    const navigate = useNavigate();




    return (
        <div className={as.Minecontianer}   >
            <div className={as.headerPl}  >
                <div className={as.minerbtn} style={{ backgroundColor: "transparent" }} onClick={() => navigate("/Mine")} >Miner</div>
                <div className={as.dashboardBtn} style={{ backgroundColor: "var(--bgtheme)", color: "var(--light)" }}  >Dashboard</div>
            </div>
            <hr></hr>

            <div className={as.overflowy} >


                <h4 className={as.sopi}  >Total Found</h4>
                <h1 className={as.sopi2}>  <span className={as.currency}  > $ </span>  100.00 </h1>

                {/* <div className={as.btnGroups}  >
                    <button className={as.btn1} onClick={() => navigate("/Deposit")} ></button>
                    <button className={as.btn2} onClick={() => navigate("/Withdrawal")}    > <i className="fi fi-rs-inbox-out"  ></i> Withdrawal</button>
                </div> */}


                <p className={as.topbeam}  ></p>


                {/* found plate  */}
                <p className={`${as.chep} mt-4  mb-0`} style={{ marginTop: "" }} ><span className="" >Found</span> : <span className='fw-bolder fs-5'>0</span></p>
                <div className={`${as.checkedPlate2} mt-0`} style={{ height: "40%" }} >
                    You haven't found any wallet yet . . .
                </div>

                <div className={as.Pannelcontaineri}  >INFINIX BLOCK MINER @2025</div>


            </div>


        </div>
    )
}

export default Dashboard