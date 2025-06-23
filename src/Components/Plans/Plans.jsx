import React, { useState } from 'react'
import as from "./Plans.module.css"
// import b1 from "../../assets/bitcoin.png"
// import bnb from "../../assets/bnb.png"
// import dogecoin from "../../assets/dogecoin.png"
// import ethereum from "../../assets/ethereum.png"
// import hedera from "../../assets/hedera.png"
// import litecoin from "../../assets/litecoin.png"
// import polygon from "../../assets/polygon.png"
// import shiba from "../../assets/shiba-inu.png"
// import xrp from "../../assets/xrp.png"
// import solana from "../../assets/solana.png"
// import trx from "../../assets/trx.png"

// import { useNavigate } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'


const Plans = () => {
    const navigate = useNavigate();



    const [cancelSetup, setCancelSetup] = useState(false)
    // const navigate = useNavigate();
    return (
        <div className={as.PlansCotnainer}  >
            <p className='text-end p-0 m-0 pe-3 mb-3'><i onClick={() => navigate("/Plans/History")} className="fi fi-rs-time-past fs-5" style={{ color: "var(--stext)" }}></i></p>

            {/* <h2 className={`${as.rewuhead} mb-0 pb-0 `} >Buy Software </h2>

            <hr className={as.hrht} ></hr> */}

            <div className={as.planstog}  >
                {/* 1 */}
                {/* planWrapper */}
                <div className={`${as.planWrapper}  `}  >
                    <div className={as.header}  >
                        <div className={as.iconsgroup} >
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
                        <div className={as.icondetails}  >
                            <p>BNB-BTC-DOGE</p>
                            <p>
                                <span className={as.dodel} style={{ background: "var(--orange)" }} >Profit</span>
                                <span className={as.dodel} style={{ background: "var(--orange)" }} >Protected 3x</span>
                            </p>

                        </div>
                    </div>
                    <div className={as.description}  >
                        <ul>
                            <li>Software forever</li>
                            <li>24/7 Support</li>
                            <li>Search for memecoins on BNB</li>

                            <li>Scans over 300 million wallets per day</li>
                        </ul>
                        <button onClick={() => setCancelSetup(true)} className={as.buyBtn} style={{ background: "var(--orange)" }} ><i class="fi fi-rs-microchip-ai"></i> $ 99.00</button>
                    </div>
                </div>



                {/* 2 */}
                <div className={`${as.planWrapper} `}  >
                    <div className={as.header}  >
                        <div className={as.iconsgroup} >
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
                        <div className={as.icondetails}  >
                            <p>LITE-ETH-XRP</p>
                            <p>
                                <span className={as.dodel} style={{ background: "var(--redish)" }}  >Profit</span>
                                <span className={as.dodel} style={{ background: "var(--redish)" }} >Protected 5x</span>
                            </p>

                        </div>
                    </div>




                    <div className={as.description}  >
                        <ul>
                            <li>Software forever</li>
                            <li>24/7 Support</li>

                            <li>Scans over 400 million wallets per day</li>
                            <li>Search for memecoins on Ethereum</li>

                        </ul>
                        <button className={as.buyBtn} style={{ background: "var(--redish)" }}  ><i class="fi fi-rs-microchip-ai"></i> $ 249.00</button>
                    </div>
                </div>


                {/* 3 */}
                {/* 2 */}
                <div className={`${as.planWrapper} `}  >
                    <div className={as.header}  >
                        <div className={as.iconsgroup} >
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
                        <div className={as.icondetails}  >
                            <p>POL-SOL-SHIBA</p>
                            <p>
                                <span className={as.dodel} style={{ background: "var(--purple)" }} >HIgh Profit</span>
                                <span className={as.dodel} style={{ background: "var(--purple)" }} >Protected 12x</span>
                            </p>

                        </div>
                    </div>




                    <div className={as.description}  >
                        <ul>
                            <li>Software forever</li>
                            <li>Premium 24/7 Support</li>

                            <li>Scans over 500 million wallets per day</li>
                            <li>Better speed</li>
                            <li>Search for memecoins on Solana</li>
                            <li>System Airdrops</li>
                            <li>5% Dividend</li>
                        </ul>
                        <button className={as.buyBtn} style={{ background: "var(--purple)" }} ><i class="fi fi-rs-microchip-ai"></i> $ 499.00</button>
                    </div>
                </div>





                {/* 4 */}

                {/* 2 */}
                <div className={`${as.planWrapper} `}  >
                    <div className={as.header}  >
                        <div className={as.iconsgroup} >
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
                        <div className={as.icondetails}  >
                            <p>MULTICOIN</p>
                            <p>
                                <span className={as.dodel} style={{ background: "var(--shine)" }} >Very High Profit</span>
                                <span className={as.dodel} style={{ background: "var(--shine)" }} >Protected 30x</span>
                            </p>

                        </div>
                    </div>




                    <div className={as.description}  >
                        <ul>
                            <li>Software forever</li>
                            <li>Search for all coins</li>
                            <li>Search NFTs</li>
                            <li>Premium 24/7 Support</li>

                            <li>Scans over 700 million wallets per day</li>
                            <li>Fast speed</li>
                            <li>Search for memecoins on Solana and Tron</li>
                            <li>System Airdrops</li>
                            <li>20% Dividend</li>
                        </ul>
                        <button onClick={() => setCancelSetup(false)} className={as.buyBtn} style={{ background: "var(--shine)" }} ><i class="fi fi-rs-microchip-ai"></i> $ 999.00</button>
                    </div>
                </div>






            </div>



            {/* this is second part where wrapper is  */}
            {cancelSetup ?
                <div className={as.bigwrapper}  >
                    <h2>Software Purchase </h2>
                    <hr></hr>


                    <div className={as.planstog}  >
                        {/* 1 */}
                        {/* planWrapper */}
                        <div className={`${as.planWrapper}  `} style={{ border: "none" }}  >
                            <div className={as.header}  >
                                <div className={as.iconsgroup} >
                                    <span className={as.icon1}>
                                        <img src={bnb} alt="Icon 1" />
                                    </span>
                                    <span className={as.icon2}>
                                        <img src={b1} alt="Icon 2" />
                                    </span>
                                    <span className={as.icon3}>
                                        <img src={dogecoin} alt="Icon 3" />
                                    </span>
                                </div>
                                <div className={as.icondetails}  >
                                    <p style={{ letterSpacing: "1px" }}>BNB-BTC-DOGE</p>
                                    <p>
                                        <span className={as.dodel} style={{ background: "var(--orange)" }} >Bitcoin, BNB, Doge Coin Miner</span>
                                        {/* <span className={as.dodel} style={{ background: "var(--orange)" }} >Protected 3x</span> */}
                                    </p>

                                </div>
                            </div>



                            <div className={`${as.purchaseContainer} mt-3`} >
                                <label>Software Price (USDT)</label>
                                <input style={{ color: "var(--grayb)" }} readOnly placeholder='Software Price' value={99} ></input>



                                <label className='mt-3 '>Software Quantity</label>



                                <div className={`${as.PhoneContainer}`}  >
                                    <input className={`${as.PhoneNumberInput} mt-0 pt-0`}
                                        min="1"  // Ensures the value can't be less than 1
                                        step="1" // Ensures the value increments by 1
                                        name='Software quantity' type='number' placeholder='Software Price' value={1}
                                        required
                                    />

                                    <div className={`${as.CountryCodeInputContainer}`}  >
                                        {/* <span ></span> */}
                                        <span className={`${as.CountryCodeInput} d-flex align-items-center justify-content-center`} >
                                            +
                                        </span>
                                    </div>
                                </div>






                                <p className={`${as.availableBalance} mb-1 mt-4`}>Available Balance :
                                    <span className={as.boldit} > 0.00</span></p>
                                <div className={as.btnGroup} >
                                    <button className={`${as.billBTN} ${as.cancelBtn} mt-0 `} onClick={() => setCancelSetup(false)} >Cancel</button>
                                    <button className={`${as.billBTN} mt-0 `} onClick={() => navigate("/Plans/plan/12")} >BUY NOW</button>
                                </div>
                                <p></p>
                                <p className={as.msggticeker}  >Your balance is not sufficient to purchase this software. <Link to="/Deposit">Deposit Now ?</Link></p>



                                <p className={as.footerleg}  >INFINIX BLOCK MINER @2025</p>
                            </div>


                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Plans