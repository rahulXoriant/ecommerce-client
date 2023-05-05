import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

import { LoaderContainer } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress
        color="warning"
        sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </LoaderContainer>
  );
};

export default Loader;
