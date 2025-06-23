import React, { useState } from 'react';
import as from "./Referrralsearn.module.css"

import { Link, useNavigate } from 'react-router-dom'


const Referrralsearn = () => {




    const navigate = useNavigate();

    const [selectedGroup, setSelectedGroup] = useState(1);

    const handleClick = (group) => {
        setSelectedGroup(group);
    };


    return (
        <div className={as.Minecontianer}   >
            <div className={as.headerPl}  >
                <div className={as.minerbtn} onClick={() => navigate("/Earn/Invite")} >Invite</div>
                <div className={as.dashboardBtn}    >REFERRALS</div>
            </div>
            <hr></hr>

            <div className={as.requestsContainer}  >






                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >1 Miner  Bought</p>
                        <p className={as.childd}  >20 $ Earned</p>
                    </div>

                </div>


                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >1 Miner  Bought</p>
                        <p className={as.childd}  >20 $ Earned</p>
                    </div>

                </div>


                {/* request   */}
                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >1 Miner  Bought</p>
                        <p className={as.childd}  >20 $ Earned</p>
                    </div>

                </div>



                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >No Miner  Bought</p>
                        <p className={as.childd}  >0 $ Earned</p>
                    </div>

                </div>




                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >No Miner  Bought</p>
                        <p className={as.childd}  >0 $ Earned</p>
                    </div>

                </div>



                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >No Miner  Bought</p>
                        <p className={as.childd}  >0 $ Earned</p>
                    </div>

                </div>



                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >No Miner  Bought</p>
                        <p className={as.childd}  >0 $ Earned</p>
                    </div>

                </div>



                <div className={as.requesthere} >

                    <div className={as.child1}  >
                        <p className={as.childa}  >shiv..@gmail.com</p>
                        <p className={as.childb}  >2024-12-18 10:34:48</p>
                    </div>
                    <div className={as.child2}  >
                        <p className={as.childc}  >No Miner  Bought</p>
                        <p className={as.childd}  >0 $ Earned</p>
                    </div>

                </div>












            </div>





        </div>
    )
}

export default Referrralsearn