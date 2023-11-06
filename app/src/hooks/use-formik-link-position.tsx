import { useFormik } from 'formik';
import { Link } from '../redux/reducers/links-reducers';

// This form is used to update the order of the links
// change for fieldArray in the future

function useFormikLinkPositionHook(entity?: Link[]) {
    const formik = useFormik({
        initialValues: entity ?? [],
        async onSubmit() { },
    })

    return {
        handleSubmit: formik.handleSubmit,
        handleChange: formik.handleChange,
        values: formik.values,
        errors: formik.errors,
        setFieldValue: formik.setFieldValue,
        dirty: formik.dirty
    }
}

export default useFormikLinkPositionHook