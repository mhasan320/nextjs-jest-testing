import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import AddToDoList from '@/components/AddToDoList'
import SelectBox from '@/components/SelectBox/Index'
import TableComponent from '@/components/TableComponent/Index'
import MuiDataTable from '@/components/MuiDataTable/Index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [clicks, setClicks] = useState(0);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-center" onClick={()=> setClicks(clicks + 1)}>Hello world!</h1>
      <AddToDoList/>
      <SelectBox/>
      <TableComponent/>
      <MuiDataTable/>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width="300"
        height="65"
        className="rounded-md"
      />
    </main>
  )
}
