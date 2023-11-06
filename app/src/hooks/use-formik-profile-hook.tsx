import { useFormik } from 'formik';

interface Errors {
    name: string
    lastname: string
    username: string
}

interface InitialValues {
    name: string
    lastname: string
    username: string
    image: string
}

const initialErrors = {
    name: '',
    lastname: '',
    username: ''
}

function useFormikProfileHook(entity: InitialValues) {
    const formik = useFormik({
        initialValues: {
            name: entity.name || '',
            lastname: entity.lastname || '',
            username: entity.username || '',
            image: entity.image || ""
        },
        initialErrors: initialErrors,
        async onSubmit() { },
        validate(values) {
            let errors: Errors = initialErrors;

            if (!values.username) {
                errors.username = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
                errors.username = 'Invalid';
            } else errors.username = ""

            if (!values.name) {
                errors.name = 'Required';
            } else errors.name = '';

            if (!values.lastname) {
                errors.lastname = 'Required';
            } else errors.lastname = '';

            return errors
        },
    })

    return {
        handleSubmit: formik.handleSubmit,
        handleChange: formik.handleChange,
        values: formik.values,
        errors: formik.errors,
        isDirty: formik.dirty,
        setFieldValue: formik.setFieldValue
    }
}

export default useFormikProfileHook