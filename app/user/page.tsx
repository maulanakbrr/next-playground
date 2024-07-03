import React from 'react'
import Table from '@/component/table'
import Search from '@/component/search'

export interface UserColumnInterface {
  name: string,
  text: string
}

const filterOption = [
  { key: '1', value: '', text: 'All' },
  { key: '2', value: 'name', text: 'Name' },
  { key: '3', value: 'email', text: 'Email' },
  { key: '4', value: 'service', text: 'Service' },
]

const userColumn: UserColumnInterface[] = [
  {name: 'name', text: 'Name'},
  {name: 'email', text: 'Email'},
  {name: 'phoneNo', text: 'Phone Number'},
  {name: 'service', text: 'Service'},
]

const UserPage:React.FC = () => {
  
  return (
    <div className='flex my-4'>
      <div className='w-1/2'>UserPage</div>
      <div className='w-1/2'>
        <div>
          <Search filterOption={filterOption}/>
          <Table
            url='http://localhost:3000/api/user'
            column={userColumn}
          />
        </div>
      </div>
    </div>
  )
}

export default UserPage