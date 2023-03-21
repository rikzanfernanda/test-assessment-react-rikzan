import { Box, Button, Link, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import loginSchema from '../../utils/loginSchema'
import http from '../../services/http'
import { API } from '../../config/path'
import { useState } from 'react'
import { setAuthToken } from '../../context/authContext'

const LoginSection = (props) => {
    const [isDisabled, setIsDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            setIsDisabled(true)
            http.post(API.LOGIN, values)
                .then((res) => {
                    setAuthToken(res.data.token)
                    setIsDisabled(false)
                    window.location.reload()
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        alert('Email atau password salah')
                    }

                    setIsDisabled(false)
                })
        }
    })

    return (
        <Box
            sx={{
                minWidth: '300px'
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    mb: '10px'
                }}
            >
                Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >
                    <TextField
                        variant="standard"
                        label="Email"
                        size="small"
                        name="email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant="standard"
                        label="Password"
                        name="password"
                        size="small"
                        fullWidth
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Box
                        sx={{
                            textAlign: 'right'
                        }}
                    >
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isDisabled}
                            sx={{
                                position: 'relative',
                                mb: '10px'
                            }}
                        >
                            {isDisabled && 'Loading...'}
                            {!isDisabled && 'Login'}
                        </Button>
                        <Typography variant="body1">
                            Belum punya akun?{' '}
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    props.setIsRegister(true)
                                }}
                            >
                                Register
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default LoginSection
