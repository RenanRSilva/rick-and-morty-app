import { InputTextField } from "../../input";

export default function EpisodeFilterInputs({ control }: any): JSX.Element {
  return (
    <>
      <InputTextField name="name" label="Name" control={control} />
      <InputTextField name="episode" label="Episode" control={control} />
    </>
  );
}
