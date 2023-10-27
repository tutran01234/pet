import React, { useContext, useState } from "react";
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
  Input,
} from "@material-ui/core";
import { Button } from "../Forms/Button";

export function ModalTrading(props) {
  const [image, setImage] = useState("");
  const { createPostTrade } = useContext(UserContext);
  const { handleOpenModal, openModal, hadleCloseModal } = props;
  const [param, setParam] = useState({
    token: window.localStorage.getItem("token"),
    title: "",
    content: "",
    attachment: ["123123213"],
    petName: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    weight: 0,
    amount: 0,
  });
  const style = {
    position: "absolute",
    left: "38%",
    bottom: "200px",
    width: "550px",
    height: "670px",
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
  console.log(param);
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
            onChange={(e) => {
              setParam({ ...param, petName: e.target.value });
            }}
            id="outlined-basic"
            label="name"
            placeholder="ex : kikiki"
            variant="outlined"
          />
          <div className="file-post-trade" style={{ width: "40%" }}>
            <div
              className="import-photo"
              style={image ? { color: "blue" } : {}}
            >
              <div style={{ opacity: 0, width: 0 }}>
                <Input
                  type="file"
                  onChange={(e) => {
                    console.log("e:", e);
                  }}
                />
                {image && <img src={image} alt="Uploaded" />}
              </div>
              <i
                className="fa fa-image"
                style={
                  image
                    ? { color: "blue", cursor: "pointer" }
                    : { color: "gray", cursor: "pointer" }
                }
              ></i>
              <p>Photo</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <FormControl style={{ width: "43%" }}>
            <InputLabel id="demo-simple-select-label">Type of pet</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Type of pet"
              onChange={(e) => {
                setParam({ ...param, type: e.target.value });
              }}
            >
              <MenuItem value={"Dog"}>Dog</MenuItem>
              <MenuItem value={"Cat"}>Cat</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ width: "43%" }}>
            <InputLabel id="demo-simple-select-label">Breed</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Breed"
              onChange={(e) => {
                setParam({ ...param, breed: e.target.value });
              }}
            >
              <MenuItem value={"Becgie"}>Becgie</MenuItem>
              <MenuItem value={"Pitbull"}>Pitbull</MenuItem>
              <MenuItem value={"Corgi"}>Corgi</MenuItem>
              <MenuItem value={"Husky"}>Husky</MenuItem>
              <MenuItem value={"Akia"}>Akia</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0",
          }}
        >
          <TextField
            onChange={(e) => {
              setParam({ ...param, weight: e.target.value });
            }}
            id="outlined-basic"
            label="WEIGHT"
            placeholder="EX: 3kg"
            variant="outlined"
          />
          <TextField
            // onChange={(e) => {
            //   setParam({ ...param, color: e.target.value });
            // }}
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
            onChange={(e) => {
              setParam({ ...param, age: e.target.value });
            }}
            id="outlined-basic"
            label="BIRTH"
            placeholder="Ex: 3 months"
            variant="outlined"
          />
          <TextField
            // onChange={(e) => {
            //   setParam({ ...param, address: e.target.value });
            // }}
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
          <TextField
            onChange={(e) => {
              setParam({ ...param, title: e.target.value });
            }}
            id="outlined-basic"
            label="Title"
            placeholder="Write something"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setParam({ ...param, amount: e.target.value });
            }}
            id="outlined-basic"
            label="Price"
            placeholder="Ex: 100000"
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
                control={
                  <Radio
                    onChange={(e) => {
                      setParam({ ...param, gender: "Female" });
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    onChange={(e) => {
                      setParam({ ...param, gender: "Male" });
                    }}
                  />
                }
                label="Male"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Gift"
                control={
                  <Radio
                    onChange={(e) => {
                      setParam({ ...param, type: "Gift" });
                    }}
                  />
                }
                label="Gift"
              />
              <FormControlLabel
                value="trade 1:1"
                control={
                  <Radio
                    onChange={(e) => {
                      setParam({ ...param, type: "Trade 1:1" });
                    }}
                  />
                }
                label="trade 1:1"
              />
              <FormControlLabel
                value="Sell"
                control={
                  <Radio
                    onChange={(e) => {
                      setParam({ ...param, type: "Sell" });
                    }}
                  />
                }
                label="Sell"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <textarea
            onChange={(e) => {
              setParam({ ...param, content: e.target.value });
            }}
            placeholder="Content"
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
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            style={{
              marginTop: "20px",
              height: "40px",
              width: "60px",
              marginRight: "10px",
            }}
            onClick={async () => {
              let res = await createPostTrade(param);
              if (res && res.status === 200) {
                alert("thêm bài thành công!");
              }
              console.log("res", res);
            }}
          >
            Post
          </Button>
        </div>
      </div>
    </Modal>
  );
}
