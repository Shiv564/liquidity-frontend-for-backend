import React, { useEffect, useState } from 'react'
import as from "./Account.module.css"
import { useNavigate } from 'react-router'
import Loader from '../Loader/Loader'
import { ToastContainer } from 'react-toastify'
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage'


const Account = () => {

    // At the top of your React component
    const icons = import.meta.glob('../../assets/Alpha/*.png', {
        eager: true,
        import: 'default',
    });

    const getIcon = (iconName) => {
        const path = `../../assets/Alpha/${iconName}.png`;
        const fallback = icons['../../assets/Alpha/bnb.png']; // ✅ fallback image
        return icons[path] || fallback;
    };





    const navigate = useNavigate();

    const [assets, setAssets] = useState([]);
    const [loaderVis, setloaderVis] = useState(false);

    useEffect(() => {
        const fetchAssets = async () => {
            setloaderVis(true);
            const token = secureLocalStorage.getItem('TnTrdx');

            try {
                const res = await fetch(Origin + '/api/assets', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });



                const data = await res.json();
                console.log(data, "=>>>");

                if (res.ok) {
                    setAssets(data);
                } else {
                    console.error('Error:', data.error);
                }
            } catch (err) {
                console.error('Fetch failed:', err);
            } finally {
                setloaderVis(false);
            }
        };

        fetchAssets();
    }, []);


    const formatAmount = (amount) => {
        return Number(amount) % 1 === 0
            ? Number(amount)
            : Number(amount).toFixed(5);
    };

    return (
        <>

            {loaderVis && <Loader></Loader>}
            <ToastContainer position="top-right" autoClose={2000} />


            <div className={as.AccountContainer}   >



                <div className={as.accountmanuel}  >
                    <span className={as.manule}  >

                    </span>
                    <span className={as.history} onClick={() => {
                        secureLocalStorage.clear(); // if you're using secureLocalStorage
                        navigate("/login");
                    }}  ><i className="fi fi-rs-sign-out-alt"></i></span>
                </div>
                <div className={as.walletslide}  >
                    <h4>Wallet Balance</h4>
                    <h1>  <span className={as.currency}  > $ </span>  100.00 </h1>
                    <div className={as.btnGroups}  >
                        <button className={as.btn1} onClick={() => navigate("/deposit/select_token")} > <i className="fi fi-rs-inbox-in"></i> Deposit</button>
                        <button className={as.btn2} onClick={() => navigate("/withdrawal")}    > <i className="fi fi-rs-inbox-out"  ></i> Withdrawal</button>
                    </div>
                </div>

                {/* /Account/Withdrawal */}

                <div className={as.walletbalancesheet}  >
                    <table>
                        <thead>
                            <tr>
                                <th>Tokens</th>
                                <th className='pe-0'>Amount</th>
                            </tr>
                        </thead>


                        {/* this is table coins body ÷ */}
                        <tbody className={as.overflowy}  >

                            {assets.map((item, idx) => (
                                <tr key={idx}>
                                    <td className={as.flexit}>
                                        <span className={as.iconcontainer}>
                                            <img className={as.rotaterit}
                                                src={getIcon(item.icon)} alt={item.icon} />
                                            <img className={as.rotaterit2} src={getIcon('b1')} alt="bg" />
                                        </span>
                                        <span className={as.titlecontainer}>{item.icon.toUpperCase()}</span>
                                    </td>
                                    <td className={as.quantity}>
                                        {formatAmount(item.amount)}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Account