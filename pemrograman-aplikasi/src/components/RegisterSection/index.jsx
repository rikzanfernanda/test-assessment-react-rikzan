import { Box, Button, Link, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import http from '../../services/http'
import { API } from "../../config/path"
import { useState } from "react"
import { setAuthToken } from "../../context/authContext"
import registerSchema from "../../utils/registerSchema"

const RegisterSection = (props) => {
    const [isDisabled, setIsDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            setIsDisabled(true)
            http.post(API.REGISTER, values)
                .then((res) => {
                    setAuthToken(res.data.token)
                    setIsDisabled(false)
                    window.location.reload()
                })
                .catch((err) => {
                    alert('Something went wrong')

                    setIsDisabled(false)
                })
        }
    })

    return (
        <Box
            sx={{
                minWidth: '300px',
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    mb: '10px',
                }}
            >
                Register
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <TextField
                        variant="standard"
                        label='Name'
                        size="small"
                        name="name"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        variant="standard"
                        label='Email'
                        size="small"
                        name="email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant="standard"
                        label='Password'
                        name="password"
                        size="small"
                        fullWidth
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Box
                        sx={{
                            textAlign: 'right',
                        }}
                    >
                        <Button
                            variant="contained"
                            type='submit'
                            disabled={isDisabled}
                            sx={{
                                position: 'relative',
                                mb: '10px',
                            }}
                        >
                            {isDisabled && 'Loading...'}
                            {!isDisabled && 'Register'}
                        </Button>
                        <Typography variant="body1">
                            Sudah punya akun? <Link href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    props.setIsRegister(false)
                                }}
                            >
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default RegisterSection