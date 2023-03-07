function Register() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-teal-500 text-white hover:bg-teal-700 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-900 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-gray-400 text-gray-900"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-gray-400 text-gray-900"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-gray-900 mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-teal-300 text-cyan-400"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
