import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import as from './Deposit.module.css';
import Loader from '../Loader/Loader';
import secureLocalStorage from 'react-secure-storage';
import Origin from '../../Constants';
import { toast, ToastContainer } from 'react-toastify';

const DepositRaise = () => {
    const { token } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    // const [crypto, setCrypto] = useState(token);
    const [amount, setAmount] = useState('');
    const [txid, setTxid] = useState('');






    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        if (!token || !amount || !txid) {
            toast.error("Please fill in all fields.");
            return;
        }

        const userToken = secureLocalStorage.getItem('TnTrdx');

        try {
            const res = await fetch(`${Origin}/api/deposit`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    token_amount: parseFloat(amount),
                    txHash: txid.trim(),

                })

            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message || "Deposit submitted!");
                setAmount('');
                setTxid('');

                setTimeout(() => {
                    navigate("/");
                }, 2500); // 4 seconds
            }
            else {
                toast.error(data?.message || "Deposit failed");
            }

        } catch (error) {
            console.error("Deposit Error:", error);
            toast.error("Something went wrong");
        }
        finally {
            setLoading(false);

        }
    };


    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />

            {loading && <Loader />}
            <div className={as.Depositcontianer}>
                <div className={as.DepositOverlook}>
                    <form className={as.epositFrom} onSubmit={handleSubmit}>

                        {/* Crypto Type */}
                        <label htmlFor="crypto" className={`${as.lab1} mt-3`}>
                            Crypto *
                        </label>
                        <input
                            id="crypto"
                            type="text"
                            value={token ? token.toUpperCase() : ""}
                            readOnly
                            className={as.inputblalance}
                            required
                        />

                        {/* Deposit Amount */}
                        <label htmlFor="amount" className={`${as.lab1} mt-3`}>
                            Deposit Amount *
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter Deposit Amount (USDT)"
                            className={as.inputblalance}
                            required
                        />

                        {/* Transaction Hash */}
                        <label htmlFor="txid" className={`${as.lab1} mt-3`}>
                            Transaction Hash or TxID *
                        </label>
                        <input
                            id="txid"
                            type="text"
                            value={txid}
                            onChange={(e) => setTxid(e.target.value)}
                            placeholder="Enter Transaction Hash or TxID"
                            className={as.inputblalance}
                            required
                        />
                        <Link
                            to="https://www.binance.com/en/support/faq/what-is-a-txid-transaction-id-8e6a23391d0645b2a9089c54d43f8fbc"
                            className={as.quie}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            What is Transaction Hash or Transaction TxID?
                        </Link>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={as.depositSubmit}
                            aria-label="Submit deposit details"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>

    );
};

export default DepositRaise;
