import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
const Header = () => {
  const [session, loading] = useSession();
  return (
    <header className="w-full sm:px-0 lg:px-20 xl:px-20 md:px-20 py-5 bg-slate-900 text-white sticky top-0 z-10">
      <nav className="w-full">
        <div>
          <ul className="flex justify-between flex-wrap items-center lg:flex-row md:flex-row xl:flex-row sm:flex-col">
            <li>
              <Link href="/blog">
                <p className="text-2xl font-bold text-center pb-3">BlogSpot</p>
              </Link>
            </li>
            <div className="sm:flex sm:w-auto justify-between items-center sm:py-4">
            {session && (
              <li>
                <Link
                  href="/bookmark"
                  className="text-white mr-3 font-bold sm:text-sm hover:text-black border border-slate-100 rounded-lg p-2 text-center hover:bg-white"
                >
                  Reading List
                </Link>
              </li>
            )}
            {!session && !loading && (
              <li>
                <div className="font-bold">
                  <Link
                    href="/api/auth/signin"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                    className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                  >
                    Login
                  </Link>
                </div>
              </li>
            )}
            {session && (
              <li>
                <div className="font-bold">
                  <Link
                    href="/api/auth/singout"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                    className="text-white hover:text-black border sm:text-sm border-slate-100 rounded-lg p-2 text-center hover:bg-white"
                  >
                    Logout
                  </Link>
                </div>
              </li>
            )}
            </div>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
