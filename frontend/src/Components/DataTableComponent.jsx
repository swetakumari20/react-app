// src/Components/DataTableComponent.jsx
import React from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponent = ({ 
  columns,
   data,
   pagination,
   paginationServer,
   paginationTotalRows,
   onChangePage, 
  
  }) => (
  <div>
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      paginationServer={paginationServer}
      paginationTotalRows={paginationTotalRows}
      onChangePage={onChangePage}

    />
  </div>
);

export default DataTableComponent;
