import IMasonry from "@/domain/components/masonry";
import { Masonry } from "@mui/lab";
import * as React from "react";

export default function MasonryContainer({ children, columns }: IMasonry) {
  return <Masonry columns={columns}>{children}</Masonry>;
}
