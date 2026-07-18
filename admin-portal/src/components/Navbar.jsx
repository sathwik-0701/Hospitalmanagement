import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const adminNavLinks = [
  { to: "/admin/dashboard", icon: assets.home_icon, label: "Dashboard" },
  {
    to: "/admin/all-appointments",
    icon: assets.appointment_icon,
    label: "All Appointments",
  },
  { to: "/admin/add-doctor", icon: assets.add_icon, label: "Add Doctor" },
  { to: "/admin/doctors-list", icon: assets.home_icon, label: "Doctor List" },
];

const doctorNavLinks = [
  { to: "/doctor/dashboard", icon: assets.home_icon, label: "Dashboard" },
  {
    to: "/doctor/appointments",
    icon: assets.appointment_icon,
    label: "My Appointments",
  },
  { to: "/doctor/profile", icon: assets.people_icon, label: "Profile" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const [showMenu, setShowMenu] = useState(false);

  const logoutHandler = () => {
    // Admin logout
    setAToken("");
    localStorage.removeItem("aToken");

    // Doctor logout
    setDToken("");
    localStorage.removeItem("dToken");

    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white sticky top-0 z-40">
      <div className="flex items-center gap-2 text-xs">
        <img
          onClick={() => navigate("/")}
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Logout button for desktop */}
        <button
          onClick={logoutHandler}
          className="cursor-pointer bg-primary text-white text-sm px-10 py-2 rounded-full hidden md:block"
        >
          Logout
        </button>

        {/* Hamburger Menu Icon for Mobile */}
        {(aToken || dToken) && (
          <svg
            onClick={() => setShowMenu(true)}
            className="w-6 h-6 cursor-pointer md:hidden text-gray-700"
            viewBox="0 0 37 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="17" y="24" width="20" height="3" rx="1.5" fill="currentColor"/>
            <rect x="7" y="12" width="30" height="3" rx="1.5" fill="currentColor"/>
            <rect width="37" height="3" rx="1.5" fill="currentColor"/>
          </svg>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {(aToken || dToken) && (
        <div
          className={`fixed md:hidden right-0 top-0 z-50 overflow-hidden bg-white transition-all duration-300 ${
            showMenu ? "w-full h-screen" : "w-0 h-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div className="flex items-center gap-2 text-xs">
              <img className="w-32" src={assets.admin_logo} alt="Logo" />
              <p className="border px-2 py-0.5 rounded-full border-gray-500 text-gray-600 scale-90">
                {aToken ? "Admin" : "Doctor"}
              </p>
            </div>
            <svg
              onClick={() => setShowMenu(false)}
              className="w-6 h-6 cursor-pointer text-gray-700 hover:text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          <ul className="flex flex-col gap-2 mt-5 px-5 text-[#515151]">
            {(aToken ? adminNavLinks : doctorNavLinks).map(
              ({ to, icon, label }) => (
                <NavLink
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-4 rounded-lg cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#F2F3FF] text-primary font-semibold border-l-4 border-primary"
                        : "hover:bg-gray-50"
                    }`
                  }
                  key={to}
                  to={to}
                >
                  <img className="w-5 h-5" src={icon} alt={label} />
                  <p className="text-base">{label}</p>
                </NavLink>
              )
            )}
          </ul>

          <div className="px-5 mt-8">
            <button
              onClick={() => {
                setShowMenu(false);
                logoutHandler();
              }}
              className="w-full cursor-pointer bg-primary text-white text-sm py-3 rounded-lg shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
