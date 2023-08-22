import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Home } from "components";
export default function WebRouter() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}
