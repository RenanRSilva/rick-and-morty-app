import ISelectOptions from "./select-options"

export default interface ISelectInput {
  control: any;
  name: string;
  label: string;
  options: ISelectOptions[];
}
