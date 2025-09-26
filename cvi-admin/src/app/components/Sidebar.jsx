"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigation } from "../../contexts/NavigationContext";
import toast from "react-hot-toast";

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { navigate } = useNavigation();
  const [manuallyExpanded, setManuallyExpanded] = useState(new Set());
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handle logout
  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Define all menu items in one place
  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 13h6v8H3v-8zM9 3h6v18H9V3zM15 9h6v12h-6V9z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      submenu: [
        { label: "Visit Report", path: "/dashboard/report" },
        { label: "Submit Form", path: "/dashboard/submit-form" },
      ],
    },
    {
      key: "content",
      label: "Content",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 7H15C18.2998 7 19.9497 7 20.9749 8.02513C22 9.05025 22 10.7002 22 14V15C22 18.2998 22 19.9497 20.9749 20.9749C19.9497 22 18.2998 22 15 22H14C10.7002 22 9.05025 22 8.02513 20.9749C7 19.9497 7 18.2998 7 15V9"
            stroke="#0E4F53"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7H5"
            stroke="#0E4F53"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 5V2"
            stroke="#0E4F53"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      submenu: [
        { label: "Hero Section", path: "/content/hero-section" },
        { label: "Partner", path: "/content/partner" },
        { label: "Advantages", path: "/content/advantages" },
        { label: "Client Feedback", path: "/content/client-feedback" },
        { label: "Terms", path: "/content/terms" },
        { label: "Policy", path: "/content/policy" },
        { label: "FAQs", path: "/content/faqs" },
        { label: "Contact Form", path: "/content/contact-form" },
      ],
    },

    {
      key: "contact",
      label: "Contact Us",
      path: "/contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6C17.9531 4.44655 17.7797 3.51998 17.1377 2.87868C16.2581 2 14.8423 2 12.0108 2H8.0065C5.17501 2 3.75926 2 2.87963 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87963 21.1213C3.75926 22 5.17501 22 8.0065 22H12.0108C14.8423 22 16.2581 22 17.1377 21.1213C17.7797 20.48 17.9531 19.5535 18 18"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.2419 11.7419L21.419 10.5648C21.6894 10.2944 21.8246 10.1592 21.8969 10.0134C22.0344 9.73584 22.0344 9.41003 21.8969 9.13252C21.8246 8.98666 21.6894 8.85145 21.419 8.58104C21.1485 8.31062 21.0133 8.17542 20.8675 8.10314C20.59 7.96562 20.2642 7.96562 19.9866 8.10314C19.8408 8.17542 19.7056 8.31062 19.4352 8.58104L18.2581 9.7581M20.2419 11.7419L14.9757 17.0081L12 18L12.9919 15.0243L18.2581 9.7581M20.2419 11.7419L18.2581 9.7581"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19H6L7.25 16.5L8.5 19H9.5"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6H14"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10H12"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "about",
      label: "About Us",
      path: "/about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.51256 9.48744C4.02513 10 4.85008 10 6.5 10C8.14992 10 8.97487 10 9.48744 9.48744C10 8.97487 10 8.14992 10 6.5C10 4.85008 10 4.02513 9.48744 3.51256C8.97487 3 8.14992 3 6.5 3C4.85008 3 4.02513 3 3.51256 3.51256C3 4.02513 3 4.85008 3 6.5C3 8.14992 3 8.97487 3.51256 9.48744Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.51256 20.4874C4.02513 21 4.85008 21 6.5 21C8.14992 21 8.97487 21 9.48744 20.4874C10 19.9749 10 19.1499 10 17.5C10 15.8501 10 15.0251 9.48744 14.5126C8.97487 14 8.14992 14 6.5 14C4.85008 14 4.02513 14 3.51256 14.5126C3 15.0251 3 15.8501 3 17.5C3 19.1499 3 19.9749 3.51256 20.4874Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 4H21"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 15H21"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9H21"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 20H21"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "portfolio",
      label: "Portfolio",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 14C2 11.1911 2 9.78661 2.67412 8.77772C2.96596 8.34096 3.34096 7.96596 3.77772 7.67412C4.78661 7 6.19108 7 9 7H15C17.8089 7 19.2134 7 20.2223 7.67412C20.659 7.96596 21.034 8.34096 21.3259 8.77772C22 9.78661 22 11.1911 22 14C22 16.8089 22 18.2134 21.3259 19.2223C21.034 19.659 20.659 20.034 20.2223 20.3259C19.2134 21 17.8089 21 15 21H9C6.19108 21 4.78661 21 3.77772 20.3259C3.34096 20.034 2.96596 19.659 2.67412 19.2223C2 18.2134 2 16.8089 2 14Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7C16 5.11438 16 4.17157 15.4142 3.58579C14.8284 3 13.8856 3 12 3C10.1144 3 9.17157 3 8.58579 3.58579C8 4.17157 8 5.11438 8 7"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 11L6.65197 11.202C10.0851 12.266 13.9149 12.266 17.348 11.202L18 11M12 12V14"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      submenu: [
        { label: "Header", path: "/portfolio/header" },
        { label: "Category", path: "/portfolio/category" },
        { label: "Work", path: "/portfolio/work" },
      ],
    },

    {
      key: "career",
      label: "Career",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12.5V6.5"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      submenu: [
        { label: "Header", path: "/career/header" },
        { label: "Jobs", path: "/career/jobs" },
        { label: "Applied", path: "/career/applied" },
      ],
    },

    {
      key: "Services",
      label: "Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 15C19.55 14.33 19.63 13.67 19.63 13C19.63 12.33 19.55 11.67 19.4 11M4.6 11C4.45 11.67 4.37 12.33 4.37 13C4.37 13.67 4.45 14.33 4.6 15M16.95 19.05C16.3 19.2 15.65 19.28 15 19.28C14.35 19.28 13.7 19.2 13.05 19.05M10.95 4.95C11.6 4.8 12.25 4.72 12.9 4.72C13.55 4.72 14.2 4.8 14.85 4.95"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.07 19.07L17.65 17.65M6.35 6.35L4.93 4.93M19.07 4.93L17.65 6.35M6.35 17.65L4.93 19.07"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      submenu: [{ label: "Header", path: "/services/header" }],
    },
  ];

  const isActive = useCallback(
    (href) => pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  );

  const toggleMenu = useCallback((menuKey) => {
    setManuallyExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(menuKey)) {
        newSet.delete(menuKey);
      } else {
        newSet.add(menuKey);
      }
      return newSet;
    });
  }, []);

  const isMenuExpanded = useCallback(
    (menuKey) => {
      // Menu is expanded if user manually expanded it OR if it has an active submenu
      return (
        manuallyExpanded.has(menuKey) ||
        menuItems
          .find((item) => item.key === menuKey)
          ?.submenu?.some((sub) => isActive(sub.path)) ||
        false
      );
    },
    [manuallyExpanded, menuItems, isActive]
  );

  // Optimized navigation handler with click prevention
  const handleNavigation = useCallback(
    (href, event) => {
      // Prevent default and stop propagation
      event?.preventDefault();
      event?.stopPropagation();

      // Use the navigation hook
      navigate(href);
    },
    [navigate]
  );

  return (
    <aside className="bg-white py-4 px-3 rounded-2xl w-full flex items-center justify-center relative shadow-lg hover:shadow-xl transition-all duration-500 ease-out">

      <div className="w-full">
        <nav className="flex flex-col gap-2.5 w-full">
          {menuItems.map((item, index) => (
            <div key={item.key}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.key)}
                    aria-expanded={isMenuExpanded(item.key)}
                    aria-controls={`${item.key}-submenu`}
                    className={`flex items-center justify-between w-full px-3 py-2.5 text-left cursor-pointer rounded-lg transition-all duration-200 ease-out ${
                      isMenuExpanded(item.key) ||
                      item.submenu.some((sub) => isActive(sub.path))
                        ? "bg-gradient-to-r from-[#FAF9FC] to-[#F0F0F0] text-[#0E4F53] rounded-lg border-l-4 border-[#0E4F53] shadow-md"
                        : "text-[#0E4F53] hover:bg-gradient-to-r hover:from-[#FAF9FC] hover:to-[#F0F0F0] hover:rounded-lg hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="transition-transform duration-300 hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        isMenuExpanded(item.key) ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M12 6.00003C12 6.00003 9.05407 10 8 10C6.94587 10 4 6 4 6"
                        stroke="#0E4F53"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id={`${item.key}-submenu`}
                    className={`ml-6 mt-2 overflow-hidden transition-all duration-500 ease-out ${
                      isMenuExpanded(item.key)
                        ? "max-h-[32rem] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }`}
                  >
                    <ul className="flex flex-col gap-1.5">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={sub.path}>
                          <button
                            onClick={(e) => handleNavigation(sub.path, e)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-150 ease-out w-full text-left hover:shadow-md ${
                              isActive(sub.path)
                                ? "bg-gradient-to-r from-[#FAF9FC] to-[#F0F0F0] text-[#0E4F53] rounded-lg shadow-sm"
                                : "text-[#3D3D3D] hover:bg-gradient-to-r hover:from-[#FAF9FC] hover:to-[#F0F0F0] hover:text-[#0E4F53] hover:shadow-sm"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isActive(sub.path)
                                  ? "bg-[#0E4F53] scale-125"
                                  : "bg-[#3d3d3d] scale-100"
                              }`}
                            ></span>
                            <span className="font-medium text-sm">
                              {sub.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <button
                  onClick={(e) => handleNavigation(item.path, e)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-150 ease-out w-full text-left hover:shadow-md ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#FAF9FC] to-[#F0F0F0] text-[#0E4F53] rounded-lg border-l-4 border-[#0E4F53] shadow-md"
                      : "text-[#0E4F53] hover:bg-gradient-to-r hover:from-[#FAF9FC] hover:to-[#F0F0F0] hover:rounded-lg hover:shadow-md"
                  }`}
                >
                  <div className="transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 px-3 py-2 space-y-3">
          <button
            onClick={(e) => handleNavigation("/settings", e)}
            className="flex items-center gap-2.5 transition-all duration-150 ease-out hover:shadow-md w-full text-left px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#FAF9FC] hover:to-[#F0F0F0]"
          >
            <div className="transition-transform duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.25607 15.6322C2.29003 15.309 2.52424 15.0485 2.99267 14.5276L4.02374 13.3749C4.27577 13.0558 4.45462 12.5 4.45462 11.9998C4.45462 11.5 4.27571 10.944 4.02371 10.625L2.99267 9.47231C2.52424 8.95137 2.29002 8.6909 2.25607 8.36768C2.22211 8.04446 2.39707 7.74083 2.74698 7.13358L3.24056 6.27698C3.61386 5.62915 3.8005 5.30523 4.11808 5.17607C4.43566 5.0469 4.79482 5.14883 5.51316 5.35267L6.73339 5.69637C7.192 5.80212 7.67315 5.74213 8.0919 5.52698L8.42878 5.33261C8.78786 5.10262 9.06406 4.76352 9.21694 4.36493L9.5509 3.36754C9.77047 2.70753 9.88026 2.37752 10.1416 2.18876C10.403 2 10.7502 2 11.4445 2H12.5593C13.2537 2 13.6009 2 13.8622 2.18876C14.1236 2.37752 14.2334 2.70753 14.453 3.36754L14.7869 4.36493C14.9398 4.76352 15.216 5.10262 15.5751 5.33261L15.912 5.52698C16.3307 5.74213 16.8119 5.80212 17.2705 5.69637L18.4907 5.35267C19.209 5.14883 19.5682 5.0469 19.8858 5.17607C20.2034 5.30523 20.39 5.62915 20.7633 6.27698L21.2569 7.13358C21.6068 7.74083 21.7817 8.04446 21.7478 8.36768C21.7138 8.6909 21.4796 8.95137 21.0112 9.47231L19.9801 10.625C19.7282 10.944 19.5492 11.5 19.5492 11.9998C19.5492 12.5 19.7281 13.0558 19.9801 13.3749L21.0112 14.5276C21.4796 15.0485 21.7138 15.309 21.7478 15.6322C21.7817 15.9555 21.6068 16.2591 21.2569 16.8663L20.7633 17.7229C20.39 18.3707 20.2034 18.6947 19.8858 18.8238C19.5682 18.953 19.209 18.8511 18.4907 18.6472L17.2705 18.3035C16.8118 18.1977 16.3306 18.2578 15.9118 18.473L15.575 18.6674C15.2159 18.8974 14.9398 19.2364 14.787 19.635L14.453 20.6325C14.2334 21.2925 14.1236 21.6225 13.8622 21.8112C13.6009 22 13.2537 22 12.5593 22H11.4445C10.7502 22 10.403 22 10.1416 21.8112C9.88026 21.6225 9.77047 21.2925 9.5509 20.6325"
                  stroke="#404040"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2.73696 18.7798C3.81696 17.6998 7.48896 14.0638 7.84896 13.6438C8.22953 13.1998 7.92096 12.5998 8.10456 10.7398C8.1934 9.8398 8.38699 9.16555 8.94096 8.6638C9.60096 8.0398 10.141 8.0398 12.001 7.99781C13.621 8.0398 13.813 7.8598 13.981 8.27981C14.101 8.57981 13.741 8.7598 13.309 9.23981C12.349 10.1998 11.785 10.6798 11.731 10.9798C11.341 12.2998 12.877 13.0798 13.717 12.2398C14.0346 11.9221 15.505 10.4398 15.649 10.3198C15.757 10.2238 16.0155 10.2284 16.141 10.3798C16.249 10.4859 16.261 10.4998 16.249 10.9798C16.2379 11.4241 16.2428 12.062 16.2442 12.7198C16.2459 13.5721 16.201 14.5198 15.841 14.9998C15.121 16.0798 13.921 16.1398 12.841 16.1878C11.821 16.2478 10.981 16.1398 10.717 16.3318C10.501 16.4398 9.36096 17.6398 7.98096 19.0198L5.52096 21.4798C3.48096 23.0998 1.23696 20.5798 2.73696 18.7798Z"
                  stroke="#404040"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-medium text-sm text-[#404040] hover:text-[#0E4F53] transition-colors duration-300">
              Settings
            </span>
          </button>

          <button
            className="btn-enhanced flex items-center gap-2.5 px-3 py-2.5 w-full text-white bg-gradient-to-t from-[#0E4F53] to-[#009EA1] rounded-lg text-sm cursor-pointer transition-all duration-500 ease-out hover:shadow-xl hover:scale-[1.02] hover:from-[#0E4F53] hover:via-[#009EA1] hover:to-[#0E4F53] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <div className="transition-transform duration-300 hover:scale-110">
              {isLoggingOut ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 12H11M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span className="font-medium text-sm">
              {isLoggingOut ? "Logging out..." : "Logout"}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
