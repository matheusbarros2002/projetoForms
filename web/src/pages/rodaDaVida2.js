/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

export default function RodaDaVida() {
  const theme = createTheme();
  const useStyles = makeStyles(() => ({
    select: {
      // paddingL: "1rem",
    },
  }));
  const classes = useStyles();

  const [option, setOption] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [option6, setOption6] = useState("");
  const [option7, setOption7] = useState("");
  const [option8, setOption8] = useState("");
  const [option9, setOption9] = useState("");
  const [option10, setOption10] = useState("");
  const [option11, setOption11] = useState("");
  const [option12, setOption12] = useState("");

  function handleChange(e) {
    setOption(e.target.value);
  }
  function handleChange2(e) {
    setOption2(e.target.value);
  }
  function handleChange3(e) {
    setOption3(e.target.value);
  }
  function handleChange4(e) {
    setOption4(e.target.value);
  }
  function handleChange5(e) {
    setOption5(e.target.value);
  }
  function handleChange6(e) {
    setOption6(e.target.value);
  }
  function handleChange7(e) {
    setOption7(e.target.value);
  }
  function handleChange8(e) {
    setOption8(e.target.value);
  }
  function handleChange9(e) {
    setOption9(e.target.value);
  }
  function handleChange10(e) {
    setOption10(e.target.value);
  }
  function handleChange11(e) {
    setOption11(e.target.value);
  }
  function handleChange12(e) {
    setOption12(e.target.value);
  }

  return (
    <Container component="main">
      <Grid container  >
        <Grid container item xs={6}>
          <Grid item xs={10}>
            <Typography
              fontSize={"1.2rem"}
              align="center"
              marginBottom={"10px"}
            >
              {" "}
              Qualidade de Vida{" "}
            </Typography>
          </Grid>
          <Grid container item xs={10} >
            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Criatividade hobbies & Diversão
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option}
                  label="Criatividade hobbies & Diversão"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Plenitude e Felicidade
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option2}
                  label=" Plenitude e Felicidade"
                  onChange={handleChange2}
                  fullWidth
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Qualidade de Vida
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option3}
                  label="Qualidade de Vida"
                  onChange={handleChange3}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={6}>
          <Grid item xs={10}>
            <Typography
              fontSize={"1.2rem"}
              align="center"
              marginBottom={"10px"}
            >
              {" "}
              Pessoal{" "}
            </Typography>
          </Grid>

          <Grid container item xs={10}>
            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Saúde e Disposição
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option4}
                  label="Saúde e Disposição"
                  onChange={handleChange4}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Desenvolvimento Intelectual
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option5}
                  label="Desenvolvimento Intelectual"
                  onChange={handleChange5}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Equilíbrio Emocional
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option6}
                  label="Equilíbrio Emocional"
                  onChange={handleChange6}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={6}>
          <Grid item xs={10}>
            <Typography
              fontSize={"1.2rem"}
              align="center"
              marginBottom={"10px"}
            >
              {" "}
              Profissional{" "}
            </Typography>
          </Grid>

          <Grid container item xs={10}>
            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Realização e Propósito
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option7}
                  label="Realização e Propósito"
                  onChange={handleChange7}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Recursos Financeiros
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option8}
                  label="Recursos Financeiros"
                  onChange={handleChange8}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Contribuição Social
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option9}
                  label="Contribuição Social"
                  onChange={handleChange9}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={6}>
          <Grid item xs={10}>
            <Typography
              fontSize={"1.2rem"}
              align="center"
              marginBottom={"10px"}
            >
              {" "}
              Relacionamentos{" "}
            </Typography>
          </Grid>

          <Grid container item xs={10}>
            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Família
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option10}
                  label="Família"
                  onChange={handleChange10}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Relacionamento Amoroso
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option11}
                  label="Relacionamento Amoroso"
                  onChange={handleChange11}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              // sx={{
              //   marginRight: "5rem",
              //   marginLeft: "5rem",
              //   marginBottom: "10px",
              // }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Vida Social
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value={option12}
                  label="Vida Social"
                  onChange={handleChange12}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
