import { ChangeEvent } from "react";

export interface IInput {
  value: string;
  placeholder: string;
  type: string;
  name: string;
  inputlHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
