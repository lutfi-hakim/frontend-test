import React from "react";
import ListItem from "../components/Cards/ListItem";
import Tabs from "../components/Tabs/Index";
import Product from "../parts/Product/Product";

import data from "../constans/data.json";

function Home() {
  return (
    <div className="container">
      <Tabs />
      {/* <Product /> */}
      {/* <ListItem /> */}
    </div>
  );
}

export default Home;
