export default function Home() {
  return (
    <main className="relative px-6 pt-12">
      {/* Gradient blob */}
      <div
        className="absolute top-0 right-0 h-75 w-75 animate-pulse rounded-full bg-linear-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <h1 className="max-w-3xl font-light text-6xl leading-tight tracking-tight">
          SEHYUN&rsquo;s
          <br />
          BEST DIGITAL
          <br />
          WORKSPACE.
        </h1>

        <div className="mt-24 flex justify-between">
          <div className="max-w-md">
            <button className="rounded-full border-2 px-8">
              <span className="relative">
                DISCUSS THE PROJECT
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
              </span>
            </button>
            <p className="mt-8 text-gray-600 text-sm leading-relaxed">
              WE ARE THE LEADERS IN WEB & MOBILE
              <br />
              DESIGN AND DEVELOPMENT INDUSTRY.
            </p>
          </div>

          <div className="flex items-end">
            <div className="flex items-center space-x-2">
              <span className="text-sm">WHO WE ARE</span>
              <span className="h-px w-12 bg-black"></span>
            </div>
          </div>
        </div>

        <p className="mt-24 max-w-xl text-gray-600 text-sm leading-relaxed">
          We create quality content and cool ideas. We create websites, applications, 3D design, motion design
          and animation. We bring the most daring ideas to life
        </p>
      </div>
    </main>
  );
}
