import { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Admin logged in successfully");
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          toast.success("Doctor logged in successfully");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f0fdfa] via-[#f8fafc] to-[#ecfeff]">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 p-8 min-w-[340px] sm:min-w-96 bg-white border border-gray-200 rounded-2xl text-[#5E5E5E] text-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        <p className="text-2xl font-semibold m-auto text-gray-800">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p className="font-medium text-gray-600">Email</p>
          <input
            className="border border-[#DADADA] rounded-lg w-full p-2 mt-1 focus:border-primary outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p className="font-medium text-gray-600">Password</p>
          <input
            className="border border-[#DADADA] rounded-lg w-full p-2 mt-1 focus:border-primary outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2.5 rounded-lg text-base cursor-pointer mt-2 font-medium">
          Login
        </button>
        {state === "Admin" ? (
          <p className="text-xs text-gray-500 mt-2 text-center w-full">
            Are you a Doctor?{" "}
            <span
              className="text-primary underline cursor-pointer font-medium"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-xs text-gray-500 mt-2 text-center w-full">
            Are you an Admin?{" "}
            <span
              className="text-primary underline cursor-pointer font-medium"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
