export default function Sidebar() {
    return (
        <aside aria-label="Menu" className="flex h-screen w-52 shrink-0 flex-col bg-[#0d122b] px-4 py-4 text-white">
            
            <div className="mb-5 flex shrink-0 items-center gap-2.5 border-b border-white/10 pb-3">
                <img src="/dpworld_djen_djen.png" alt="DP World Logo" className="h-9 w-auto shrink-0 object-contain" />
            </div>

            <nav className="flex flex-1 flex-col gap-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* OPERATIONS */}
                <div>
                    <h2 className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">OPERATIONS</h2>

                    <div className="flex flex-col gap-1 text-left">
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">DISCHARGING</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LOADING</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">STACK CONTAINERS</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">MOVES</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">House Keeping</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">MOVE TO VISIT</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">VISITS</a>
                    </div>
                </div>

                {/* LOGISTICS & GATE */}
                <div>
                    <h2 className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">LOGISTICS &amp; GATE</h2>

                    <div className="flex flex-col gap-1 text-left">
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LIFT ON</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LIFT ON RX</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LIFT ON RO</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LIFT OFF FULL</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">LIFT OFF EMPTY</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">CONTAINERS FLOTA</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">CONTAINERS SSR</a>
                    </div>
                </div>

                {/* CLIENT & GATE */}
                <div>
                    <h2 className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">CLIENT &amp; GATE</h2>
                    
                    <div className="flex flex-col gap-1 text-left">
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">Client Area</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">Repports</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">Gate</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">GATE IN</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">Swapping</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">GATE IN RORO</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">GATE OUT</a>
                        <a href="#" className="block rounded px-1.5 py-0.5 text-[11px] font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">GATE OUT RORO</a>
                    </div>
                </div>
            </nav>
        </aside>
    );
}