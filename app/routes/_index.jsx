import { useState } from "react"
import NewRequest from "../components/new";
import ActiveRequest from "../components/active";
import "../styles/global.css"

export default function Index() {
    const [newRequest, setNewRequest] = useState(true);

    const newRequestId = 'new';
    const activeRequestId = 'active';

    const handleClick = (id) => {
        if (id === newRequestId) {
            setNewRequest(true);
        } else {
            setNewRequest(false);
        }
    }

    return (
        <>
            {/* <div className="main-window-wrapper">
                <nav className="nav">
                    <button
                        onClick={() => handleClick(newRequestId)} 
                        id={newRequestId} 
                        className="nav-button">
                        <h3>New Request</h3>
                    </button>
                    <button 
                        onClick={() => handleClick(activeRequestId)} 
                        id={activeRequestId} 
                        className="nav-button">
                        <h3>Active Request</h3>
                    </button>
                </nav>
                <div className="main-window">
                    {newRequest ? <NewRequest /> : <ActiveRequest />}
                </div> 
            </div>  */}
            <NewRequest />
        </>
    );
}

