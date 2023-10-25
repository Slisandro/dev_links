import { useFormik } from 'formik';

interface Values {
    username: string
    password: string
    repeatPassword: string
}

const initialErrors = {
    username: '',
    password: '',
    repeatPassword: ''
}

function useFormikRegisterHook() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            repeatPassword: ''
        },
        async onSubmit() {},
        validate(values: Values) {
            let errors = initialErrors;

            if (!values.username) {
                errors.username = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
                errors.username = 'Invalid';
            } else errors.username = ""

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = '8+ characters';
            } else errors.password = ""

            if (!values.repeatPassword) {
                errors.repeatPassword = 'Required';
            } else if (values.repeatPassword.length < 8) {
                errors.repeatPassword = '8+ characters';
            } else if (values.password !== values.repeatPassword) {
                console.log(values)
                errors.repeatPassword = 'Not match';
            } else errors.repeatPassword = ""

            return errors
        },
    });

    return {
        handleChange: formik.handleChange,
        values: formik.values,
        errors: formik.errors,
        resetForm: formik.resetForm
    }
}

export default useFormikRegisterHook