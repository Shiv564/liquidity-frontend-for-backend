import React from 'react'
import as from "./Sticker.module.css"
import { useNavigate } from 'react-router'

const Sticker = () => {
    const naviagte = useNavigate();
    return (
        <div className={as.stickercontianer}   >

            <div className={as.child1}  >
                <i onClick={() => naviagte(-1)} className="fi fi-rs-angle-small-left"></i>
            </div>

            <div className={as.child2}  >
                <span> 1.0.4 v</span>
                {/* <div className={as.light} ></div> */}
            </div>

        </div>
    )
}

export default Sticker