import {
    Button,
    Dialog,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useCallback, useEffect, useState } from 'react'
import http from '../../../../services/http'
import { API } from '../../../../config/path'
import { getAuthToken } from '../../../../services/auth'
import dayjs from 'dayjs'

const UserDetail = (props) => {
    const [user, setUser] = useState(null)

    const getUser = useCallback(() => {
        if (props.userId) {
            http.get(`${API.USER}/${props.userId}`, {
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`
                }
            })
                .then((res) => {
                    setUser(res.data.data)
                })
                .catch((err) => {
                    alert('Something went wrong')
                    props.setIsOpen(false)
                })
        }
    }, [props])

    useEffect(() => {
        getUser()
    }, [getUser])

    return (
        <Dialog
            open={props.isOpen}
            onClose={() => {
                props.setIsOpen(false)
                props.setUserId(null)
            }}
            sx={{
                '& .MuiDialog-paper': {
                    width: '100%',
                    maxWidth: '600px',
                    margin: 'auto 10px',
                    p: 2
                }
            }}
        >
            <Typography variant="body1" fontWeight={'bold'}>
                User Detail
            </Typography>
            <Box mt={2}>
                {user && (
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Alamat</TableCell>
                                <TableCell align="right">
                                    {user.address}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Gender</TableCell>
                                <TableCell align="right">
                                    {user.gender === 'l' ? 'Pria' : 'Wanita'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tanggal Lahir</TableCell>
                                <TableCell align="right">
                                    {dayjs(user.born_date).format(
                                        'DD MMM, YYYY'
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tanggal Input</TableCell>
                                <TableCell align="right">
                                    {dayjs(user.created_at).format(
                                        'DD MMM YYYY HH:mm:ss'
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )}

                <Box
                    sx={{
                        mt: 2,
                        textAlign: 'right'
                    }}
                >
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => props.setIsOpen(false)}
                    >
                        Close
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}

export default UserDetail
