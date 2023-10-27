import { useDispatch, useSelector } from "react-redux";
import useFormikProfileHook from "../hooks/use-formik-profile-hook";
import { UserProfileState, setUsername, setLastname, setName } from "../redux/reducers/user-profile-reducers";
import { updateProfile } from "../servicies/profile";
import ButtonComponent from "./button-component";
import ImageUploadComponent from "./image-upload-component";
import TextFieldComponent from "./textfield-component";

function EditPersonalDataComponent() {
    const dispatch = useDispatch();
    const { name, lastname, username, image, file }: Partial<UserProfileState> = useSelector((state: { userProfileReducers: UserProfileState }) => state.userProfileReducers);
    const { errors, values, handleChange } = useFormikProfileHook({ name, lastname, username });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await updateProfile({ ...values, image, file });
        // if (response) {
        //     dispatch(setName(response.name));
        //     dispatch(setLastname(response.lastname));
        //     dispatch(setUsername(response.username));
        // };
    }

    return (
        <form className="edit-personal-data" onSubmit={handleSubmit}>
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
                        id={"name"}
                        name={"name"}
                        error={errors.name}
                        placeholder={"e.g. John"}
                        value={values.name}
                        onChange={handleChange}
                        type={"default"}
                    />
                </div>
                <div className="container-input">
                    <label>Last Name *</label>
                    <TextFieldComponent
                        id={"lastname"}
                        name={"lastname"}
                        error={errors.lastname}
                        placeholder={"e.g. Smith"}
                        value={values.lastname}
                        onChange={handleChange}
                        type={"default"}
                    // icon={<svg width="0" height="0" viewBox="0 0 16 16" fill="none"></svg>}
                    />
                </div>
                <div className="container-input">
                    <label>Email</label>
                    <TextFieldComponent
                        id={"username"}
                        name={"username"}
                        placeholder={"e.g. email@example.com"}
                        value={values.username}
                        onChange={handleChange}
                        type={"default"}
                    />
                </div>
            </div>
            <div className="actions">
                <ButtonComponent buttonType="submit" label="Save" type="outline" disabled={!!errors.name || !!errors.lastname || !!errors.username} />
            </div>
        </form>
    )
}

export default EditPersonalDataComponent