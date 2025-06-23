import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import as from './DepositRequests.module.css';
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage';
import { ToastContainer } from 'react-toastify';
import Loader from '../Loader/Loader';

const DepositRequests = () => {
    const navigate = useNavigate();
    const [deposits, setDeposits] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);


    const fetchDeposits = async (pg = 1) => {
        const token = secureLocalStorage.getItem('TnTrdx');
        setLoading(true);


        try {
            const response = await fetch(Origin + `/api/deposit/history?page=${pg}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            console.log(res, 'deposit history');

            setDeposits(res.deposits || []);
            setPage(res.currentPage || 1);
            setTotalPages(res.totalPages || 1);
        } catch (err) {
            console.error('Failed to fetch deposits:', err);
            toast.error("Something went wrong");

            setDeposits([]);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeposits(page);
    }, [page]); // fetch when page changes

    const formatDate = (isoDate) => {
        const d = new Date(isoDate);
        return d.toLocaleString();
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            setPage((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />
            {loading && <Loader />}

            <div className={as.DepositRequestscontianer}>
                <h5>Deposit Requests</h5>
                <hr />

                <div className={as.requestsContainer}>
                    {Array.isArray(deposits) && deposits.length > 0 ? (
                        deposits.map((dep, idx) => (
                            <div
                                key={idx}
                                className={as.requesthere}
                                onClick={() => navigate(`/deposit/request/${dep._id}`, { state: dep })}
                            >
                                <div className={as.child1}>
                                    <p className={as.childa}>{dep.token.toUpperCase()}</p>
                                    <p className={as.childb}>{formatDate(dep.createdAt)}</p>
                                </div>
                                <div className={as.child2}>
                                    <p className={as.childc}>+{dep.token_amount}</p>
                                    <p className={as.childd}>{dep.status}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center' >No deposits found.</p>
                    )}
                </div>

                {

                    deposits &&


                    <ul className={as.pagination}>
                        <li
                            onClick={handlePrev}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: page === 1 ? 'var(--black)' : 'var(--redish)',
                                color: page === 1 ? 'var(--fos)' : 'var(--white)',
                                cursor: page === 1 ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <i className="fi fi-rs-angle-small-left"></i>
                        </li>
                        <li id={as.middlePlace}>
                            {page} / {totalPages}
                        </li>
                        <li
                            onClick={handleNext}
                            style={{
                                background: page === totalPages ? 'var(--black)' : 'var(--redish)',
                                color: page === totalPages ? 'var(--grayd)' : 'var(--white)',
                                cursor: page === totalPages ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <i className="fi fi-rs-angle-small-right"></i>
                        </li>
                    </ul>

                }
            </div>


        </>);
};

export default DepositRequests;
