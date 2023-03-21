import { Box } from '@mui/material'
import { useState } from 'react'
import LoginSection from '../../components/LoginSection'
import RegisterSection from '../../components/RegisterSection'
import { getAuthToken } from '../../context/authContext'

const Home = () => {
    const [isRegister, setIsRegister] = useState(false)
    console.log(getAuthToken())
    return (
        <>
            {!getAuthToken() && (
                <Box
                    sx={{
                        backgroundColor: '#8EC5FC',
                        backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: '40px',
                            borderRadius: 2,
                            boxShadow: 1,
                        }}
                    >
                        {!isRegister && <LoginSection setIsRegister={setIsRegister} />}
                        {isRegister && <RegisterSection setIsRegister={setIsRegister} />}
                    </Box>
                </Box>
            )}
            {getAuthToken() && (
                <Box
                    sx={{
                        backgroundColor: '#8EC5FC',
                        backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                        minHeight: '100vh',
                        textAlign: 'center',
                        padding: '40px',
                        pt: '100px',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            margin: 'auto',
                            display: 'inline-block',
                        }}
                    >
                        cek
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Home
