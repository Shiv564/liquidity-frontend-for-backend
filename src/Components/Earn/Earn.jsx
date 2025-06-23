import React from 'react'
import as from "./Earn.module.css"
import { useNavigate } from 'react-router'

const Earn = () => {
    const navigate = useNavigate();
    return (
        <div className={as.EarnContianer}  >
            <h2>Earn Campaigns </h2>
            <hr></hr>

            <div className={as.EarnContianerwrapper}  >

                <div className={as.earnbar} onClick={() => navigate("/Earn/Invite")}  >
                    <div className={as.iconContainer}  >
                        {/* <i class="fi fi-rs-paper-plane-launch"></i> */}
                        {/* <i class="fi fi-rs-paper-plane"></i>  */}
                        {/* <i class="fi fi-rs-inbox-out"></i> */}
                        <i class="fi fi-rs-exchange-cryptocurrency"></i>
                    </div>
                    <div className={as.defContainer}  >
                        <p className={as.pop1} >Refer & Earn</p>
                        <p className={as.pop2} >Refer & Earn upto 300K $</p>
                    </div>
                </div>


                <div className={as.earnbar}   >
                    <div className={as.iconContainer}  >
                        {/* <i class="fi fi-rs-paper-plane-launch"></i> */}
                        {/* <i class="fi fi-rs-paper-plane"></i>  */}
                        {/* <i class="fi fi-rs-inbox-out"></i> */}
                        <i class="fi fi-rs-treasure-chest"></i>
                    </div>
                    <div className={as.defContainer}  >
                        <p className={as.pop1} >Airdrop</p>
                        <p className={as.pop2} >Daily check in (Every 12 hours)</p>
                    </div>
                </div>


            </div>
            {/* <i class="fi fi-sr-treasure-chest"></i> */}
            {/* <i class="fi fi-rr-face-tongue-money"></i> */}
        </div>
    )
}

export default Earn