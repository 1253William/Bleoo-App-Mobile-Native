export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  email?: string;
  bio?: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  screen: string;
  badge?: number;
}

export interface ProfileDrawerConfig {
  showAddButton?: boolean;
  customMenuItems?: NavigationItem[];
  logoutButtonText?: string;
  animationDuration?: number;
}

export type NavigationScreen =
  | "Profile"
  | "Events"
  | "Contributions"
  | "Settings"
  | "Notifications"
  | "Help";
