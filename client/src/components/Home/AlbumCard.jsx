export default function AlbumCard({url,title ,description}) {
  return (
    <div className="max-w-[15em] max-h[16em] rounded-md p-4 transition-all duration-500 cursor-pointer hover:bg-neutral-800 bg-[#101010]">
        <img className="max-w-full max-h-[12em] rounded-md" src={url}/>
        <main className="mt-4 space-y-1">
            <h1 className="text-neutral-300 truncate font-bold">{title}</h1>
            <p className="truncate text-slate-500">{description}</p>
        </main>
    </div>
  )
}
