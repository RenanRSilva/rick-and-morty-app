import {
  Button,
  CurrentPageTitle,
  PageContainer,
  PageNavigation,
} from "./styles";
import { useRouter } from "next/router";
import ArrowBack from "ui/components/icons/back-icon";
import Head from "next/head";
import ILocationFilter from "@/domain/filters/location";
import ICharacterFilter from "@/domain/filters/character";
import IEpisodeFilter from "@/domain/filters/episode";
import { CleanFilter } from "ui/components/clean-filter-button";
import { ContextTitleMap } from "main/context";
import BasicPagination from "../pagination";
import Filter from "../filter";

interface IPageBase {
  children: JSX.Element | string | string[] | any;
  pages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRequestQuery: React.Dispatch<
    React.SetStateAction<
      ICharacterFilter | ILocationFilter | IEpisodeFilter | any
    >
  >;
  requestQuery: ICharacterFilter | ILocationFilter | IEpisodeFilter | any;
}

export default function PageBase({
  children,
  pages,
  page,
  setPage,
  setRequestQuery,
  requestQuery,
}: IPageBase): JSX.Element {
  const router = useRouter();

  const ShowCleanFilterButton = (
    filters: ICharacterFilter | ILocationFilter | IEpisodeFilter
  ) => {
    return Object.values(filters).some((val) => val != "");
  };

  const handleCleanFilter = () => {
    setRequestQuery({
      name: "",
      type: "",
      dimension: "",
    });
  };

  const returnHome = () => {
    router.push(`/`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <Head>
        <title>{ContextTitleMap.get(router.pathname)}</title>
      </Head>
      <PageNavigation>
        <div className="row">
          <Button type="button" onClick={() => returnHome()}>
            <ArrowBack />
          </Button>
          <CurrentPageTitle>
            {ContextTitleMap.get(router.pathname)}
          </CurrentPageTitle>
        </div>
        <div className="row">
          {ShowCleanFilterButton(requestQuery) && (
            <CleanFilter onClick={() => handleCleanFilter()}>
              Clean filter
            </CleanFilter>
          )}
          <BasicPagination setPage={setPage} count={pages} page={page} />
          <Filter setRequestQuery={setRequestQuery} />
        </div>
      </PageNavigation>
      <PageContainer>{children}</PageContainer>
    </>
  );
}
