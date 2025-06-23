import React, { useState } from 'react';
import as from "./Inviteearn.module.css"

import { Link, useNavigate } from 'react-router-dom'


const InviteEarn = () => {




    const navigate = useNavigate();

    const [selectedGroup, setSelectedGroup] = useState(1);

    const handleClick = (group) => {
        setSelectedGroup(group);
    };


    return (
        <div className={as.Minecontianer}   >
            <div className={as.headerPl}  >
                <div className={as.minerbtn} >Invite</div>
                <div className={as.dashboardBtn} onClick={() => navigate("/Earn/Referrals")} >REFERRALS</div>
            </div>
            <hr></hr>

            <div className={as.overflowy} >

                <h1 className={`${as.InviteEarnheading} mt-4`}  >Invite Friends</h1>
                <h1 className={as.InviteEarnheading}  >Earn Crypto Together</h1>
                <p className={`${as.invitep} mt-2`} >Earn upto 5% commission when your friend joins</p>
                <p className={as.invitep} >Infinix and Provide atleast $5 Liquidity</p>


                <p className={`${as.inviteboard1} mt-5 fw-bold`}  >Invite via</p>
                <p className={`${as.inviteboard2} `}  >
                    <span className={as.child1}  >Referral Code</span>
                    <span className={`${as.child2} `}  >474911296 <i className="fi fi-ss-copy ms-1"></i></span>
                </p>


                <p className={`${as.inviteboard2} `}  >
                    <span className={as.child1} style={{ letterSpacing: "0.6px" }} >Referral Link</span>
                    <span className={`${as.child2} `}  >
                        {("https://www.Infinix.com/free-icon-font/copy_3914074?page=1&position=6&term=copy&origin=search&related_id=3914074 ").slice(0, 14)}...
                        {("https://www.flaticon.com/free-icon-font/copy_3914074?page=1&position=6&term=copy&origin=search&related_id=3914074 ").slice(0, 5)}
                        <i className="fi fi-ss-copy ms-1"></i></span>
                </p>




                <p className={`${as.inviteboard1} mt-5 fw-bold`}  >Share to</p>

                <div className={as.sharetobox}  >

                    <div className={`${as.social1}`}   >
                        <span className={as.socialIcon}  ><i class="fi fi-brands-whatsapp"></i></span>
                        <span className={as.socialName}  >Whatsapp</span>
                    </div>

                    <div className={`${as.social1}`}   >
                        <span className={as.socialIcon}  ><i class="fi fi-brands-instagram"></i></span>
                        <span className={as.socialName}  >Instagram</span>
                    </div>


                    <div className={`${as.social1}`}   >
                        <span className={as.socialIcon}  ><i class="fi fi-brands-telegram"></i></span>
                        <span className={as.socialName}  >Telegram</span>
                    </div>


                    <div className={`${as.social1}`}   >
                        <span className={as.socialIcon}  ><i class="fi fi-brands-facebook"></i></span>
                        <span className={as.socialName}  >Facebook</span>
                    </div>


                    <div className={`${as.social1}`}   >
                        <span className={as.socialIcon}  ><i class="fi fi-brands-twitter-alt"></i></span>
                        <span className={as.socialName}  >Twitter</span>
                    </div>


                </div>




            </div>



        </div>
    )
}

export default InviteEarn