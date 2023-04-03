import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import IBasicPagination from "@/domain/components/pagination";
import { PaginationItemStyled, StyledPagination } from "./styles";

export default function BasicPagination({
  count,
  setPage,
  page,
}: IBasicPagination): JSX.Element {
  const router = useRouter();

  const handlePageChange = (e: any, p: number) => {
    setPage(p);
    router.push(`${router.pathname}?page=${p}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Stack spacing={2}>
      <StyledPagination
        page={page}
        onChange={handlePageChange}
        count={count}
        color="primary"
        size="large"
        renderItem={(item) => <PaginationItemStyled {...item} />}
      />
    </Stack>
  );
}
