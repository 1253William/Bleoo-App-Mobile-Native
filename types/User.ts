export type User = {
  id: number;
  email: string;
  yearGroup: string;
  occupation: string;
  yearClass: string;
  residency: string;
  hall: string;
  affiliatedGroups: string[];
  };

  export type AuthStoreData = {
  token: string;
    user:User;
  };

  export type AuthStoreState = {
    authStore: AuthStoreData | null;
    setAuthData: (data: Partial<AuthStoreData>) => void;
    clearAuthData: () => void;
  };

  export type UserState = {
    user: User | null;
  };


 export interface UserStoreActions {
    setUserData: (data: Partial<User>) => void;
    clearUserData: () => void;
  }


export interface UserStore extends UserState, UserStoreActions {}
