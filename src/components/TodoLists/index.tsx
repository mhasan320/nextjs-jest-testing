import React from 'react'

function Index({toDoData}: any) {
  return (
    <div className='flex flex-col'>
        <h1 className='text-center text-xl mb-2'>To do Lists</h1>
        <ul className='ml-5 list-disc'>
            {toDoData.length !== 0 ? toDoData?.map((item : any)=>{
                return <li key={item.id} className='capitalize'>{item.title}</li>
            }) : <p>No Data Found</p>}
        </ul>
    </div>
  )
}

export default Index