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

const UsersTable = ({ users }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)

    return (
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
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{dayjs(item.born_date).format('DD MMM, YYYY')}</TableCell>
                                <TableCell>{dayjs(item.created_at).format('DD MMM YYYY HH:mm:ss')}</TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
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
    )
}

export default UsersTable
