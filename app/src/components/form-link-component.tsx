import { useDispatch } from 'react-redux';
import technologies, { TechnologiesLabel } from '../constants/technologies-constants';
import useFormikLinkHook from '../hooks/use-formik-link-hook';
import { Link, setAddLink, setEditLink } from '../redux/reducers/links-reducers';
import ButtonComponent from './button-component';
import DropdownComponent from './dropdown-component';
import TextFieldComponent from './textfield-component';
import { toast } from 'react-toastify';

function FormLinkComponent({ entity, toggleModal }: { entity?: Link, toggleModal: () => void }) {
    const dispatch = useDispatch();
    const { values, errors, handleChange, setFieldValue, isDirty } = useFormikLinkHook(entity);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (entity) {
            dispatch(setEditLink(values))
        } else {
            dispatch(setAddLink(values))
        }
        toast("Link saved successfully!", {
            position: toast.POSITION.BOTTOM_LEFT,
            className: "toast-message"
        })
        toggleModal();
    };

    const handleCancel = () => toggleModal();

    const handleDropdownChange = (value: TechnologiesLabel) =>
        // setFieldValue is a formik function to set the value of a field
        setFieldValue("type", value)

    return (
        <div className="container-form-links">
            <h2>
                {entity ? "Edit Link" : "Create Link"}
            </h2>
            <form onSubmit={handleSubmit} className="form-links">
                <DropdownComponent
                    id="type"
                    name="type"
                    error={errors.type}
                    value={values.type}
                    options={technologies}
                    onChange={handleDropdownChange}
                    disabled={entity ? true : false}
                />
                <TextFieldComponent
                    id="url"
                    name="url"
                    error={errors.url}
                    placeholder="https://"
                    value={values.url}
                    onChange={handleChange}
                />
                <div className="actions">
                    <ButtonComponent
                        onClick={handleCancel}
                        label={'Cancel'}
                        type="outline"
                        disabled={false}
                    />
                    <ButtonComponent
                        buttonType="submit"
                        label={'Save'}
                        type="default"
                        disabled={!!errors.type || !!errors.url || !isDirty}
                    />
                </div>
            </form>
        </div>
    )
}

export default FormLinkComponent;