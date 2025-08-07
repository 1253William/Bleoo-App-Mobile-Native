import { useCallback, useState } from "react";

export interface UseProfileDrawerReturn {
  isVisible: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

export const useProfileDrawer = (): UseProfileDrawerReturn => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openDrawer = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return {
    isVisible,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};
