import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { FilterButton } from "../filter-button";
import { FilterContainer, FilterTitle, Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CharacterFilterInputs from "./filter-inputs/character-filter-inputs";
import LocationFilterInputs from "./filter-inputs/location-filter-inputs";
import EpisodeFilterInputs from "./filter-inputs/episode-filter-inputs";
import { StyledDivider } from "../divider";
import { ContextType } from "@/main/context";

type Anchor = "right";

export default function Filter({ setRequestQuery }: any) {
  const [state, setState] = React.useState({
    right: false,
  });
  const router = useRouter();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  interface ICharacterInput {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICharacterInput>();
  const onSubmit: SubmitHandler<ICharacterInput> = (data) => handleFilter(data);

  const ContextFilter = new Map<string, JSX.Element>([
    [
      ContextType.character,
      <>
        <CharacterFilterInputs control={control} />
      </>,
    ],
    [
      ContextType.location,
      <>
        <LocationFilterInputs control={control} />
      </>,
    ],
    [
      ContextType.episode,
      <>
        <EpisodeFilterInputs control={control} />
      </>,
    ],
  ]);

  const handleFilter = (data: ICharacterInput) => {
    setState({ right: false });
    setRequestQuery(data);
    reset();
  };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <FilterButton
            data-testid="open-filter-button"
            onClick={toggleDrawer(anchor, true)}
          >
            Filter
          </FilterButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <FilterContainer>
              <FilterTitle data-testid="filter-title">Filter</FilterTitle>
              <StyledDivider />
              <Form onSubmit={handleSubmit(onSubmit)}>
                {ContextFilter.get(router.pathname)}

                <FilterButton style={{ marginTop: 15 }} type="submit">
                  Filter
                </FilterButton>
              </Form>
            </FilterContainer>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
