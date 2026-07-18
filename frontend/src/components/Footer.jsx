import { assets } from "../assets/assets_frontend/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------- Section 01 ---------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nesciunt illo velit minima similique voluptatibus magnam est alias
            praesentium doloribus quo voluptatem illum, libero, et aspernatur
            excepturi, autem corrupti. Placeat!
          </p>
        </div>

        {/* ---------- Section 02 ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ---------- Section 03 ---------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>040-5558 895</li>
            <li>info@saraswathi.com</li>
          </ul>
        </div>
      </div>
      {/* ---------- Copyright Section ---------- */}
        <p className="py-5 text-sm text-center ">
          Copyright © {new Date().getFullYear()} Sathwik Reddy. All Rights Reserved.
        </p>
    </div>
  );
};

export default Footer;
