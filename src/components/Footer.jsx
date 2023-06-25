import React from "react";

const Footer = () => {
  const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  return (
    <div>
      <div>
        <p className="bg-gray-700 text-slate-200 flex justify-center py-4 text-sm xl:text-base">Back to top</p>
      </div>
      {/* Middle Footer */}
      <div className="flex row bg-miniAmazon-light_blue text-white justify-evenly py-12">
        <div className="col col-span-4">
          <p className="font-bold text-lg">Get to Know Us</p>
          <div className="text-md py-1 flex flex-col space-y-1 text-gray-300">
            <p>About Us</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
        </div>
        <div className="col col-span-4">
          <p className="font-bold text-lg">Connect with Us</p>
          <div className="text-md py-1 flex flex-col space-y-1 text-gray-300">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="col col-span-4">
          <p className="font-bold text-lg">Make Money with Us</p>
          <div className="text-md py-1 flex flex-col space-y-1 text-gray-300">
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>
        </div>
        <div className="col col-span-4">
          <p className="font-bold text-lg">Let Us Help You</p>
          <div className="text-md py-1 flex flex-col space-y-1 text-gray-300">
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      {/* End footer */}
      {/* <div className=" divide-y divide-gray-400 min-w-[400px]">
        <div className="bg-miniAmazon-light_blue text-gray-300 flex space-x-4 text-sm justify-center">
          {countries.map((country, index) => (
            <p key={index}>{country}</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
