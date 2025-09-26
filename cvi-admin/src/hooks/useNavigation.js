import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    console.log('Navigation: Path changed to', pathname, 'setting isNavigating to false');
    setIsNavigating(false);
  }, [pathname]);

  const navigate = (href) => {
    if (pathname === href) {
      console.log('Navigation: Already on', href, 'not navigating');
      return;
    }
    console.log('Navigation: Starting navigation to', href);
    setIsNavigating(true);
    router.push(href);
  };

  console.log('Navigation: Current state - isNavigating:', isNavigating, 'pathname:', pathname);

  return { isNavigating, navigate };
}
