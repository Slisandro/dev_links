import { useDispatch, useSelector } from "react-redux";
import useFormikProfileHook from "../hooks/use-formik-profile-hook";
import { UserProfileState, setUsername, setLastname, setName } from "../redux/reducers/user-profile-reducers";
import { updateProfile } from "../servicies/profile";
import ButtonComponent from "./button-component";
import ImageUploadComponent from "./image-upload-component";
import TextFieldComponent from "./textfield-component";
import { UserLogged } from "../redux/reducers/authentication";

function EditPersonalDataComponent() {
    const dispatch = useDispatch();
    const { name, lastname, username, image, file }: Partial<UserProfileState> = useSelector((state: { userProfile: UserProfileState }) => state.userProfile);
    const { user } = useSelector((s: { userLogged: UserLogged } ) => s.userLogged);
    const { errors, values, handleChange, isDirty, setFieldValue } = useFormikProfileHook({ name, lastname, username, image });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // @ts-ignore
        const response = await updateProfile({ ...values, userid: user?.id, image, file });
        if (response) {
            dispatch(setName(response.name));
            dispatch(setLastname(response.lastname));
            dispatch(setUsername(response.username));
        };
    }

    return (
        <form className="container-profile" onSubmit={handleSubmit}>
            <div className="header">
                <h2>Profile Details</h2>
                <h4>Add your details to create a personal touch to your profile.</h4>
            </div>
            <div className="image-profile">
                <p>Profile picture</p>
                <ImageUploadComponent image={values.image} setFieldValue={setFieldValue} />
            </div>
            <div className="personal-data">
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
            <div className="footer">
                <ButtonComponent buttonType="submit" label="Save" type="outline" disabled={!!errors.name || !!errors.lastname || !!errors.username || !isDirty} />
            </div>
        </form>
    )
}

export default EditPersonalDataComponent