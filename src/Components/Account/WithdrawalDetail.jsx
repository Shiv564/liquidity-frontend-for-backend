import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import as from "./DepositDetail.module.css";
import { toast, ToastContainer } from 'react-toastify';

const WithdrawalDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const withdrawal = location.state;

    useEffect(() => {
        if (!withdrawal) {
            navigate("/");
        }
    }, [withdrawal, navigate]);

    const formatDate = (isoDate) => {
        if (!isoDate) return "--";
        const date = new Date(isoDate);
        return date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied!");
        } catch (err) {
            console.error("Copy failed:", err);
            toast.error("Failed to copy");
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case "pending":
                return <i className="fi fi-rs-pending"></i>;
            case "success":
            case "approved":
                return <i className="fi fi-ss-check-circle"></i>;
            case "rejected":
            case "failed":
                return <i className="fi fi-ss-cross-circle"></i>;
            default:
                return null;
        }
    };

    if (!withdrawal) return null;

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />
            <div className={as.DepositDetailcontainer}>
                <h5>Withdrawal Details</h5>
                <hr />

                <p className={as.center}>-{withdrawal.amount} {withdrawal.icon?.toUpperCase()}</p>

                <p className={as.centerstatus}>
                    {getStatusIcon(withdrawal.status)}
                    <span className={`${as.pd} pb-1`}>{withdrawal.status}</span>
                </p>

                <p className={as.reasonwritter}>
                    {withdrawal.rejection_reason || "Crypto has arrived in your Infinix Miner Wallet."}
                </p>

                <hr />

                <div className={as.etailsrapper}>
                    <p className={as.deatilblock}>
                        <span className={as.child1}>Network</span>
                        <span className={as.child2}>
                            <span className={as.wrapperd}>BNB (BEP20)</span>
                        </span>
                    </p>

                    <p className={as.deatilblock}>
                        <span className={as.child1}>Withdraw to</span>
                        <span className={as.child2}>
                            <span className={as.wrapperd}>
                                {withdrawal.destination_address}{" "}
                                <i className="ps-2 fi fi-ss-clone" onClick={() => copyToClipboard(withdrawal.destination_address)}></i>
                            </span>
                        </span>
                    </p>

                    <p className={as.deatilblock}>
                        <span className={as.child1}>Created at</span>
                        <span className={as.child2}>
                            <span className={as.wrapperd}>{formatDate(withdrawal.created_at)}</span>
                        </span>
                    </p>

                    <p className={as.deatilblock}>
                        <span className={as.child1}>Processed at</span>
                        <span className={as.child2}>
                            <span className={as.wrapperd}>{formatDate(withdrawal.processed_at)}</span>
                        </span>
                    </p>

                    <p className={as.deatilblock}>
                        <span className={as.child1}>Fees</span>
                        <span className={as.child2}>
                            <span className={as.wrapperd}>{withdrawal.fee ?? 0}</span>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default WithdrawalDetail;
