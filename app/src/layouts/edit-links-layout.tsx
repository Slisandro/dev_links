import EditLinksComponent from '../components/edit-links-component'
import NavBarComponent from '../components/navbar-component'
import PreviewPhoneProfileComponent from '../components/preview-phone-profile-component'

function EditLinksLayout() {
    return (
        <div className="container-link-layout">
            <NavBarComponent />
            <div className="content">
                <div className="container-preview" >
                    <PreviewPhoneProfileComponent />
                </div>
                <EditLinksComponent />
            </div>
        </div>
    )
}

export default EditLinksLayout