import styled from "@emotion/styled";
import { Pagination, PaginationItem } from "@mui/material";

export const StyledPagination = styled(Pagination)`
    &&.MuiPagination-outlined {
       &&.MuiPagination-ul {
        li {
            color: #fff
            border-color:  #413d3e
        }
       }

       &&.MuiButtonBase-root-MuiPaginationItem-root {
            color: #fff
            border-color:  #413d3e
       }
    }

    &&.MuiPaginationItem-outlinedPrimary {
        color: #fff
    }
`;


export const PaginationItemStyled = styled(PaginationItem)`
  color: #fff;
    &&.MuiPaginationItem-outlinedPrimary {
        color: #fff;
        border-radius: 10px;
        background: none;
    }

    &&.MuiPaginationItem-root.Mui-selected {
        color:  #fff;
        background: #1d1d1f;
    }

    &&.MuiPaginationItem-icon {
        color: #fff;
    }

    &&.MuiSvgIcon-root {
        color: #fff !important;
    }

    &&.MuiPaginationItem-icon {
        color: #fff !important;
    }

    &&.MuiPaginationItem-previousNext {
        color: #fff !important;
        fill: #fff !important;
    }

    &&.MuiPaginationItem-root {
        min-height: 32px;
    }
`;
