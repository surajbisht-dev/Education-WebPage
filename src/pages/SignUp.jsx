import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault(); 
    navigate("/login"); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-6">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create your
          <br />
          PopX account
        </h2>

        <form className="mt-6 space-y-4">
          
          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

          
          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

    
          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

          <div>
            <label className="block text-xs text-[#8F00FF] font-semibold mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8F00FF]"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 font-medium mb-1">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#8F00FF]"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#8F00FF]"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

       
          <button
            type="submit"
            onClick={handleCreateAccount}
            className="w-full bg-[#8F00FF] hover:bg-[#7a00e0] text-white font-bold py-2 rounded-md text-sm mt-6"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
