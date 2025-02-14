import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import VisaLogo from "/logo/visa.svg";
import MasterCardLogo from "/logo/mastercard.svg";
import PayPalLogo from "/logo/paypal.svg";
import ApplePayLogo from "/logo/apple-pay.svg";
import GooglePayLogo from "/logo/google-pay.svg";

export default function MarketingFooter() {
  return (
    <footer>
      <div className="px-24">
        <div className="bg-black px-16 flex gap-x-12 py-12 rounded-3xl -mb-25 items-center z-10 relative">
          <div>
            <h2 className="text-white text-5xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-2/4 flex flex-col gap-y-3">
            <div className="bg-white flex px-5 py-2 rounded-4xl gap-x-2">
              <TfiEmail className="text-gray-200 text-2xl" />
              <input
                type="text"
                className="font-bold w-full outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <button className="bg-white w-full rounded-4xl py-2 font-bold cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 relative px-24 pt-38 pb-24">
        <div className="grid grid-cols-5 gap-y-7">
          <div className="flex flex-col gap-y-7">
            <h2 className="text-4xl">SHOP.CO</h2>
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
          <div className="flex justify-end">
            <div className="flex flex-col gap-y-9">
              <h5 className="text-xl font-semibold">COMPANY</h5>
              <ul className="flex flex-col gap-y-4 text-gray-600">
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
          <div className="flex justify-end">
            <div className="flex flex-col gap-y-9">
              <h5 className="text-xl font-semibold">HELP</h5>
              <ul className="flex flex-col gap-y-4 text-gray-600">
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
          <div className="flex justify-end">
            <div className="flex flex-col gap-y-9">
              <h5 className="text-xl font-semibold">FAQ</h5>
              <ul className="flex flex-col gap-y-4 text-gray-600">
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
          <div className="flex justify-end">
            <div className="flex flex-col gap-y-9">
              <h5 className="text-xl font-semibold">RESOURCES</h5>
              <ul className="flex flex-col gap-y-4 text-gray-600">
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
          <div className="h-0.5 bg-gray-200 col-span-5 mt-15"></div>
          <div className="text-sm text-gray-700 col-span-4">
            <p>Shop.co &copy; 2000-2025. All Rights Reserved</p>
          </div>
          <ul className="flex gap-x-3">
            <li className="bg-white flex justify-center items-center w-15 h-8 rounded-md border border-gray-200">
              <img src={VisaLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-15 h-8 rounded-md border-gray-200">
              <img src={MasterCardLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-15 h-8 rounded-md border-gray-200">
              <img src={PayPalLogo} />
            </li>
            <li className="bg-white flex justify-center items-center w-15 h-8 rounded-md border-gray-200">
              <img src={ApplePayLogo} className="mt-2" />
            </li>
            <li className="bg-white flex justify-center items-center w-15 h-8 rounded-md border-gray-200">
              <img src={GooglePayLogo} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
