import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react'
const stripOutPath = (pathName) => {
    const shorts = pathName.split('/') ; 
    return shorts[shorts.length-1] ;
}
export default function AdminSidebar() {
    const location = useLocation() ;
    const [cur , setCur] = useState('') ;
    useEffect(()=>{
            setCur(stripOutPath(location.pathname))
    },[]) 
  return (
    <div className="flex flex-col w-full items-center ">
      <div className=" w-full text-center text-neutral-300 py-3 text-4xl cursor-pointer">
        NERIMFY
      </div>
      <div className={`cursor-pointer hover:bg-slate-500 mt-10 border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='dashboard'&& 'font-extrabold'}`}>
        DASHBOARD
      </div>
      <div className={`cursor-pointer hover:bg-slate-500  border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='add-album'&& 'font-extrabold'}`}>
        Add Album
      </div>
      <div className={`cursor-pointer hover:bg-slate-500  border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='add-music'&& 'font-extrabold'}`}>
        Add Music
      </div>
      <div className={`cursor-pointer hover:bg-slate-500  border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='all-albums'&& 'font-extrabold'}`}>
         All Albums
      </div>
      <div className={`cursor-pointer hover:bg-slate-500  border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='all-music'&& 'font-extrabold'}`}>
         All Musics
      </div>
      <div className={`cursor-pointer hover:bg-slate-500  border-b-[1px] border-b-slate-500 w-full text-center py-4 text-xl text-neutral-300 tracking-widest bg-slate-600 ${cur=='all-user'&& 'font-extrabold'}`}>
         All Users
      </div>
      
    </div>
  );
}
