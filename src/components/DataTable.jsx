import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Button } from '@mui/material';
import AddNewForm from './AddNewForm';
import avatar from '../assets/avatar.png';

const DataTable = ({ heading, columns, data, actions, noRowsPerPage, title, showBtn = true }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(noRowsPerPage);
  const [newForm, setNewForm] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddNew = () => {
    setNewForm(!newForm);
  };

  return (
    <>
      <Paper sx={{ backgroundColor: "white", padding: "24px", boxShadow: "none", width: "100%" }}>
        <div className='flex items-center justify-between mb-2'>
          <h6 className='text-lg font-semibold text-gray-700 mb-4'>{heading}</h6>
          {showBtn && (
            <Button
              variant="contained"
              size="small"
              disableElevation
              sx={{ backgroundColor: '#626bf7', paddingX: "20px" }}
              onClick={handleAddNew}
            >
              Add new {title}
            </Button>
          )}
        </div>

        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table size="small" aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#F1F4F9" }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} align={column.align || "left"}>
                    <span className='text-gray-800 font-bold'>{column.header}</span>
                  </TableCell>
                ))}
                {actions && (
                  <TableCell align="right" sx={{ verticalAlign: "middle" }}>
                    <span className='text-gray-800 font-bold'>Actions</span>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      align={column.align || "left"}
                      sx={{ width: column.field === "image" ? '50px' : 'auto' }}
                    >
                      {column.field === "image" ? (
                        <img
                          className="w-7 h-7 object-cover rounded-full"
                          src={row[column.field] || avatar}
                          alt="user"
                        />
                      ) : (
                        row[column.field]
                      )}
                    </TableCell>
                  ))}

                  {/* Actions Column */}
                  {actions && (
                    <TableCell align="right">
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '4px' }}>
                        {actions.map((action, actionIndex) => (
                          <Button
                            key={actionIndex}
                            onClick={() => action.onClick(row)}
                            style={{ color: action.color, minWidth: 'auto', padding: '4px 8px', margin: '0'}}
                            startIcon={<action.icon size={16} />}
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-4'>
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[4]}
          />
        </div>
      </Paper>

      {newForm && <AddNewForm columns={columns} title={title} />}
    </>
  );
};

export default DataTable;
