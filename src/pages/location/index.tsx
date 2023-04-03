import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useLocation } from "hooks/location";
import { ILocation } from "@/domain/entities/location";
import ILocationFilter from "@/domain/filters/location";
import MasonryContainer from "ui/components/masonry";
import ErrorFeedback from "ui/components/error-feedback";
import LoadingPortal from "ui/components/loading-portal";
import PageBase from "ui/components/page-base";
import useBreakpoints from "hooks/use-brakpoints";
import LocationCard from "ui/components/location-card";

export default function Location() {
  const router = useRouter();
  const [page, setPage] = useState<any>(router.query.page || 1);
  const [requestQuery, setRequestQuery] = useState<ILocationFilter>({
    name: "",
    type: "",
    dimension: "",
  });

  const { data, isLoading, error } = useLocation(page, requestQuery, "");

  const { isXs } = useBreakpoints();

  return (
    <PageBase
      page={page}
      pages={data ? data.info.pages : 0}
      setRequestQuery={setRequestQuery}
      setPage={setPage}
      requestQuery={requestQuery}
    >
      {!isLoading ? (
        <MasonryContainer columns={isXs ? 1 : 4}>
          {data &&
            data.results.map((location: ILocation) => (
              <Link
                key={location.id}
                href={`/location/[slug]`}
                as={`/location/${location.id}`}
              >
                <LocationCard
                  dimension={location.dimension}
                  type={location.type}
                  name={location.name}
                />
              </Link>
            ))}
        </MasonryContainer>
      ) : (
        <LoadingPortal />
      )}
      {error && <ErrorFeedback />}
    </PageBase>
  );
}

interface ICharacterCtx {
  query: any;
}
