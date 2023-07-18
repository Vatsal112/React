const RegistrationForm = () => {
  return (
    <div class="flex items-center h-screen w-full bg-teal-500 p-4">
      <div class="w-full bg-white rounded shadow-lg p-8  md:max-w-sm md:mx-auto">
        <h1 class="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
        <form
          class="mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post"
        >
          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
              for="first_name"
            >
              First Name
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="first_name"
              id="first_name"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2"
              for="last_name"
            >
              Last Name
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:ml-2"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="email"
            >
              Email
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div class="flex flex-col mb-6 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="password"
            >
              Password
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            class="block bg-teal-500 hover:bg-teal-700 text-white uppercase md:text-lg mx-auto p-4 rounded sm:text-lg"
            type="button"
          >
            Create Account
          </button>
        </form>
        <a
          class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
          href="/login"
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default RegistrationForm;
