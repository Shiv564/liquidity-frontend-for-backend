import React from 'react'
import as from "../Account/DepositDetail.module.css"
import { useNavigate } from 'react-router'

const PlanBought = () => {
    const navigate = useNavigate()
    return (
        <div className={as.DepositDetailcontainer}  >
            <h2>Purchase  Details </h2>
            <hr></hr>


            {/* details  */}

            <p className={as.center}  >- 100 USDT</p>
            <p className={as.centerstatus}  >

                <i class="fi fi-ss-check-circle"></i>
                {/* <i class="fi fi-ss-cross-circle"></i> */}
                {/* <i class="fi fi-ss-fail"></i> */}
                {/* <i class="fi fi-rs-pending"></i> */}
                <span className={`${as.pd} pb-1`} >Purchase Successful</span>
            </p>


            <p className={as.reasonwritter} >
                {/* Crypto has arrived in your Infinix Miner Wallet. */}
                You have successfully bought the BTC-BNB-DOGE MINER.
            </p>
            <hr></hr>

            <div className={as.etailsrapper}  >
                {/* 1 */}
                <p className={as.deatilblock}  >
                    <span className={as.child1}  >Price</span>
                    <span className={`${as.child2} `}  >
                        <span className={`${as.wrapperd} `}  >99 $</span>
                    </span>
                </p>

                {/* 2 */}
                <p className={as.deatilblock}  >
                    <span className={as.child1}  >Quantity</span>
                    <span className={`${as.child2} `}  >
                        <span className={`${as.wrapperd} `}  >1 </span>
                    </span>
                </p>

                <p className={as.deatilblock}  >
                    <span className={as.child1}  >Software</span>
                    <span className={`${as.child2} `}  >
                        <span className={`${as.wrapperd} `}  >BTC-BNB-DOGE MINER</span>
                    </span>
                </p>


                <p className={as.deatilblock}  >
                    <span className={as.child1}  >Order ID</span>
                    <span className={`${as.child2} `}  >
                        <span className={`${as.wrapperd} `}  >4qPnY8mpfrCJLucAMapHYyWY2wQoszWMmQNtsadkUdLnrFrZ <i className=" ps-2 fi fi-ss-clone"></i></span>
                    </span>
                </p>

                <p className={as.deatilblock}  >
                    <span className={as.child1}  >Date</span>
                    <span className={`${as.child2} `}  >
                        <span className={`${as.wrapperd} `}  >2024-12-18 10:36:48</span>
                    </span>
                </p>


                <button className={as.palletbtn} onClick={() => navigate("/Mine")} >START MINING</button>

            </div>

        </div>
    )
}

export default PlanBought