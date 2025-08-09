import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto pt-36 pb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="cursor-pointer flex items-center gap-2 mb-2">
            <Link href="/" className="flex items-center gap-2 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
              >
                <g clipPath="url(#clip0_964_16)">
                  <path
                    d="M0.192396 18.8701C1.30437 18.8682 2.40961 19.0436 3.46694 19.3899C5.08492 19.9522 6.55813 20.8697 7.77965 22.0759C9.00117 23.282 9.94037 24.7465 10.5291 26.3631C10.8079 27.2505 11.0223 28.1571 11.1704 29.0757C11.3047 29.8664 11.3904 30.6646 11.427 31.4659H16.9499C17.136 30.1077 17.136 28.7304 16.9499 27.3722C16.2369 22.1936 12.985 18.908 11.8872 17.8306C7.29982 13.3424 1.66745 12.7733 0 12.6709L0.192396 18.8701Z"
                    fill="#0E4F53"
                  />
                  <path
                    d="M0.0866699 6.25536C3.3404 6.2331 6.5522 6.99409 9.45383 8.47479C10.9499 9.26939 12.351 10.2329 13.63 11.3468C15.8393 13.1583 17.7415 15.3186 19.2624 17.7433C20.1862 19.2713 20.945 20.8942 21.5259 22.5843C22.5468 25.4515 23.1417 28.4545 23.2914 31.4962H28.7804C28.8725 30.0314 29.1645 28.5863 29.6481 27.2015C30.0518 26.0633 31.7985 21.0668 35.9558 19.6478C36.1859 19.5682 36.4386 19.4999 36.4386 19.4999C37.5841 19.1915 38.7783 19.1103 39.9546 19.2609V13.0616C39.282 13.0008 38.6052 13.0008 37.9326 13.0616C32.1946 13.5738 28.4183 18.3731 27.0941 20.2283L23.4121 14.2719C23.6838 14.0215 24.095 13.6535 24.6005 13.221C26.8036 11.324 29.4255 9.11217 32.7227 7.82983C35.0419 6.95026 37.517 6.56274 39.9924 6.69166V0.51518C39.4227 0.492417 38.8606 0.492417 38.2608 0.51518C30.2894 0.837662 24.0384 5.52693 20.1225 9.37774C19.6811 8.91489 18.9681 8.19404 18.0363 7.37836C15.9501 5.5459 11.823 1.92651 5.80203 0.856633C3.92658 0.525343 2.01433 0.458941 0.120624 0.659349L0.0866699 6.25536Z"
                    fill="#0E4F53"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_964_16">
                    <rect
                      width="40"
                      height="31"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-semibold">Cloud Vortex Innovation</span>
            </Link>
          </div>

          <p className=" ">
            This is a cloud. A vortex of innovation is just the beginning.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Link
            href="https://www.facebook.com/profile.php?id=61557546942505"
            target="_blank"
            className="bg-[#0E4F53] text-white w-8 h-8 rounded-full flex items-center justify-center p-2"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.linkedin.com/company/cloud-vortex-innovation-technology"
            target="_blank"
            className="bg-[#0E4F53] text-white w-8 h-8 rounded-full flex items-center justify-center p-2"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://x.com/home"
            target="_blank"
            className="bg-[#0E4F53] text-white w-8 h-8 rounded-full flex items-center justify-center p-2"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="https://www.youtube.com/@creativeCVI"
            target="_blank"
            className="bg-[#0E4F53] text-white w-8 h-8 rounded-full flex items-center justify-center p-2"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#0E4F53] my-8"></div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="  font-semibold text-[13px]">
          Copyright © 2025 Cloud Vortex Innovation All rights reserved.
        </p>

        <div className="flex items-center gap-4 flex-wrap mt-4 md:mt-0">
          <Link
            href="/privacy-policy"
            className="  font-semibold text-[13px] pr-4 border-r-2 border-[#0E4F53]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="  font-semibold text-[13px] pr-4 border-r-2 border-[#0E4F53]"
          >
            Terms and Conditions
          </Link>

          <div className="bg-[#0E4F53] p-1 rounded-sm flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
              >
                <g clip-path="url(#clip0_964_1130)">
                  <path
                    d="M0.101008 9.48135C0.684794 9.48036 1.26505 9.57091 1.82014 9.74961C2.66958 10.0399 3.44302 10.5134 4.08432 11.1359C4.72561 11.7585 5.21869 12.5143 5.52777 13.3487C5.67416 13.8067 5.78669 14.2746 5.86447 14.7488C5.93496 15.1568 5.97994 15.5688 5.99915 15.9824H8.89871C8.99638 15.2814 8.99638 14.5705 8.89871 13.8695C8.52438 11.1967 6.81713 9.50093 6.24078 8.94481C3.8324 6.62833 0.875413 6.33461 0 6.28174L0.101008 9.48135Z"
                    fill="white"
                  />
                  <path
                    d="M0.0454102 2.97051C1.75362 2.95902 3.43982 3.35179 4.96317 4.11602C5.74861 4.52614 6.48419 5.02345 7.15566 5.59834C8.31555 6.53334 9.31421 7.64832 10.1127 8.89977C10.5977 9.68841 10.996 10.526 11.301 11.3984C11.837 12.8782 12.1493 14.4281 12.2279 15.998H15.1096C15.158 15.242 15.3113 14.4962 15.5652 13.7814C15.7771 13.194 16.6941 10.6151 18.8767 9.88276C18.9975 9.84164 19.1302 9.80639 19.1302 9.80639C19.7316 9.64724 20.3585 9.60534 20.9761 9.68303V6.48342C20.6229 6.45204 20.2677 6.45204 19.9145 6.48342C16.9021 6.74777 14.9195 9.22482 14.2243 10.1824L12.2913 7.10807C12.4339 6.97883 12.6498 6.78889 12.9152 6.56566C14.0718 5.58659 15.4483 4.44499 17.1793 3.78314C18.3969 3.32916 19.6963 3.12916 20.9959 3.19569V0.00783509C20.6968 -0.00391378 20.4017 -0.00391378 20.0868 0.00783509C15.9019 0.174277 12.6201 2.59454 10.5642 4.58206C10.3325 4.34317 9.95817 3.97112 9.46897 3.55012C8.37371 2.60433 6.20697 0.736265 3.04598 0.184068C2.06136 0.0130803 1.05743 -0.0211916 0.0632361 0.0822448L0.0454102 2.97051Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_964_1130">
                    <rect width="21" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="bg-[#EFFEFD] py-1 px-2 rounded-sm text-[#0E4F53] text-[13px]">
              Made With CVI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
