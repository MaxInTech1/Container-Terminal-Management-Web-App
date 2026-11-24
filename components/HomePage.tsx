export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1.5 rounded-full bg-[#0d122b]" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0d122b]">DP World Djen Djen Port Operations</h1>
            <p className="text-xs text-slate-500">Internal Terminal &amp; Container Management Portal</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0d122b]">Operations</h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">7 Modules</span>
          </div>
          <p className="mb-3 text-xs leading-relaxed text-slate-600">Manage vessel discharging, loading sequences, yard container stacking, internal moves, and active visits.</p>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-700">
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Discharging</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Loading</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Moves</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Visits</span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0d122b]">Logistics &amp; Gate</h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">7 Modules</span>
          </div>
          <p className="mb-3 text-xs leading-relaxed text-slate-600">Track container lift-on and lift-off operations (full, empty, RX, RO) along with flota and SSR inventories.</p>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-700">
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Lift On</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Lift Off</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Flota</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">SSR</span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0d122b]">Client &amp; Gate</h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">8 Modules</span>
          </div>
          <p className="mb-3 text-xs leading-relaxed text-slate-600">Manage container gate-in and gate-out movements, swapping, and container positions in the yard (Client Area).</p>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-700">
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Gate In</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Gate Out</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Swapping</span>
            <span className="rounded bg-[#eef2f6] px-2 py-0.5">Client Area</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-xs text-slate-600">
        <span>Select an operation from the menu on the right to begin.</span>
        <span className="font-semibold text-[#0d122b]">Terminal: DP World Djen Djen</span>
      </div>
    </div>
  );
}