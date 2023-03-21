import * as yup from 'yup'

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(8, 'Name must be at least 8 characters'),
    email: yup
        .string()
        .email('Email is invalid')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
})

export default registerSchema