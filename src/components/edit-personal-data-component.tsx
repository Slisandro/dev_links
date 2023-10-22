import { ChangeEvent } from "react"
import ButtonComponent from "./button-component"
import ImageUploadComponent from "./image-upload-component"
import TextFieldComponent from "./textfield-component"

function EditPersonalDataComponent() {
    return (
        <div className="edit-personal-data">
            <div className="header">
                <h2>Profile Details</h2>
                <h4>Add your details to create a personal touch to your profile.</h4>
            </div>
            <div className="section-image">
                <p>Profile picture</p>
                <ImageUploadComponent />
            </div>
            <div className="section-personal-data">
                <div className="container-input">
                    <label>First Name *</label>
                    <TextFieldComponent
                        placeholder={"e.g. John"}
                        value={""}
                        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.")
                        }}
                        type={"default"}
                        icon={<svg width="0" height="0" viewBox="0 0 16 16" fill="none"></svg>}
                    />
                </div>
                <div className="container-input">
                    <label>Last Name *</label>
                    <TextFieldComponent
                        placeholder={"e.g. Smith"}
                        value={""}
                        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.")
                        }}
                        type={"default"}
                        icon={<svg width="0" height="0" viewBox="0 0 16 16" fill="none"></svg>}
                    />
                </div>
                <div className="container-input">
                    <label>Email</label>
                    <TextFieldComponent
                        placeholder={"e.g. email@example.com"}
                        value={""}
                        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.")
                        }}
                        type={"default"}
                        icon={<svg width="0" height="0" viewBox="0 0 16 16" fill="none"></svg>}
                    />
                </div>
            </div>
            <div className="actions">
                <ButtonComponent label="Save" type="outline" disabled={true} />
            </div>
        </div>
    )
}

export default EditPersonalDataComponent