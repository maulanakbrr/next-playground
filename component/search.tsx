'use client'
import React, { useState, useEffect, useContext } from 'react'
import Button from './button'
import { UserContext } from '@/app/user/context'

interface FilterOption {
  key: string,
  value: string,
  text: string
}

interface SearchOptionInterface {
  category: string,
  searchValue: string
}

type VoidFunction = (param: SearchOptionInterface) => void

interface SearchProps {
  // value: SearchOptionInterface,
  // setValue: VoidFunction,
  filterOption: FilterOption[],
}

const Search:React.FC<SearchProps> = ({filterOption}) => {
  const context = useContext(UserContext)
  const { searchData, handleSearchData } = context

  const [searchOption, setSearchOption] = useState({
    category: '',
    searchValue: ''
  })

  const firstLoadFunc = () => setSearchOption(searchData)

  useEffect(() => {
    firstLoadFunc()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchOption(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    handleSearchData(searchOption)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex mb-8'>
        <div className='w-1/4 pr-2'>
          <select
            id="category"
            name="category"
            value={searchOption.category}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {
              filterOption.map(item => (
                <option key={item.key} value={item.value}>{item.text}</option>
              ))
            }
          </select>
        </div>
        <div className='w-1/2 pr-2'>
          <input
            type="text"
            id="searchValue"
            name="searchValue"
            value={searchOption.searchValue}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder='Search...'
            disabled={!searchOption.category}
          />
        </div>
        <div className="w-1/4">
          <Button type='submit' isDisabled={!searchOption.category}>Search</Button>
        </div>
      </div>
    </form>
  )
}

export default Search