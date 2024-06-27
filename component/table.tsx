import React from 'react'

type AnyArray<T = any> = T[];

interface TableProps {
  url: string,
  isFiltered: boolean,
  filterOption: AnyArray | undefined,
  column: string[] 
}

const getData = async (url:string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
} 

const Table:React.FC<TableProps> = async ({url, isFiltered, filterOption, column}) => {
  const res = await getData(url)
  const data = res.res
  console.log('DATA:: ', data)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {column.map(head => (
              <th className="py-2 px-4 border-b" key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row:any) => (
            <tr key={row.id}>
              {
                Object.keys(row).filter(item => item !== 'id').map((key) => {
                  return (
                    <td className="py-2 px-4 border-b" key={key}>{row[key]}</td>
                  )
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table