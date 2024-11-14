// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DataTableComponent from '../../Components/DataTableComponent';
import { fetchUsers } from '../../Redux/Slices/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const {users} = useSelector((state) => state.user);
  console.log(users, "users")
  
  useEffect(() => {
    dispatch(fetchUsers({page, limit:perPage}));
  }, [dispatch, page, perPage]);

  const handlePageChange = async(newPage)=>{
     setPage(newPage)
  }

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      <DataTableComponent columns={columns} data={users?.data}
       pagination 
       paginationServer 
       paginationTotalRows={users?.total}
       onChangePage={handlePageChange}
      />
    </div>
  );
};

export default Home;
