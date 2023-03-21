import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material'
import { useState } from 'react'
import dayjs from 'dayjs'
import UserDetail from '../UserDetail'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../../config/path'

const UsersTable = ({ users }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [isOpen, setIsOpen] = useState(false)
    const [userId, setUserId] = useState(null)

    const navigate = useNavigate()

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Nama</TableCell>
                            <TableCell>Alamat</TableCell>
                            <TableCell>P/W</TableCell>
                            <TableCell>Tanggal Lahir</TableCell>
                            <TableCell>Tanggal Input</TableCell>
                            <TableCell>Aksi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            : users
                        ).map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>
                                        {item.gender === 'p'
                                            ? 'Pria'
                                            : 'Wanita'}
                                    </TableCell>
                                    <TableCell>
                                        {dayjs(item.born_date).format(
                                            'DD MMM, YYYY'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {dayjs(item.created_at).format(
                                            'DD MMM YYYY HH:mm:ss'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: 'flex'
                                            }}
                                        >
                                            <Button
                                                size="small"
                                                onClick={() => {
                                                    setIsOpen(!isOpen)
                                                    setUserId(item.id)
                                                }}
                                            >
                                                View
                                            </Button>
                                            <Button size="small"
                                                variant='contained'
                                                color='primary'
                                                onClick={() => {
                                                    navigate(`${PATH.USER}/${item.id}`)
                                                }}
                                            >Edit</Button>
                                            <Button size="small">Delete</Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[rowsPerPage]}
                                rowsPerPage={rowsPerPage}
                                count={users.length}
                                page={page}
                                onPageChange={(e, newPage) => {
                                    setPage(newPage)
                                }}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

            <UserDetail
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                userId={userId}
                setUserId={setUserId}
            />
        </>
    )
}

export default UsersTable
