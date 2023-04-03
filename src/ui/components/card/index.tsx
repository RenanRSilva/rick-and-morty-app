import ICard from "@/domain/components/card";
import { CardContainer } from "./styles";

export default function Card({ children }: ICard): JSX.Element {
  return <CardContainer>{children}</CardContainer>;
}
