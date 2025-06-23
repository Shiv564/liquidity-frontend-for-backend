import React, { useState } from 'react'
import as from "./Layout.module.css"
import { Outlet, useNavigate } from 'react-router'
import Sticker from './Sticker';



const Layout = () => {
    const navigate = useNavigate();
    const [LaoStatus, setLaoStatus] = useState("Account")

    return (
        <div className={`${as.layoutContainer}`}   >

            <div className={as.child1} >
                <Sticker></Sticker>
                <Outlet></Outlet>
            </div>





            {/* this is fixed pallet for icons  */}
            <div className={as.child2} >

                <div className={`${as.childa}   ${LaoStatus == "Guide" ? `${as.coloritgrade}` : `${as.coloritwhite}`} `} onClick={() => { setLaoStatus("Guide") }}  >
                    <span className={`${as.iconSlot} ${as.guider}`}  ><i className="fi fi-rs-book-spells"></i></span>
                    <span className={as.iconnameSlot}  >Guide</span>
                </div>


                <div className={`${as.childb}  ${LaoStatus == "Earn" ? `${as.coloritgrade}` : `${as.coloritwhite}`} `} onClick={() => { navigate("/Earn/Invite"); setLaoStatus("Earn") }}    >
                    <span className={as.iconSlot}  >
                        {/* <i className="fi fi-rs-stop-circle"></i> */}
                        <i className="fi fi-rs-user-add"></i>


                    </span>
                    <span className={as.iconnameSlot}  >Invite</span>
                </div>



                <div className={`${as.childd}  ${LaoStatus == "Mine" ? `${as.coloritgrade}` : `${as.coloritwhite}`} `} onClick={() => { navigate("/Mine"); setLaoStatus("Mine") }}     >
                    <span className={`${as.iconSlot} `}  >
                        <i
                            className="fi fi-ss-solar-system"></i>
                    </span>
                    <span className={`${as.iconnameSlot} `}  >Bot</span>
                </div>


                <div className={`${as.childd}  ${LaoStatus == "Plans" ? `${as.coloritgrade}` : `${as.coloritwhite}`} `} onClick={() => { navigate("/Plans"); setLaoStatus("Plans") }}   >
                    <span className={`${as.iconSlot}`}  >
                        <i className="fi fi-rs-stop-circle"></i>

                    </span>
                    <span className={`${as.iconnameSlot} `}
                    >Earn</span>
                </div>





                <div className={`${as.childe}  ${LaoStatus == "Account" ? `${as.coloritgrade}` : `${as.coloritwhite}`} `} onClick={() => { navigate("/"); setLaoStatus("Account") }}   >
                    <span className={`${as.iconSlot} `}  >
                        <i className="fi fi-rs-user-skill-gear"></i>
                    </span>
                    <span className={`${as.iconnameSlot} `}  >Assets</span>
                </div>


            </div>








        </div>
    )
}

export default Layout