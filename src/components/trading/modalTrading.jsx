import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";
import "./trading.css";

import { User } from "@phosphor-icons/react";
import { NavbarLeft } from "../navbarLeft";
import { Article } from "../../pages/Home/article";
import { ItemTrading } from "./tradingItem";
import {
  Box,
  InputLabel,
  Select,
  Modal,
  TextField,
  FormControl,
  MenuItem,
  FormHelperText,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";

export function ModalTrading(props) {
  const { handleOpenModal, openModal, hadleCloseModal } = props;
  const style = {
    position: "absolute",
    left: "42%",
    bottom: "200px",
    width: "550px",
    height: "450px",
    backgroundColor: "#fff",
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    // p: 4,
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Modal
      style={{ position: "relative" }}
      open={openModal}
      onClose={() => {
        hadleCloseModal();
      }}
    >
      <div style={style}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <TextField
            id="outlined-basic"
            label="name"
            placeholder="ex : kikiki"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="BREED"
            placeholder="EX: Husky"
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <TextField
            id="outlined-basic"
            label="WEIGHT"
            placeholder="EX: 3kg"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="COLOR"
            placeholder="Ex: Black"
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <TextField
            id="outlined-basic"
            label="BIRTH"
            placeholder="Ex: 3 months"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="ADDRESS"
            placeholder="Ex: Tp. Ho Chi Minh"
            variant="outlined"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <textarea
            placeholder="DESCRIPTION"
            style={{
              width: "95%",
              height: "100px",
              resize: "none",
              backgroundColor: "rgb(244 241 241)",
              borderRadius: "5px",
              margin: "0 auto",
              padding: "5px",
            }}
          ></textarea>
        </div>
      </div>
    </Modal>
  );
}
