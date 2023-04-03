import ArrowBack from "ui/components/icons/back-icon";
import { useRouter } from "next/router";
import Image from "next/image";
import RickAndMortyImg from "@/public/rick-and-morty-mind-bending-season-mysteries-quidd-6.png";
import CockroachMorty from "@/public/Rick-And-Morty-PNG-Image-File.png";
import IPageBaseDetail from "@/domain/components/page-base-detail";
import Head from "next/head";
import { ContextRouteMap, ContextTitleDetailMap } from "main/context";
import useBreakpoints from "hooks/use-brakpoints";
import { CurrentPageTitle, PageNavigation } from "../page-base/styles";
import { Button, DetailContainer, PageDetailContainer } from "./styles";

export default function PageBaseDetail({
  children,
  pageName,
}: IPageBaseDetail): JSX.Element {
  const router = useRouter();
  const returnHome = () => {
    router.push(ContextRouteMap.get(router.pathname)!, undefined, {
      shallow: true,
    });
  };

  const { isXs } = useBreakpoints();

  return (
    <>
      <Head>
        <title>
          {ContextTitleDetailMap.get(router.pathname) + ` ${pageName}`}
        </title>
      </Head>
      <PageNavigation>
        <div className="row">
          <Button type="button" onClick={() => returnHome()}>
            <ArrowBack />
          </Button>
          <CurrentPageTitle>
            {ContextTitleDetailMap.get(router.pathname)} / {pageName}
          </CurrentPageTitle>
        </div>
      </PageNavigation>
      <PageDetailContainer>
        {!isXs && (
          <Image
            style={{ position: "absolute", left: 5, bottom: 5 }}
            width={400}
            src={RickAndMortyImg}
            alt="Rick and morty"
          />
        )}
        <DetailContainer>{children}</DetailContainer>
        {!isXs && (
          <Image
            style={{ position: "absolute", right: 5, bottom: 5 }}
            width={400}
            src={CockroachMorty}
            alt="Cockroach morty"
          />
        )}
      </PageDetailContainer>
    </>
  );
}
