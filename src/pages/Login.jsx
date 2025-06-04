import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-6">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="space-y-4">
          
          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

        
          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

       
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 rounded-md text-sm mt-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
