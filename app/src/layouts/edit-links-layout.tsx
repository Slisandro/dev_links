import EditLinksComponent from '../components/edit-links-component'
import NavBarComponent from '../components/navbar-component'
import PreviewPhoneProfileComponent from '../components/preview-phone-profile-component'

function EditLinksLayout() {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px",
                maxHeight: "100%"
            }}
        >
            <NavBarComponent />
            <div
                style={{
                    maxWidth: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        width: "34%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "15px"
                    }}
                >
                    <PreviewPhoneProfileComponent />
                </div>
                <EditLinksComponent />
            </div>
        </div>
    )
}

export default EditLinksLayout