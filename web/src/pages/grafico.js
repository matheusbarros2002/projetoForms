/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Chart from "react-google-charts";

export default function grafico(req, res) {
  const { pA, pC, pO, pI } = req.query;

  const [options, setOptions] = useState({
    title: "Gráfico de Pizza",
  });
  const [data, setData] = useState([
    ["Linguagens", "Quantidade"],
    ["Tubarao", pA],
    ["Lobo", pO],
    ["Aguia", pI],
    ["Gato", pC],
  ]);
  // return (

  // );

  const url = new URL(`http://localhost:3002/`);
  url.searchParams.set("Tubarao", pA);
  url.searchParams.set("Lobo", pO);
  url.searchParams.set("Aguia", pI);
  url.searchParams.set("Gato", pC);
  window.open(url, "_blank");

  console.log(pA);

  try {
    return (
      <div>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    );
  } catch (error) {
    return res.json(error);
  }
}
