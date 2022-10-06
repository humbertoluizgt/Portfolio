import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const withLoading = WrappedComponent => {
  function WithLoading() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 800);    
    }, [] )

    return (
      isLoading
      ? <div className='loading-screen'>
          <ClipLoader color={"#ABAD42"} size={80} speedMultiplier={1}/>
        </div>  
      : <WrappedComponent />
    ) 
  }
  return WithLoading
}

export default withLoading