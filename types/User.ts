export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  year_group: string;
  occupation: string;
  class: string;
  residency: string;
  hall: string;
  affiliated_groups: string;
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
