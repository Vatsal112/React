import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
const Header = () => {
  const [session, loading] = useSession();
  return (
    <header className="w-full px-20  py-5 bg-slate-900 text-white sticky top-0 ">
      <nav className="w-full">
        <div>
          <ul className="flex justify-between flex-wrap items-center">
            <li>
              <div>
                <p className="text-2xl font-bold text-center ">BlogSpot</p>
              </div>
            </li>
            {session && (
              <li>
                <Link
                  href='/bookmark'
                  className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-28 text-center hover:bg-white"
                >
                  Reading List
                </Link>
              </li>
            )}
            {!session && !loading && (
              <li>
                <div className="font-bold">
                  <Link
                    href='/api/auth/signin'
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
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
                    href='/api/auth/singout'
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                    className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                  >
                    Logout
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
