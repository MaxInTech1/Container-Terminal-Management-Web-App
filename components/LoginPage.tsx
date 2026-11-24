export default function UserLogin() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#161042]">
      <img
        src="/dpWorldBgLogo.jpg"
        alt="Logo"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div
        className="relative z-10 flex min-h-screen w-[45%] flex-col justify-between bg-white px-16 py-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 74% 100%, 0% 100%)" }}
      >
        <div>
          <img
            src="/DP_World.png"
            alt="DP World Logo"
            className="h-24 w-auto max-w-[170px] object-contain"
          />
        </div>

        <div className="flex w-full max-w-[300px] flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
          />

          <button
            type="submit" 
            className="w-full cursor-pointer rounded border-0 bg-[#c8102e] py-2.5 text-sm font-semibold text-white transition duration-200 ease-in-out hover:-translate-y-px hover:bg-[#a30c24]">Log In
          </button>
        </div>

        <p className="text-xs text-gray-400">All rights reserved to DP World</p>

      </div>
    </div>
  );
}
