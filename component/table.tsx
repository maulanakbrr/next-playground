'use client'
import { UserContext } from '@/app/user/context';
import React, { useState, useEffect, useContext } from 'react'
import { UserColumnInterface } from '@/app/user/page';
import { VscEllipsis } from "react-icons/vsc";

type AnyArray<T = any> = T[];

interface TableProps {
  url: string,
  column: UserColumnInterface[]
}

const getData = async (url:string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} 

const Table:React.FC<TableProps> = ({url, column}) => {
  const { searchData } = useContext(UserContext)
  const { category, searchValue } = searchData

  const [data, setData] = useState<AnyArray>([])

  useEffect(() => {
    const fetchData = async () => {
      const urlFetch = searchData ? `${url}?category=${category}&searchValue=${searchValue}` : url
      const res = await getData(urlFetch)

      setData(res.res)
    }

    fetchData()
  }, [category, searchValue, searchData, url])

  console.log('DATA:: ', data)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {column.map(head => (
              <th className="py-2 px-4 border-b text-left" key={head.name}>{head.text}</th>
            ))}
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row:any) => (
            <tr key={row.id}>
              {
                column.map(item => (
                  <td key={item.name} className="py-2 px-4 border-b">{row[item.name]}</td>
                ))
              }
              <td className="py-2 px-4 border-b">
                <VscEllipsis/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table