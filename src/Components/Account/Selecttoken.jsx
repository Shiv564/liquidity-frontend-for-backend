import React, { useEffect, useState } from 'react'
import as from "./Account.module.css"
import { useNavigate } from 'react-router'
import Loader from '../Loader/Loader'
import { ToastContainer } from 'react-toastify'
import Origin from '../../Constants';
import secureLocalStorage from 'react-secure-storage'

const Selecttoken = () => {
    const icons = import.meta.glob('../../assets/Alpha/*.png', {
        eager: true,
        import: 'default',
    });

    const getIcon = (iconName) => {
        const path = `../../assets/Alpha/${iconName}.png`;
        const fallback = icons['../../assets/Alpha/bnb.png'];
        return icons[path] || fallback;
    };

    const navigate = useNavigate();

    const [assets, setAssets] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loaderVis, setloaderVis] = useState(false);

    useEffect(() => {
        const fetchAssets = async () => {
            setloaderVis(true);
            const token = secureLocalStorage.getItem('TnTrdx');

            try {
                const res = await fetch(Origin + '/api/deposit/icons', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await res.json();
                if (res.ok) {
                    if (data.icons) {
                        const filtered = data.icons.filter(i => i); // Remove nulls
                        setAssets(filtered);
                    }
                    console.log(data, "====");
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

    // 🔍 Filter based on search input
    const filteredAssets = assets.filter(icon =>
        icon.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            {loaderVis && <Loader />}
            <ToastContainer position="top-right" autoClose={2000} />

            <div className={as.select_container}>
                <div className={as.accountHeader}>
                    <div className={as.search_capsule}>
                        <input
                            type='text'
                            placeholder='Search Coins'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div>
                            <i
                                onClick={() => navigate("/deposit/request")}
                                className="fi fi-rs-time-past"></i>
                        </div>
                    </div>
                </div>

                <div className={as.walletbalancesheet}>
                    <table>
                        <tbody className={as.overflowy}>
                            {filteredAssets.length > 0 ? (
                                filteredAssets.map((icon, idx) => (
                                    <tr key={idx}>
                                        <td className={as.flexit}>
                                            <span className={as.iconcontainer}>
                                                <img
                                                    className={as.rotaterit}
                                                    src={getIcon(icon)}
                                                    alt={icon}
                                                />
                                            </span>
                                            <span className={as.titlecontainer}>
                                                {icon.toUpperCase()}
                                            </span>
                                            <div className={as.quantity}>
                                                <button onClick={() => navigate(`/deposit/${icon}`)}>
                                                    Deposit
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" style={{ border: "none", textAlign: 'center', padding: '1rem', color: '#999' }}>
                                        No results found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Selecttoken;
