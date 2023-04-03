import Error from "@/public/error.png";
import Image from "next/image";
import { ErrorContainer, ErrorMessage } from "./styles";

export default function ErrorFeedback(): JSX.Element {
  return (
    <ErrorContainer>
      <Image data-testid="error-image" width={400} src={Error} alt="Error" />
      <ErrorMessage data-testid="error-message">No results found</ErrorMessage>
    </ErrorContainer>
  );
}
