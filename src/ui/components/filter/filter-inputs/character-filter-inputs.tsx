import { InputTextField, SelectField } from "../../input";

export default function CharacterFilterInputs({ control }: any): JSX.Element {
  const statusOptions = [
    { label: "Alive", value: "alive" },
    { label: "Dead", value: "dead" },
    { label: "Unknown", value: "unknown" },
  ];

  const genderOptions = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Genderless", value: "genderless" },
    { label: "Unknown", value: "unknown" },
  ];

  const speciesOptions = [
    { label: "Alien", value: "alien" },
    { label: "Animal", value: "animal" },
    { label: "Cronenberg", value: "cronenberg" },
    { label: "Disease", value: "disease" },
    { label: "Human", value: "human" },
    { label: "Humanoid", value: "humanoid" },
    { label: "Mythological Creature", value: "mythological creature" },
    { label: "Poopybutthole", value: "poopybutthole" },
    { label: "Robot", value: "robot" },
    { label: "Unknown", value: "unknown" },
  ];
  return (
    <>
      <InputTextField name="name" label="Name" control={control} />
      <SelectField
        name="status"
        label="Status"
        control={control}
        options={statusOptions}
      />
      <SelectField
        name="species"
        label="Species"
        control={control}
        options={speciesOptions}
      />
      <SelectField
        name="gender"
        label="Gender"
        control={control}
        options={genderOptions}
      />
      <InputTextField name="type" label="Type" control={control} />
    </>
  );
}
