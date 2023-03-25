import {Outlet} from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
export default function Admin() {
  return (
    <div className='flex h-screen overflow-hidden'>

        <div className='w-[20%] bg-slate-700'>
            <AdminSidebar />
        </div>
        <div className='overflow-y-scroll w-full '>
            <Outlet />
        </div>
    </div>
  ) 
}
