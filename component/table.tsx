'use client'
import { UserContext } from '@/app/user/context';
import React, { useState, useEffect, useContext } from 'react'
import { UserColumnInterface } from '@/app/user/page';
import { VscEllipsis } from "react-icons/vsc";
import Tooltip from './tooltip';
import Link from 'next/link';

type AnyArray<T = any> = T[];

interface TableProps {
  url: string,
  column: UserColumnInterface[]
}

interface ITableTooltip {
  id: string,
  feature: string[]
}

const tableTooltipFeature = ['edit', 'delete']

const getData = async (url:string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const ActionMore:React.FC<ITableTooltip> = ({id, feature}) => {
  return (
    <div className='flex flex-col'>
      {
        feature.map(item => (
          <Link key={item} href={`/user/${item}/${id}`} className='mb-2 hover:cursor-pointer'>{item}</Link>
        ))
      }
    </div>
  )
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
    <div className="overflow-x-hidden">
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
              <td className="group py-2 px-4 border-b relative">
                <Tooltip position='top' item={<ActionMore id={row.id} feature={tableTooltipFeature}/>}>
                  <VscEllipsis/>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table