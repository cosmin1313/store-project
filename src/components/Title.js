import React from 'react'

export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold my-2  w3-animate-left">
                    {name} <strong className="text-blue  w3-animate-left ">{title}
                    </strong>
                </h1>
            </div>
        </div>
    )
}
