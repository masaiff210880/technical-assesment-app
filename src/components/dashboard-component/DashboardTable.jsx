import React from 'react'
import TableHeader from '../common/TableHeader'
import Table from '../common/Table'
import dashboardData from '../../data/dashboardData.json'
import PaginationUI from '../common/Pagination'

function DashboardTable() {
  return (
    <div className='bg-white dark:bg-gray-900 rounded mt-2 p-6 transition-colors duration-300'>
        <TableHeader />
        <Table data={dashboardData.scans} />
        <PaginationUI/>
    </div>
  )
}

export default DashboardTable