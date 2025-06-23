import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import as from './Deposit.module.css';
import { useNavigate, useParams } from 'react-router';
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage';
import Loader from '../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import DepositRaise from './DepositRaise';

import { Stepper, Step } from 'react-form-stepper';

const Deposit = () => {
    const [step, setStep] = useState(0);

    const { token } = useParams();
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const icons = import.meta.glob('../../assets/Alpha/*.png', {
        eager: true,
        import: 'default',
    });

    const getIcon = (iconName) => {
        const path = `../../assets/Alpha/${iconName}.png`;
        const fallback = icons['../../assets/Alpha/bnb.png'];
        return icons[path] || fallback;
    };

    useEffect(() => {
        const fetchAddress = async () => {
            setLoading(true);
            const userToken = secureLocalStorage.getItem('TnTrdx');

            try {
                const res = await fetch(Origin + '/api/deposit/address', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await res.json();
                if (res.ok && data.walletAddress) {
                    setWalletAddress(data.walletAddress);
                } else {
                    toast.error(data?.error || "Failed to fetch address");
                }
            } catch (err) {
                console.error('Error fetching address:', err);
                toast.error("Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchAddress();
    }, []);

    const copyToClipboard = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(walletAddress);
            } else {
                // Fallback method
                const textArea = document.createElement("textarea");
                textArea.value = walletAddress;
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
            <Stepper
                style={{ width: "100%", padding: "4rem 0 0 0" }}
                activeStep={step}
            >
                <Step
                    onClick={() => setStep(0)}
                    label={<p
                        onClick={() => setStep(0)}
                        style={{ color: step === 0 ? 'white' : 'var(--stext)' }}>Receive Address</p>}
                    style={{
                        border: step === 0 ? "1px solid var(--fos)" : "1px solid var(--black)",
                        background: "transparent",
                        color: step === 0 ? "white" : "var(--stext)",
                    }}
                />
                <Step
                    label={<p
                        onClick={() => setStep(1)}

                        style={{ color: step === 1 ? 'white' : 'var(--stext)' }}>Submit Details</p>}
                    onClick={() => setStep(1)}

                    style={{
                        border: step === 1 ? "1px solid var(--fos)" : "1px solid var(--black)",

                        background: "transparent",
                        color: step === 1 ? "white" : "var(--stext)",
                    }}
                />
            </Stepper>

            <div className={as.Depositcontianer}>
                <ToastContainer position="top-right" autoClose={2000} />
                {loading && <Loader />}
                {!loading && (
                    <div className={as.instructionSet}>
                        <hr />

                        {
                            step === 0 ?


                                <div className={as.receive_palate}>
                                    <div className={as.img_holder}>
                                        <img className={as.img_main} src={getIcon(token)} alt={token} />
                                        <img className={as.chain_image} src={getIcon("b1")} alt={token} />
                                    </div>
                                    <h4>{token || "BNB"}</h4>
                                    <p>BNB Smart Chain</p>
                                    <div className={as.qrcode_container}>
                                        <QRCode
                                            size={256}
                                            // bgColor="var(--redish)"
                                            style={{ height: "100%", maxWidth: "100%", aspectRatio: "1/1", padding: "1rem", borderRadius: "1rem", border: "1px solid var(--black)" }}
                                            value={walletAddress || ""}
                                            title="Deposit Wallet Address"
                                            aria-label="QR code for wallet address"
                                            viewBox={`0 0 256 256`}
                                        />
                                    </div>
                                    <div className={as.address_contianerhead}>

                                        <p>Wallet Address</p>
                                    </div>
                                    <div className={as.address_contianer}>
                                        <p>{walletAddress}</p>
                                        <div className={as.copy_container} >
                                            <i
                                                className="fi fi-ss-copy"
                                                style={{ cursor: "pointer" }}
                                                tabIndex={0}
                                                onClick={() => copyToClipboard()}
                                            />
                                        </div>
                                    </div>

                                    {/* <p className={as.cautious_container}  >
                            Note :  Submit details after deposit funds on deposit address
                        </p> */}
                                </div>


                                :


                                <>
                                    <DepositRaise></DepositRaise>
                                </>
                        }
                    </div>
                )}
            </div>
        </>
    );
};

export default Deposit;
