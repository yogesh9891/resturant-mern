import React from 'react'

export  const showErrorMsg = (msg) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {msg}
            </div>
        </div>
    )
}

export  const showSuccessMsg = (msg) => {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {msg}
            </div>
        </div>
    )
}