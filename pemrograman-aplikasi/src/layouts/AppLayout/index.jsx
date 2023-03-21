import { Box } from '@mui/system'

const AppLayout = ({ children }) => {
    return (
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
                    padding: '20px',
                    width: {
                        xs: '100%',
                        md: '600px'
                    },
                    margin: 'auto'
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default AppLayout
