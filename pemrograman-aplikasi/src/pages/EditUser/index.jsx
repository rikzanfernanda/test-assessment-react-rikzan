import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from '../../services/http'
import { API, PATH } from '../../config/path'
import { getAuthToken } from "../../services/auth"
import { useFormik } from "formik"
import newUserSchema from "../../utils/newUserSchema"
import { useNavigate } from 'react-router-dom'
import AppLayout from "../../layouts/AppLayout"
import { Box, Button, FormControlLabel, FormLabel, Link, Radio, RadioGroup, TextField, Typography } from "@mui/material"

const iniUser = {
    name: '',
    address: '',
    gender: '',
    born_date: ''
}

const EditUser = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState(iniUser)
    const [isDisabled, setIsDisabled] = useState(false)

    const getUser = useCallback(() => {
        http.get(`${API.USER}/${id}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        })
            .then((res) => {
                setUser(res.data.data)
            })
    }, [id])

    useEffect(() => {
        console.log('first')
        getUser()
    }, [getUser])

    const formik = useFormik({
        initialValues: {
            name: user?.name,
            address: user?.address,
            gender: user?.gender,
            born_date: user?.born_date
        },
        enableReinitialize: true,
        validationSchema: newUserSchema,
        onSubmit: (values) => {
            setIsDisabled(true)
            http.put(`${API.USER}/${id}`, values, {
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`
                }
            })
                .then((res) => {
                    alert('Success')
                    setIsDisabled(false)
                    navigate(PATH.HOME)
                })
                .catch((err) => {
                    alert('Something went wrong')
                    setIsDisabled(false)
                })
        }
    })

    return (
        <AppLayout>
            <Box mb={1}>
                <Typography variant="body1">
                    <Link href={PATH.HOME} underline="none" color={'inherit'}>
                        Back
                    </Link>
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: 1
                }}
            >
                <Box p={'20px'}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            mb: '10px'
                        }}
                    >
                        Update User
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                        >
                            <TextField
                                variant="standard"
                                label="Name"
                                size="small"
                                name="name"
                                fullWidth
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.name &&
                                    Boolean(formik.errors.name)
                                }
                                helperText={
                                    formik.touched.name && formik.errors.name
                                }
                            />

                            <TextField
                                variant="standard"
                                label="Address"
                                size="small"
                                name="address"
                                fullWidth
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.address &&
                                    Boolean(formik.errors.address)
                                }
                                helperText={
                                    formik.touched.address &&
                                    formik.errors.address
                                }
                            />

                            <Box>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                >
                                    <FormControlLabel
                                        value={'l'}
                                        control={<Radio />}
                                        label="Pria"
                                    />
                                    <FormControlLabel
                                        value={'p'}
                                        control={<Radio />}
                                        label="Wanita"
                                    />
                                </RadioGroup>
                            </Box>

                            <Box>
                                <FormLabel>Born Date</FormLabel>
                                <TextField
                                    variant="standard"
                                    size="small"
                                    name="born_date"
                                    fullWidth
                                    type="date"
                                    value={formik.values.born_date}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.born_date &&
                                        Boolean(formik.errors.born_date)
                                    }
                                    helperText={
                                        formik.touched.born_date &&
                                        formik.errors.born_date
                                    }
                                />
                            </Box>

                            <Box
                                sx={{
                                    textAlign: 'right'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    type="submit"
                                    size="small"
                                    disabled={isDisabled}
                                >
                                    {isDisabled && 'Loading...'}
                                    {!isDisabled && 'Update'}
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </AppLayout>
    )
}

export default EditUser