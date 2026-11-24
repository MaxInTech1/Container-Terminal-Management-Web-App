export default function Navbar() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2.5">

                    <img
                        src="/dpworld_djen_djen_black_text.png"
                        alt="dpworld_djen_djen"
                        className="h-10 w-auto shrink-0 object-contain"
                    />
                </div>


            </div>

            <span className="text-base font-semibold text-slate-800">Terminal Operating System</span>
            <div>
                
                <button type="button" aria-label="Account" className="flex items-center rounded-full p-1 transition hover:bg-slate-100">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e293b] text-xs font-semibold text-white ring-2 ring-slate-200">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5" />
                        </svg>
                    </span>
                </button>
            </div>
        </header>
    );
}