"use client";
import Link from "next/link";
import React from "react";

const MenuItem = ({ parent, page, addPage, href }) => {
  const dynamicHref = href || `/${page.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex items-center gap-4 px-2">
      {/* Main Icon */}
      <div>
        {/* Home / Folder Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z"
            stroke="#0E4F53"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15.5H15V17.5H17V15.5Z"
            stroke="#0E4F53"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Parent breadcrumb (optional) */}
      {parent && (
        <>
          <h3 className="text-[#0E4F53] text-xl font-semibold">{parent}</h3>
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
              stroke="#3D3D3D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
              stroke="#3D3D3D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      )}

      {/* Page Name */}
      <Link href={dynamicHref}>
        <h3 className="text-[#0E4F53] text-xl font-semibold">{page}</h3>
      </Link>

      {/* Optional AddPage */}
      {addPage && (
        <>
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
              stroke="#3D3D3D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
              stroke="#3D3D3D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3 className="text-[#0E4F53] text-xl font-semibold">{addPage}</h3>
        </>
      )}
    </div>
  );
};

export default MenuItem;
