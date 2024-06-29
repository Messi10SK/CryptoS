import React from "react";
import Pagination from "@mui/material/Pagination";
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-text": {
    color: "#fff",
    border: "1px solid var(--grey)",
  },
  "& .MuiPaginationItem-text:hover": {
    backgroundColor: "transparent",
  },
  "& .Mui-selected": {
    backgroundColor: "var(--blue)",
    borderColor: "var(--blue)",
  },
  "& .MuiPaginationItem-ellipsis": {
    border: "none",
  },
}));

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="flex items-center justify-center my-12">
      <StyledPagination
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}































// import React from "react";
// import Pagination from "@mui/material/Pagination";

// export default function PaginationControlled({ page, handlePageChange }) {
//   return (
//     <div className="flex items-center justify-center my-12">
//       <Pagination
//         sx={{
//           "& .MuiPaginationItem-text": {
//             color: "#fff !important",
//             border: "1px solid var(--grey)",
//           },
//           "& .MuiPaginationItem-text:hover": {
//             backgroundColor: "transparent !important",
//           },
//           "& .Mui-selected": {
//             backgroundColor: "var(--blue)",
//             borderColor: "var(--blue)",
//           },
//           "& .MuiPaginationItem-ellipsis": {
//             border: "none",
//           },
//         }}
//         count={10}
//         page={page}
//         onChange={handlePageChange}
//       />
//     </div>
//   );
// }
