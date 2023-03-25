import React from "react";
import SideItem from "../Sidebar/SideItem";
import { faker } from "@faker-js/faker";
import AlbumCard from "./AlbumCard";

export default function Home() {
  const dummy = [];
  for (let i = 0; i < 16; i++) {
    let newDum = {
      title: faker.lorem.sentence(4),
      description: faker.lorem.paragraph(),
      url: `https://picsum.photos/700/700?${Math.round(Math.random() * 1000)}`,
    };
    dummy.push(newDum);
  } 
  console.log(dummy.length)
  return (
    <div className=" overflow-hidden  bg-[#222222] p-4">
      <h1 className="text-white text-2xl font-semibold">ALBUMS</h1>
      <div className="w-auto mt-5 justify-between " style={{
        display:'grid',
        justifyContent:'start' ,
        gridTemplateColumns : 'repeat(auto-fit,13em)' ,
        gap:'1em',
        
      }}>
        {dummy.map(dum=>{
          return (
            <>
              <AlbumCard url={dum.url} title={dum.title} description={dum.description}/>
            </>
          )
        })}
      </div>
    </div>
  );
}
