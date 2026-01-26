import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex space-x-2">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-sm">EN</button>
        <Link href="/blog" className="text-sm hover:underline">
          BLOG
        </Link>
        <Link href="/portfolio" className="text-sm hover:underline">
          PORTFOLIO
        </Link>
        <button className="flex flex-col space-y-1">
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </div>
    </header>
  );
}
