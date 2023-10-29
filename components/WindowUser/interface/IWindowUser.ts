import { IWindowUserData } from "./IWindowUserData";

export interface IWindowUser {
  user: IWindowUserData;
  account: boolean;
  setUser: ({}: IWindowUserData) => void;
}
