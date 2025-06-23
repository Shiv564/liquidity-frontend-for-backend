import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import as from './Withdraw.module.css';
import { toast, ToastContainer } from 'react-toastify';
import secureLocalStorage from 'react-secure-storage';
import Origin from '../../Constants';
import Loader from '../Loader/Loader';

const Withdraw = () => {
    const navigate = useNavigate();
    const [assets, setAssets] = useState([]);
    const [selectedToken, setSelectedToken] = useState('-- Select Token -- ');
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [AvailableAsset, setAvailableAsset] = useState(0);
    const [withdrawAmount, setwithdrawAmount] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [txPassword, setTxPassword] = useState('');
    const [loaderVis, setloaderVis] = useState(false);

    useEffect(() => {
        const fetchAssets = async () => {
            setloaderVis(true);
            const token = secureLocalStorage.getItem('TnTrdx');

            try {
                const res = await fetch(`${Origin}/api/assets`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const data = await res.json();
                if (res.ok) {
                    setAssets(data);
                } else {
                    toast.error(data.message || 'Failed to fetch assets.');
                }
            } catch (err) {
                console.error('Fetch failed:', err);
                toast.error('Something went wrong.');
            } finally {
                setloaderVis(false);
            }
        };

        fetchAssets();
    }, []);

    const handleWithdrawSubmit = async (e) => {
        e.preventDefault();
        if (parseFloat(withdrawAmount) < 1) {
            toast.error('Available balance is less than 1.');
            return;
        }

        if (!selectedToken || !withdrawAmount || !destinationAddress || !txPassword) {
            toast.error('Please fill all required fields.');
            return;
        }

        setloaderVis(true);
        const token = secureLocalStorage.getItem('TnTrdx');

        try {
            const res = await fetch(`${Origin}/api/withdraw/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    token: selectedToken,
                    amount: withdrawAmount,
                    destination_address: destinationAddress,
                    transaction_password: txPassword,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message, " you can check it in withdraw history " || 'Withdrawal submitted!');
                setSelectedToken('-- Select Token -- ');
                setwithdrawAmount('');
                setDestinationAddress('');
                setTxPassword('');
                setAvailableAsset(0);

                // Navigate after 2 seconds
                setTimeout(() => {
                    navigate('/');
                }, 2000);


            } else {
                toast.error(data.message || 'Submission failed.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            toast.error('Network error. Please try again.');
        } finally {
            setloaderVis(false);
        }
    };

    return (
        <>
            {loaderVis && <Loader />}
            <ToastContainer position="top-right" autoClose={2000} />

            <div className={as.Depositcontianer}>
                <div className={as.DepositOverlook}>
                    {/* <h5 className={as.rewuhead}>Withdraw Request</h5> */}
                    {/* <hr /> */}
                    <p className="text-end p-0 m-0 pe-3">
                        <i
                            onClick={() => navigate('/Withdrawal/request')}
                            className="fi fi-rs-time-past"
                            style={{ fontWeight: "700", color: 'var(--fos)', cursor: 'pointer' }}
                        ></i>
                    </p>

                    <form className={as.epositFrom} onSubmit={handleWithdrawSubmit}>
                        <label className={`${as.lab1} mt-0`}>Selected Network</label>
                        <input
                            placeholder="BEP20"
                            value="BNB (BEP20)"
                            readOnly
                            className={as.inputblalance}
                            disabled
                        />

                        <label className={`${as.expand} mt-3`} htmlFor="asset">Select Asset</label>
                        <div className={as.selectWrapper}>
                            <select
                                id="asset"
                                value={selectedToken}
                                onChange={(e) => {
                                    const selected = JSON.parse(e.target.value);
                                    setSelectedToken(selected.token);
                                    setSelectedAmount(selected.amount);
                                    setAvailableAsset(selected.amount);
                                    setwithdrawAmount('');
                                }}
                            >
                                <option value="">{selectedToken}</option>
                                {assets.map((asset, index) => (
                                    <option key={index} value={JSON.stringify({ token: asset.icon, amount: asset.amount })}>
                                        {asset.amount} {asset.icon}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <label className={`${as.lab1} mt-3`}>Withdrawal Amount *</label>
                        <input
                            placeholder="Enter Amount"
                            className={as.inputblalance}
                            type="number"
                            min="0"
                            step="any" // ✅ allows decimal numbers
                            value={withdrawAmount}
                            onChange={(e) => setwithdrawAmount(e.target.value)}
                        />
                        <p className={as.balancetip}>Available: <span>{AvailableAsset || "0.00000"}</span></p>

                        <label className={`${as.lab1} mt-3`}>Withdrawal to *</label>
                        <input
                            placeholder="Wallet Address"
                            name='walletaddress'
                            className={as.inputblalance}
                            value={destinationAddress}
                            onChange={(e) => setDestinationAddress(e.target.value)}
                        />

                        <label className={`${as.lab1} mt-3`}>Transaction Password *</label>
                        <input
                            type="password"
                            placeholder="Enter Transaction Password"
                            name='transactionpassword'
                            className={as.inputblalance}
                            value={txPassword}
                            onChange={(e) => setTxPassword(e.target.value)}
                        />

                        <button
                            type="submit"
                            className={as.depositSubmit}
                            disabled={parseFloat(withdrawAmount) < 1}
                        >
                            {loaderVis ? 'Processing...' : 'Withdraw'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Withdraw;
