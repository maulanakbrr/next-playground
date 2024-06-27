import React from 'react'
import Table from '@/component/table'

const UserPage:React.FC = () => {
  return (
    <>
      <div>UserPage</div>
      <Table
        url='http://localhost:3000/api/user'
        isFiltered={false}
        filterOption={['name', 'email', 'service']}
        column={['Name', 'Email', 'Phone Number', 'Service']}
      />
    </>
  )
}

export default UserPage