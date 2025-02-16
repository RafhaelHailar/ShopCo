import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import VisaLogo from "/logo/visa.svg";
import MasterCardLogo from "/logo/mastercard.svg";
import PayPalLogo from "/logo/paypal.svg";
import ApplePayLogo from "/logo/apple-pay.svg";
import GooglePayLogo from "/logo/google-pay.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container-padding">
        <div className="bg-black px-6 lg:px-16 gap-y-8 flex flex-col xl:flex-row gap-x-12 py-8 xl:py-12 rounded-3xl -mb-25 items-center z-10 relative">
          <div>
            <h2 className="text-white text-3xl xl:text-5xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-full xl:w-2/4 flex flex-col gap-y-3">
            <div className="bg-white flex px-5 py-2 rounded-4xl gap-x-4">
              <TfiEmail className="text-gray-200 text-2xl" />
              <input
                type="text"
                className="w-full outline-none text-sm lg:text-md"
                placeholder="Enter your email address"
              />
            </div>
            <button className="text-sm lg:text-md bg-white w-full rounded-4xl py-2 font-bold cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 relative container-padding pt-38 pb-24">
        <div className="grid grid-cols-5 gap-y-7">
          <div className="flex flex-col gap-y-5 xl:gap-y-7 col-span-5 xl:col-span-1">
            <h2 className="text-4xl -mb-2 xl:-mb-0">SHOP.CO</h2>
            <p className="text-md text-gray-500">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex gap-x-3">
              <li>
                <a href="#">
                  <div className="hover:bg-black hover:text-white bg-white p-2 rounded-full border-gray-300 border">
                    <FaXTwitter />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="hover:bg-black hover:text-white bg-white p-2 rounded-full border-gray-300 border">
                    <FaFacebookF />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="hover:bg-black hover:text-white bg-white p-2 rounded-full border-gray-300 border">
                    <FaInstagram />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="hover:bg-black hover:text-white bg-white p-2 rounded-full border-gray-300 border">
                    <IoLogoGithub />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-start xl:justify-end xl:col-span-1 col-span-2">
            <div className="flex flex-col gap-y-4 xl:gap-y-9">
              <h5 className="text-md lg:text-lg xl:text-xl font-semibold">
                COMPANY
              </h5>
              <ul className="flex flex-col gap-y-4 text-gray-600 text-sm lg:text-md">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end xl:col-span-1 col-span-3">
            <div className="flex flex-col gap-y-4 xl:gap-y-9">
              <h5 className="text-md lg:text-lg xl:text-xl font-semibold">
                HELP
              </h5>
              <ul className="flex flex-col gap-y-4 text-gray-600 text-sm lg:text-md">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Delivery Details</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-start xl:justify-end xl:col-span-1 col-span-2">
            <div className="flex flex-col gap-y-4 xl:gap-y-9">
              <h5 className="text-md lg:text-lg xl:text-xl font-semibold">
                FAQ
              </h5>
              <ul className="flex flex-col gap-y-4 text-gray-600 text-sm lg:text-md">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Manage Deliveries</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end xl:col-span-1 col-span-3">
            <div className="flex flex-col gap-y-4 xl:gap-y-9">
              <h5 className="text-md lg:text-lg xl:text-xl font-semibold">
                RESOURCES
              </h5>
              <ul className="flex flex-col gap-y-4 text-gray-600 text-sm lg:text-md">
                <li>
                  <a href="#">Free eBooks</a>
                </li>
                <li>
                  <a href="#">Development Tutorial</a>
                </li>
                <li>
                  <a href="#">How to - Blog</a>
                </li>
                <li>
                  <a href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-0.5 bg-gray-200 col-span-5 mt-4 xl:mt-15"></div>
          <div className="text-sm text-center xl:text-left text-gray-700 col-span-5 xl:col-span-4">
            <p>Shop.co &copy; 2000-2025. All Rights Reserved</p>
          </div>
          <ul className="flex justify-center xl:justify-start gap-x-3 col-span-5 xl:col-span-1">
            <li className="bg-white flex justify-center items-center w-12 xl:w-15 h-8 rounded-md border border-gray-200">
              <img src={VisaLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-12 xl:w-15 h-8 rounded-md border-gray-200">
              <img src={MasterCardLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-12 xl:w-15 h-8 rounded-md border-gray-200">
              <img src={PayPalLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-12 xl:w-15 h-8 rounded-md border-gray-200">
              <img src={ApplePayLogo} className="mt-2" />
            </li>
            <li className="bg-white flex justify-center items-center w-12 xl:w-15 h-8 rounded-md border-gray-200">
              <img src={GooglePayLogo} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
