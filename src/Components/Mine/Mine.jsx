import React, { useState } from 'react';
import as from "./Mine.module.css"
// 
import { Link, useNavigate } from 'react-router-dom'


const Mine = () => {
    const navigate = useNavigate();

    const [selectedGroup, setSelectedGroup] = useState(1);

    const handleClick = (group) => {
        setSelectedGroup(group);
    };


    return (
        <div className={as.Minecontianer}   >
            <div className={as.headerPl}  >
                <div className={as.minerbtn} >Miner</div>
                <div className={as.dashboardBtn} onClick={() => navigate("/Dashboard")} >Dashboard</div>
            </div>
            <hr></hr>

            <div className={as.overflowy} >



                {/* this is crypto bar  */}
                <div className={as.cryptoBar}  >


                    {/* icons grounps  */}
                    <div
                        className={`${as.iconsgroup} ${selectedGroup === 1 ? as.selected : ''}`}
                        onClick={() => handleClick(1)}
                    >
                        {/* <span className={as.icon1}>
                            <img src={bnb} alt="Icon 1" />
                        </span>
                        <span className={as.icon2}>
                            <img src={b1} alt="Icon 2" />
                        </span>
                        <span className={as.icon3}>
                            <img src={dogecoin} alt="Icon 3" />
                        </span> */}
                    </div>


                    {/* icons grounps  */}
                    <div
                        className={`${as.iconsgroup} ${selectedGroup === 2 ? as.selected : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        {/* <span className={as.icon1}>
                            <img src={litecoin} alt="Icon 1" />
                        </span>
                        <span className={as.icon2}>
                            <img src={ethereum} alt="Icon 2" />
                        </span>
                        <span className={as.icon3}>
                            <img className={as.wrapper} src={xrp} alt="Icon 3" />
                        </span> */}
                    </div>


                    {/* icons group 3 */}
                    <div
                        className={`${as.iconsgroup} ${selectedGroup === 3 ? as.selected : ''}`}
                        onClick={() => handleClick(3)}
                    >
                        {/* <span className={as.icon1}>
                            <img src={polygon} alt="Icon 1" />
                        </span>
                        <span className={as.icon2}>
                            <img src={solana} alt="Icon 2" />
                        </span>
                        <span className={as.icon3}>
                            <img src={shiba} alt="Icon 3" />
                        </span> */}
                    </div>


                    {/* icons group 4 */}
                    <div
                        className={`${as.iconsgroup} ${selectedGroup === 4 ? as.selected : ''}`}
                        onClick={() => handleClick(4)}
                    >
                        {/* <span className={as.icon1}>
                            <img src={hedera} alt="Icon 1" />
                        </span>
                        <span className={as.icon2}>
                            <img src={solana} alt="Icon 2" />
                        </span>
                        <span className={as.icon3}>
                            <img src={trx} alt="Icon 3" />
                        </span> */}
                    </div>



                </div>



                {/* checked plate  */}
                <p className={`${as.chep} mt-3 mb-0`} ><span className="" >Checked</span> : <span className='fw-bolder fs-5'>0</span></p>
                <div className={`${as.checkedPlate} mt-0  `}   >
                    There will be logs here . . .
                </div>


                {/* found plate  */}
                <p className={`${as.chep} mt-3  mb-0`} ><span className="" >Found</span> : <span className='fw-bolder fs-5'>0</span></p>
                <div className={`${as.checkedPlate2} mt-0`}  >
                    You haven't found any wallet yet . . .
                </div>

                <div className={as.btnGroup} >
                    <button className={as.btn1} >Start Search</button>
                    <button className={as.btn2} >Stop Search</button>
                </div>

                <p className={as.msgtickker} >
                    You don't have this software access please purchase and start mining.
                    <Link to="/Plans" className='ps-2'>Purchase Software</Link>
                </p>

            </div>



        </div>
    )
}

export default Mine