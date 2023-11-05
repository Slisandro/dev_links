import { NavLink } from 'react-router-dom'
import PreviewPhoneProfileComponent from '../components/preview-phone-profile-component'
import LinkIcon from '../icons/link-icon'

function PreviewLayout() {
    const handleCopyLink = () => {
        const link = document.getElementById('link');
        if (link) { 
            // @ts-ignore
            link.select();
            // @ts-ignore
            navigator.clipboard.writeText(link.value);
        }
    }
    return (
        <main className="container-preview-layout">
            <div className="header">
                <NavLink to="/home">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        Home
                    </button>
                </NavLink>
            </div>
            <div className="actions">
                <div className="textfield">
                    <input id="link" type="text" value="https://www.linkedin.com/in/username" disabled />
                </div>
                <button onClick={handleCopyLink}>
                    <LinkIcon color="currentColor" />
                    Copy Link
                </button>
            </div>
            <PreviewPhoneProfileComponent />
        </main>
    )
}

export default PreviewLayout