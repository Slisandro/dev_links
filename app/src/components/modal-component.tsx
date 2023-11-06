import React from 'react'

interface Props {
    children: React.ReactNode,
    open: boolean
}

function ModalComponent({ children, open }: Props) {
    return (
        <div className={`modal ${open ? "open" : "close"}`}>
            <div className="content" style={{ height: "40%" }}>
                {children}
            </div>
        </div>
    )
}

export default ModalComponent