/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, Typography } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Chart from "react-google-charts";
import "@fontsource/pacifico";
import _ from "lodash";
import Container from "@material-ui/core/Container";

export default function RodaDaVida() {
  const theme = createTheme();
  const useStyles = makeStyles(() => ({
    select: {
      // paddingL: "1rem",
    },
    typography: {
      fontFamily: ["pacifico"].join(","),
      fontSize: "1.1rem",
    },
  }));
  const classes = useStyles();

  const [state, setState] = useState("");
  const [chartData, setChartData] = useState([]);
  const [sendResponse, setSendResponse] = useState(false);

  const [option1, setOption1] = useState("0");
  const [option2, setOption2] = useState("0");
  const [option3, setOption3] = useState("0");
  const [option4, setOption4] = useState("0");
  const [option5, setOption5] = useState("0");
  const [option6, setOption6] = useState("0");
  const [option7, setOption7] = useState("0");
  const [option8, setOption8] = useState("0");
  const [option9, setOption9] = useState("0");
  const [option10, setOption10] = useState("0");
  const [option11, setOption11] = useState("0");
  const [option12, setOption12] = useState("0");

  const options = {
    chart: {
      title: "Nivel de Satisfação",
      // pieHole: 0.4,
      // is3D: false,
    },
  };

  function loadData(data) {
    let values = _.map(data, (value) => [
      value.vida,
      value.criatividade,
      value.plenitude,
      value.qualidade,
      value.saude,
      value.desenvolvimento,
      value.equilibrio,
      value.realizacao,
      value.recursos,
      value.contribuicao,
      value.familia,
      value.relacionamento,
      value.social,
    ]);

    // console.log("aaaa", [["Area", "1", "2", "3"], ...values]);
    console.log(values);

    return [
      [
        "vida",
        "Criatividade hobbies & Diversão",
        "Plenitude e Felicidade",
        "Qualidade de Vida",
        "Saúde e Disposição",
        "Desenvolvimento Intelectual",
        "Equilíbrio Emocional",
        "Realização e Propósito",
        "Recursos Financeiros",
        "Contribuição Social",
        "Família",
        "Relacionamento Amoroso",
        "Vida Social",
      ],
      ...values,
    ];
  }

  useEffect(() => {
    const data = [
      {
        // vida: "Criatividade hobbies & Diversão",
        criatividade: option1,
      },
      {
        // vida: "Plenitude e Felicidade",
        plenitude: option2,
      },
      {
        // vida: "Qualidade de Vida",
        qualidade: option3,
      },
      {
        // vida: "Saúde e Disposição",
        saude: option4,
      },
      {
        // vida: "Desenvolvimento Intelectual",
        desenvolvimento: option5,
      },
      {
        // vida: "Equilíbrio Emocional",
        equilibrio: option6,
      },
      {
        // vida: "Realização e Propósito",
        realizacao: option7,
      },
      {
        // vida: "Recursos Financeiros",
        recursos: option8,
      },
      {
        // vida: "Contribuição Social",
        contribuicao: option9,
      },
      {
        // vida: "Família",
        familia: option10,
      },
      {
        // vida: "Relacionamento Amoroso",
        relacionamento: option11,
      },
      {
        // vida: "Vida Social",
        sicial: option12,
      },
    ];

    setChartData(loadData(data));
  }, [
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9,
    option10,
    option11,
    option12,
  ]);

  function handleSend() {
    setSendResponse(true);
    console.log(state);
  }

  return (
    <Container component="main">
      <Typography class={classes.typography}>
        <h1>Roda Da Vidaaaaaaaa</h1>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center" marginBottom={"10px"}>
            {" "}
            Qualidade de Vida{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Criatividade hobbies & Diversão
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Criatividade hobbies & Diversão"
              onChange={(e) => setOption1(e.target.value)}
              fullWidth
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Plenitude e Felicidade
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label=" Plenitude e Felicidade"
              onChange={(e) => setOption2(e.target.value)}
              fullWidth
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Qualidade de Vida
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Qualidade de Vida"
              onChange={(e) => setOption3(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center" marginBottom={"10px"}>
            {" "}
            Pessoal{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Saúde e Disposição
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Saúde e Disposição"
              onChange={(e) => setOption4(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Desenvolvimento Intelectual
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Desenvolvimento Intelectual"
              onChange={(e) => setOption5(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Equilíbrio Emocional
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Equilíbrio Emocional"
              onChange={(e) => setOption6(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center" marginBottom={"10px"}>
            {" "}
            Profissional{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Realização e Propósito
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Realização e Propósito"
              onChange={(e) => setOption7(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Recursos Financeiros
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Recursos Financeiros"
              onChange={(e) => setOption8(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Contribuição Social
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Contribuição Social"
              onChange={(e) => setOption9(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center" marginBottom={"10px"}>
            {" "}
            Relacionamentos{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Família
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Família"
              onChange={(e) => setOption10(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Relacionamento Amoroso
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Relacionamento Amoroso"
              onChange={(e) => setOption11(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Vida Social
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={state.data}
              label="Vida Social"
              onChange={(e) => setOption12(e.target.value)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <Button variant="contained" size="large" onClick={handleSend}>
              Enviar
            </Button>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            {(() => {
              if (sendResponse === true) {
                return (
                  <Container>
                    <h1
                      className={classes.typography}
                      style={{ fontSize: "2rem", position: "" }}
                    >
                      Resultado
                    </h1>
                    <div>
                      <Chart
                        chartType="Bar"
                        data={chartData}
                        options={options}
                        width={"100%"}
                        height={"500px"}
                      />
                    </div>
                  </Container>
                );
              }
            })()}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
