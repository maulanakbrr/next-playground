'use client'
import { createContext, useState, useMemo, useCallback } from 'react'

interface SearchOptionInterface {
  category: string,
  searchValue: string
}

interface UserContextInterface {
  searchData: SearchOptionInterface,
  handleSearchData: (value: SearchOptionInterface) => void
}

export const UserContext = createContext<UserContextInterface>({
  searchData: {
    category: '',
    searchValue: ''
  },
  handleSearchData: () => {}
})

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [searchData, setSearchData] = useState<SearchOptionInterface>({
    category: '',
    searchValue: ''
  })

  const handleSearchData = useCallback((value:SearchOptionInterface) => {
    setSearchData(prev => ({
      ...prev,
      ...value
    }))
  }, [setSearchData])
  

  const value = useMemo(() => ({
    searchData,
    handleSearchData
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [searchData])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider