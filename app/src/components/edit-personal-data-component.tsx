import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileState, setEmail, setLastname, setName } from "../redux/reducers/user-profile-reducers";
import ButtonComponent from "./button-component";
import ImageUploadComponent from "./image-upload-component";
import TextFieldComponent from "./textfield-component";

function EditPersonalDataComponent() {
    const dispatch = useDispatch();
    const { name, lastname, email }: Partial<UserProfileState> = useSelector((state: { userProfileReducers: UserProfileState }) => state.userProfileReducers);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        return dispatch(setName(e.target.value))
    }

    const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        return dispatch(setLastname(e.target.value))
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        return dispatch(setEmail(e.target.value))
    }

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
                        value={name}
                        onChange={onChangeName}
                        type={"default"}
                    />
                </div>
                <div className="container-input">
                    <label>Last Name *</label>
                    <TextFieldComponent
                        placeholder={"e.g. Smith"}
                        value={lastname}
                        onChange={onChangeLastName}
                        type={"default"}
                        // icon={<svg width="0" height="0" viewBox="0 0 16 16" fill="none"></svg>}
                    />
                </div>
                <div className="container-input">
                    <label>Email</label>
                    <TextFieldComponent
                        placeholder={"e.g. email@example.com"}
                        value={email}
                        onChange={onChangeEmail}
                        type={"default"}
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