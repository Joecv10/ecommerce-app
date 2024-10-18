import React, { useState } from "react";

import Category from "../../components/Category/category.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Category />
      <Outlet />
    </>
  );
};

export default Home;
