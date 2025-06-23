import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import as from './DepositRequests.module.css';
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader';

const WithrawalRequests = () => {
    const navigate = useNavigate();
    const [withdrawals, setWithdrawals] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchWithdrawals = async (pg = 1) => {
        const token = secureLocalStorage.getItem('TnTrdx');
        setLoading(true);

        try {
            const response = await fetch(`${Origin}/api/withdraw/history?page=${pg}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const res = await response.json();
            console.log(res, 'withdrawal history');

            setWithdrawals(res.withdrawals || []);
            setPage(res.currentPage || 1);
            setTotalPages(res.totalPages || 1);
        } catch (err) {
            console.error('Failed to fetch withdrawals:', err);
            toast.error("Something went wrong");
            setWithdrawals([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWithdrawals(page);
    }, [page]);

    const formatDate = (isoDate) => {
        if (!isoDate) return "-";
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
                <h5>Withdrawal Requests</h5>
                <hr />

                <div className={as.requestsContainer}>
                    {Array.isArray(withdrawals) && withdrawals.length > 0 ? (
                        withdrawals.map((wd, idx) => (
                            <div
                                key={idx}
                                className={as.requesthere}
                                onClick={() => navigate(`/withdrawal/request/${wd.user_id}`, { state: wd })}
                            >
                                <div className={as.child1}>
                                    <p className={as.childa}>{wd.icon?.toUpperCase()} (BEP20)</p>
                                    <p className={as.childb}>{formatDate(wd.processed_at || wd.created_at)}</p>
                                </div>
                                <div className={as.child2}>
                                    <p className={as.childc}>-{wd.amount}</p>
                                    <p className={as.childd}>{wd.status}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center'>No withdrawals found.</p>
                    )}
                </div>

                {

                    withdrawals &&

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
                    </ul>}
            </div>
        </>
    );
};

export default WithrawalRequests;
