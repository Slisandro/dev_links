import { useFormik } from 'formik';

interface Errors {
    name: string
    lastname: string
    email: string
}

const initialErrors = {
    name: '',
    lastname: '',
    email: ''
}

function useFormikProfileHook(entity: Errors) {
    const formik = useFormik({
        initialValues: {
            name: entity.name || '',
            lastname: entity.lastname || '',
            email: entity.email || ''
        },
        initialErrors: initialErrors,
        async onSubmit() { },
        validate(values) {
            let errors: Errors = initialErrors;

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid';
            } else errors.email = ""

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