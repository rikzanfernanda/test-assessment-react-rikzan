import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import LoginSection from '../../components/LoginSection'
import RegisterSection from '../../components/RegisterSection'
import { getAuthToken } from '../../context/authContext'
import http from '../../services/http'
import { API, PATH } from '../../config/path'
import UsersTable from './components/UsersTable'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState(null)

    const navigate = useNavigate()

    const getUsers = useCallback(() => {
        setIsLoading(true)
        http.get(API.USER, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        })
            .then((res) => {
                setUsers(res.data.data)
                setIsLoading(false)
            })
            .catch((err) => {
                alert('Something went wrong')
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <>
            {!getAuthToken() && (
                <Box
                    sx={{
                        backgroundColor: '#8EC5FC',
                        backgroundImage:
                            'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: '40px',
                            borderRadius: 2,
                            boxShadow: 1
                        }}
                    >
                        {!isRegister && (
                            <LoginSection setIsRegister={setIsRegister} />
                        )}
                        {isRegister && (
                            <RegisterSection setIsRegister={setIsRegister} />
                        )}
                    </Box>
                </Box>
            )}
            {getAuthToken() && (
                <Box
                    sx={{
                        backgroundColor: '#8EC5FC',
                        backgroundImage:
                            'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                        minHeight: '100vh',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 4
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 2,
                            display: 'inline-block',
                            width: {
                                xs: '100%',
                                md: '50%',
                                lg: 'auto'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 2
                            }}
                        >
                            <Typography variant="body1" fontWeight={'bold'}>
                                Table of Users
                            </Typography>
                            <Button
                                size="small"
                                variant="contained"
                                onClick={() => navigate(PATH.NEW_USER)}
                            >
                                Create New
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: 2,
                                boxShadow: 1,
                                p: 2
                            }}
                        >
                            {isLoading && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        minWidth: '300px'
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            )}
                            {!isLoading && users && (
                                <Box>
                                    <UsersTable users={users} />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Home
