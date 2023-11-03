import EditPersonalDataComponent from "../components/edit-personal-data-component"
import NavBarComponent from "../components/navbar-component"
import PreviewPhoneProfileComponent from "../components/preview-phone-profile-component"

function EditPersonalDataLayout() {
    return (
        <div className="container-profile-layout">
            <NavBarComponent />
            <div className="content">
                <div className="container-preview">
                    <PreviewPhoneProfileComponent />
                </div>

                <EditPersonalDataComponent />
            </div>
        </div>
    )
}

export default EditPersonalDataLayout