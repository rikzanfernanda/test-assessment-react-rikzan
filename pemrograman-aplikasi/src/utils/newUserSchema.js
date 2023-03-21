import * as yup from 'yup'

const newUserSchema = yup.object().shape({
    name: yup
        .string()
        .min(8, 'Name must be at least 8 characters')
        .required('Name is required'),
    address: yup.string(),
    gender: yup.string(),
    born_date: yup.date().required('Born date is required')
})

export default newUserSchema
