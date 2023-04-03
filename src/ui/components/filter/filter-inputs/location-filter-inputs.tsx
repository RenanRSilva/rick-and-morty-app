import { InputTextField } from "../../input";

export default function LocationFilterInputs({ control }: any): JSX.Element {
  return (
    <>
      <InputTextField name="name" label="Name" control={control} />
      <InputTextField name="dimension" label="Dimension" control={control} />
      <InputTextField name="type" label="Type" control={control} />
    </>
  );
}
