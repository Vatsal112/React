const Header = () => {
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
            {/* <li>
              <button
                type="button"
                className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-28 text-center hover:bg-white"
              >
                Reading List
              </button>
            </li> */}
            <li>
              <div className="font-bold">
                <button
                  type="button"
                  className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                >
                  Login
                </button>
              </div>
            </li>
            {/* <li>
              <div className="font-bold">
                <button
                  type="button"
                  className="text-white hover:text-black border border-slate-100 rounded-lg p-2 w-20 text-center hover:bg-white"
                >
                  Logout
                </button>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
