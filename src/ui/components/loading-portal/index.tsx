import useBreakpoints from "hooks/use-brakpoints";
import { LoadingPortalContainer } from "./styles";
import Image from "next/image";
import SpinningPortal from "@/public/portal.webp";

export default function LoadingPortal(): JSX.Element {
  const { isXs } = useBreakpoints();

  return (
    <LoadingPortalContainer>
      <Image
        src={SpinningPortal}
        alt="Portal spinning"
        width={isXs ? 200 : 600}
        height={isXs ? 200 : 600}
      />
    </LoadingPortalContainer>
  );
}
