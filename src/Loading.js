import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div style={{
            backgroundColor: "#A1A0E6",
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <ReactLoading type="bubbles" color="#ccffff"
                height={100} width={100} />
        </div >
    )
}

export default Loading