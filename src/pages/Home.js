import React from "react";
import CardHome from "../components/Cards/CardHome";
import data from "../constans/data.json";

function Home() {
  return (
    <div className="container" style={{ marginTop: 40 }}>
      <CardHome data={data} />
    </div>
  );
}

export default Home;
