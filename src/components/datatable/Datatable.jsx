import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch.js';
import axios from 'axios';

const Datatable = ({ columns, title }) => {
  const location = useLocation();
  const path = location.pathname.split('/'[1]);
  const [list, setList] = useState([]);

  const { data, loading, error } = useFetch(`/api/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {title}
        <Link to={`http://localhost:5173${path}/new`} className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20, 25]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
