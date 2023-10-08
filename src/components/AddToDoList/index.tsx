import React, {useState} from 'react'
import ToDoLists from '@/components/TodoLists'

export default function Index() {
    const [toDoData, setToDoData] = useState([{
        id:1,
        title:'title1',
        content:'content1',
        status:'todo'
    },{
        id:2,
        title:'title2',
        content:'content2',
        status:'doing'
    },{
        id:3,
        title:'title3',
        content:'content3',
        status:'done'
    }])

    const [toDoLists, setToDoLists] = useState({
        id: 4,
        title: '',
        content: '',
        status: 'todo',
    });
    const submitHandler = (e: any) => {
        e.preventDefault();
        if(!toDoLists.title || !toDoLists.content) return;
        setToDoData([...toDoData, toDoLists]);
        setToDoLists({
            id:  1,
            title: '',
            content: '',
            status: '',
        });
    }
  
  return (
    <div>
        <ToDoLists toDoData={toDoData}/>
        <form onSubmit={submitHandler} className='gap-5 flex flex-col items-center mt-5'>
            <input type="text"
            placeholder='Title'
            value={toDoLists.title}
            className='w-full p-2 border border-black rounded-md'
            onChange={
                (prev) => setToDoLists({...toDoLists, title: prev.target.value})
            }/>
            <textarea
            placeholder='Content'
            value={toDoLists?.content}
            className='w-full p-2 border border-black rounded-md'
            onChange={(prev) => setToDoLists({...toDoLists, content: prev.target.value})}/>
            <button className='w-full bg-green-600 text-white py-2 rounded-md'>Submit</button>
        </form>
    </div>
  )
}
