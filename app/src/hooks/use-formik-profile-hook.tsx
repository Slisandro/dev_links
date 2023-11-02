import { useFormik } from 'formik';

interface Errors {
    name: string
    lastname: string
    username: string
}

const initialErrors = {
    name: '',
    lastname: '',
    username: ''
}

function useFormikProfileHook(entity: Errors) {
    const formik = useFormik({
        initialValues: {
            name: entity.name || '',
            lastname: entity.lastname || '',
            username: entity.username || ''
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
        // initialValues: formik.initialValues,
    }
}

export default useFormikProfileHook