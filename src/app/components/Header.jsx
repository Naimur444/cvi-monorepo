import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm">
      <Link href={"/dashboard/report"}>
        <div className="flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
            >
              <g clip-path="url(#clip0_1437_2126)">
                <path
                  d="M0.192396 18.8701C1.30437 18.8682 2.40961 19.0437 3.46694 19.3899C5.08492 19.9522 6.55813 20.8698 7.77965 22.0759C9.00117 23.282 9.94037 24.7465 10.5291 26.3631C10.8079 27.2505 11.0223 28.1571 11.1704 29.0757C11.3047 29.8664 11.3904 30.6646 11.427 31.4659H16.9499C17.136 30.1078 17.136 28.7304 16.9499 27.3723C16.2369 22.1936 12.985 18.9081 11.8872 17.8306C7.29982 13.3424 1.66745 12.7733 0 12.6709L0.192396 18.8701Z"
                  fill="#0E4F53"
                />
                <path
                  d="M0.0867615 6.2553C3.34049 6.23304 6.5523 6.99403 9.45392 8.47473C10.95 9.26933 12.3511 10.2329 13.6301 11.3467C15.8394 13.1583 17.7416 15.3186 19.2625 17.7432C20.1863 19.2712 20.9451 20.8941 21.526 22.5843C22.5469 25.4515 23.1418 28.4544 23.2915 31.4962H28.7805C28.8726 30.0314 29.1646 28.5863 29.6482 27.2014C30.0519 26.0633 31.7985 21.0667 35.9559 19.6478C36.186 19.5681 36.4387 19.4998 36.4387 19.4998C37.5842 19.1915 38.7784 19.1103 39.9547 19.2608V13.0616C39.2821 13.0008 38.6053 13.0008 37.9327 13.0616C32.1947 13.5737 28.4184 18.373 27.0942 20.2283L23.4122 14.2718C23.6839 14.0214 24.0951 13.6534 24.6006 13.2209C26.8037 11.324 29.4256 9.11211 32.7228 7.82977C35.042 6.95019 37.5171 6.56268 39.9925 6.6916V0.515119C39.4228 0.492356 38.8607 0.492356 38.2609 0.515119C30.2895 0.837601 24.0385 5.52687 20.1226 9.37768C19.6812 8.91483 18.9682 8.19398 18.0364 7.37829C15.9502 5.54584 11.8231 1.92645 5.80213 0.856571C3.92667 0.525282 2.01442 0.45888 0.120716 0.659288L0.0867615 6.2553Z"
                  fill="#0E4F53"
                />
              </g>
              <defs>
                <clipPath id="clip0_1437_2126">
                  <rect
                    width="40"
                    height="31"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-[#0E4F53] font-bold transition-colors duration-300">
            Cloud Vortex Innovation
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <div className="bg-[#FAF9FC] p-2 rounded-lg transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 17L21 21"
              stroke="#0E4F53"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
              stroke="#0E4F53"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="bg-[#FAF9FC] p-2 rounded-lg transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.5 3H11.5C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V11.5"
              stroke="#0E4F53"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M22 5.5C22 7.433 20.433 9 18.5 9C16.572 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
              stroke="#ED1400"
              stroke-width="1.5"
            />
            <path
              d="M7 11H11"
              stroke="#0E4F53"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 16H15"
              stroke="#0E4F53"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/avatar.png"
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full object-cover w-8 h-8 md:w-12 md:h-12"
          />

          <div className="hidden md:block">
            <h3 className="text-[var(--text-primary)] text-xl font-semibold transition-colors duration-300">
              Adil Rahman
            </h3>
            <p className="text-[var(--text-subtitle)] transition-colors duration-300">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
