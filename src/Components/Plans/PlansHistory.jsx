import React from 'react'
import as from "../Account/DepositRequests.module.css"

import { useNavigate } from 'react-router'

const PlansHistory = () => {
    const navigate = useNavigate();
    return (
        <div className={as.DepositRequestscontianer}  >

            <h2>Plans History </h2>
            <hr></hr>

            <div className={as.requestsContainer}  >




                {/* request   */}
                <div className={`${as.requesthere} fw-bold`} onClick={() => navigate("/Plans/plan/12")}  >

                    <div className={as.child1}  >
                        <p className={as.childa}  >100 USDT </p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc} style={{ color: "var(--green)" }}  >PURCHASED</p>
                        <p className={as.childd}   >BNB-BTC-DOGE MINER</p>
                    </div>

                </div>



                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>



                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>




                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>





                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>



                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>



                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >USDT (SOL)</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >+100</p>
                        <p className={as.childd}  >Pending</p>
                    </div>

                </div>










            </div>


        </div>
    )
}

export default PlansHistory