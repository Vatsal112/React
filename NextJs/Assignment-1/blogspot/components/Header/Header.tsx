import { signIn, signOut, useSession } from "next-auth/react";
import userIcon from "@/public/user.png";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const signOutHandler = () => {
    signOut({
      callbackUrl:
        process.env.NODE_ENV === "production"
          ? process.env.PRODUCTION_URL
          : process.env.LOCAL_URL,
    });
  };
  const { status, data: session } = useSession();
  return (
    <header className="w-full sm:px-0 lg:px-20 xl:px-20 md:px-20 py-3  bg-slate-900 text-white sticky top-0 z-10">
      <nav className="w-full">
        <div>
          <ul className="flex justify-between flex-wrap items-center lg:flex-row md:flex-row xl:flex-row sm:flex-col">
            <li>
              <Link href="/blog">
                <p className="text-2xl font-bold text-center ">BlogSpot</p>
              </Link>
            </li>

            {session && (
              <li>
                <Link
                  href="/bookmark"
                  className="text-white mr-3 font-bold sm:text-sm md:text-base xl:text-base hover:text-black border border-slate-100 rounded-lg p-2  hover:bg-white"
                >
                  Reading List
                </Link>
              </li>
            )}

            <div className="sm:flex sm:w-auto justify-between items-center w-full sm:py-4">
              {!session && status !== "loading" && (
                <>
                  <li>
                    <div className="font-bold">
                      <Link
                        href="#"
                        onClick={() => signIn()}
                        className="text-white hover:text-black border mr-3 border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                      >
                        Sign In
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="font-bold">
                      <Link
                        href="/signup"
                        className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </li>
                </>
              )}
              {session && (
                <>
                  <li>
                    <div className="text-lg font-semibold flex items-center justify-center text-white mr-5">
                      <Image
                        src={userIcon}
                        width={30}
                        height={30}
                        alt="User icon"
                      />
                      <span className="ml-2">{session.user?.name}</span>
                    </div>
                  </li>
                  <li>
                    <div className="font-bold">
                      <Link
                        href="/api/auth/singout"
                        onClick={(e) => {
                          e.preventDefault();
                          signOutHandler();
                        }}
                        className="text-white hover:text-black border sm:text-sm md:text-base xl:text-base border-slate-100 rounded-lg p-2 text-center hover:bg-white"
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
