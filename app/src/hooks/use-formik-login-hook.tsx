import { useFormik } from 'formik';
import { loginServicie } from '../servicies/authentication';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authentication';
import { useNavigate } from 'react-router-dom';

interface Errors {
    username: string
    password: string
}

const initialErrors = {
    username: '',
    password: '',
}

function useFormikLoginHook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        initialErrors: initialErrors,
        async onSubmit(values) {
            const response = await loginServicie(values);
            if (response.token) {
                dispatch(login({ ...response, state: "authenticated" }));
                setTimeout(() => {
                    navigate("/")
                }, 500);
            };
        },
        validate(values) {
            let errors: Errors = initialErrors;

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

export default useFormikLoginHook