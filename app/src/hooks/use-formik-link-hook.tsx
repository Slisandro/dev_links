import { useFormik } from 'formik';
import { Link } from '../redux/reducers/links-reducers';

interface Errors {
    type: string
    url: string
}

const initialErrors = {
    type: "",
    url: '',
}

function useFormikLinkHook(entity?: Link) {
    const formik = useFormik({
        initialValues: {
            type: entity?.type ?? '',
            url: entity?.url ?? '',
        },
        initialErrors: initialErrors,
        async onSubmit() {},
        validate(values) {
            let errors: Errors = initialErrors;

            if (!values.type) {
                errors.type = 'Required';
            } else errors.type = ""

            if (!values.url) {
                errors.url = 'Required';
            } else errors.url = ""

            return initialErrors
        },
    })

    return {
        handleSubmit: formik.handleSubmit,
        handleChange: formik.handleChange,
        values: formik.values,
        errors: formik.errors,
        setFieldValue: formik.setFieldValue
    }
}

export default useFormikLinkHook