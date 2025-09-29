export default function Footer() {
  return (
    <footer className="relative border-t-4 border-black bg-pink-500 text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter">OVER·SCROLL</div>
          <div className="text-xs font-extrabold uppercase tracking-widest">copyright-ish · 20XX</div>
        </div>
        <ul className="flex items-center gap-4 text-sm font-extrabold">
          <li><a className="rounded border-2 border-black bg-yellow-300 px-3 py-1 hover:-rotate-2" href="#">x</a></li>
          <li><a className="rounded border-2 border-black bg-yellow-300 px-3 py-1 hover:rotate-1" href="#">ig</a></li>
          <li><a className="rounded border-2 border-black bg-yellow-300 px-3 py-1 hover:-rotate-1" href="#">yt</a></li>
        </ul>
      </div>
    </footer>
  )
}

