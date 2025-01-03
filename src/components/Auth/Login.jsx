import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    setemail("");
    setpassword("");
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex justify-start items-center w-[24%] mx-auto ">
          <h1 className="text-3xl font-bold py-10">Login</h1>
        </div>
        <div className="w-full h-[75%]">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
            className="flex h-full flex-col justify-center items-center gap-5 mx-auto "
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="w-[25%] h-8 rounded-full border-2 border-emerald-600 bg-transparent placeholder:text-gray-400 px-6 py-6 outline-none"
              placeholder="Enter you email..."
              type="email"
              name=""
              id=""
            />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="w-[25%] h-8 rounded-full border-2 border-emerald-600 bg-transparent placeholder:text-gray-400 px-6 py-6 outline-none"
              placeholder="Enter you email..."
              type="password"
              name=""
              id=""
            />
            <div className="flex justify-between items-center w-[22%] text-sm">
              <div className="flex justify-center items-center gap-2 text-gray-400">
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <div>
                <h1 className="text-emerald-600 cursor-pointer">
                  Forgot Password
                </h1>
              </div>
            </div>
            <button className="w-[25%] rounded-full hover:border-emerald-600 hover:border-2 hover:bg-transparent bg-emerald-900 placeholder:text-gray-400 px-6 py-[10px] font-semibold hover:py-[8px]">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
