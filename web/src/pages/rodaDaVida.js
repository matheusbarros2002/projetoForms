/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Typography } from "@mui/material";
import RadioButton from "../components/RadioButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@mui/styles";
import { Container } from "@material-ui/core";

const theme = createTheme();

const useStyles = makeStyles(() => ({}));

function RodaDaVida() {
  const [option, setOption] = useState("1");
  const [option2, setOption2] = useState("1");
  const [option3, setOption3] = useState("1");
  const [option4, setOption4] = useState("1");
  const [option5, setOption5] = useState("1");
  const [option6, setOption6] = useState("1");
  const [option7, setOption7] = useState("1");
  const [option8, setOption8] = useState("1");
  const [option9, setOption9] = useState("1");
  const [option10, setOption10] = useState("1");
  const [option11, setOption11] = useState("1");
  const [option12, setOption12] = useState("1");

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
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        align={"center"}
        display={"flex"}
        position={"relative"}
      >
        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center">
            {" "}
            Qualidade de Vida{" "}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="1">Criatividade hobbies & Diversão</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option}
              onChange={handleChange}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="2"> Plenitude e Felicidade </FormLabel>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={option2}
              onChange={handleChange2}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="3"> Qualidade de Vida </FormLabel>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={option3}
              onChange={handleChange3}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center">
            {" "}
            Pessoal{" "}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="4"> Saúde e Disposição </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option4}
              onChange={handleChange4}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="5"> Desenvolvimento Intelectual </FormLabel>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={option5}
              onChange={handleChange5}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="6"> Equilíbrio Emocional </FormLabel>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={option6}
              onChange={handleChange6}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center">
            {" "}
            Profissional{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="7"> Realização e Propósito </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option7}
              onChange={handleChange7}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="8"> Recusos Financeiros </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option8}
              onChange={handleChange8}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="9"> Contribuição Social </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option9}
              onChange={handleChange9}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography fontSize={"1.2rem"} align="center">
            {" "}
            Relacionamentos{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="10"> Família </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option10}
              onChange={handleChange10}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="11"> Relacionamento Amoroso </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option11}
              onChange={handleChange11}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="12"> Vida Social </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="controlled-radio-buttons-group"
              value={option12}
              onChange={handleChange12}
            >
              <RadioButton />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={"1.8rem"} align="center">
            <Stack>
              <Button
                variant="contained"
                id="enviar"
                endIcon={<SendIcon />}
                type="submit"
                onClick={0}
              >
                {" "}
                Enviar{" "}
              </Button>
            </Stack>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default RodaDaVida;
