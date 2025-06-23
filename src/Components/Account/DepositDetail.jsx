import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import as from "./DepositDetail.module.css";
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Loader/Loader';

const DepositDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // The deposit data passed via navigate
    const deposit = location.state;

    console.log(deposit, "=>>>");

    if (!deposit) {
        // If no deposit data was passed (user opened directly), redirect or show message
        return (
            <div className={as.DepositDetailcontainer}>
                <h2>No deposit data found</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return "--";
        const date = new Date(dateString);
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

    // You can customize the icons and classes based on deposit.status
    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case "pending":
                return <i className="fi fi-rs-pending"></i>;
            case "completed":
            case "success":
                return <i className="fi fi-ss-check-circle"></i>;
            case "failed":
            case "rejected":
                return <i className="fi fi-ss-cross-circle"></i>;
            default:
                return null;
        }
    };


    const copyToClipboard = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(deposit.txHash);
            } else {
                // Fallback method
                const textArea = document.createElement("textarea");
                textArea.value = deposit.txHash;
                textArea.style.position = "fixed";  // Avoid scrolling to bottom
                textArea.style.left = "-9999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                const successful = document.execCommand("copy");
                document.body.removeChild(textArea);

                if (!successful) throw new Error("Fallback copy failed");
            }
            toast.success("Address copied!");
        } catch (err) {
            toast.error("Failed to copy address");
            console.error("Copy failed:", err);
        }

    };


    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />
            <div className={as.DepositDetailcontainer}>
                <h5>Deposit Details</h5>
                <hr />

                {/* Amount and Token */}
                <p className={as.center}>
                    +{deposit.token_amount} {deposit.token?.toUpperCase()}
                </p>

                {/* Status with icon */}
                <p className={as.centerstatus}>
                    {getStatusIcon(deposit.status)}
                    <span className={`${as.pd} pb-1`}>{deposit.status}</span>
                </p>

                {/* Remarks or description */}
                <p className={as.reasonwritter}>
                    {deposit.remark || "No additional information available."}
                </p>

                {/* <hr /> */}

                {/* Details */}
                <div className={as.etailsrapper}>
                    <p className={as.deatilblock}>
                        <span className={as.child1}>Network</span>
                        <span className={`${as.child2}`}>
                            <span className={`${as.wrapperd}`}>BEP20</span>
                        </span>
                    </p>



                    <p className={as.deatilblock}>
                        <span className={as.child1}>Transaction ID</span>
                        <span className={`${as.child2}`}>
                            <span className={`${as.wrapperd}`}>
                                {deposit.txHash || "N/A"}{" "}
                                <i className="ps-2 fi fi-ss-clone"
                                    onClick={() => copyToClipboard()}
                                ></i>
                            </span>
                        </span>
                    </p>

                    <p className={as.deatilblock}>
                        <span className={as.child1}>Created at</span>
                        <span className={`${as.child2}`}>
                            <span className={`${as.wrapperd}`}>{formatDate(deposit.createdAt)}</span>
                        </span>
                    </p>


                    <p className={as.deatilblock}>
                        <span className={as.child1}>Reviewed at</span>
                        <span className={`${as.child2}`}>
                            <span className={`${as.wrapperd}`}>{formatDate(deposit.reviewed_at)}</span>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default DepositDetail;
