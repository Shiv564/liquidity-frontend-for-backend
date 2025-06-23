import React from 'react'
import as from "./Loader.module.css"

const Loader = () => {
  return (
    <>
  <div className={`${as.LoadContainer}`}  >
  <span className={as.loader}></span>
  </div>
    </>
  )
}

export default Loader