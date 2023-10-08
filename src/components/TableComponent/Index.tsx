import React from 'react'

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'jhonDoe@gmail.com'
    },{
        id: 2,
        name: 'User 2',
        email: 'user@gmail.com'
    },{
        id: 3,
        name: 'User 3',
        email: 'user3@gmail.com'
    }
]
export default function Index() {
  return (
    <div>
        <h1 className='mb-3'>Table Component</h1>
        <table className='border '>
            <thead>
                <tr className='border'>
                    <th className='p-2'>Id</th>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Email</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <tr key={index} className='border'>
                        <td className='p-2'>{item.id}</td>
                        <td className='p-2'>{item.name}</td>
                        <td className='p-2'>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
