import { Wiki } from "../../components/Wiki";
<Button variant="contained" component="label">
  Upload File
  <input type="file" hidden />
</Button>;
import { Head } from "../../components/Head";
import { NavbarLeft } from "../../components/navbarLeft";
import "./home.css";
import { Article } from "./article";
import { useContext, useEffect, useState } from "react";
import { Box, Modal, Typography } from "@material-ui/core";
import { Button } from "../../components/Forms/Button";
import { Posting } from "../../components/posting/posting";
import { Trading } from "../../components/trading/trading";
import { ModalTrading } from "../../components/trading/modalTrading";
import { UserContext } from "../../components/contexts/UserContext";
import jwtDecode from "jwt-decode";
import { DetailTrade } from "../../components/trading/traddingDetail";
export function Home() {
  const { isLogged } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalTrading, setOpenModalTrading] = useState(false);
  const [isTab, setTab] = useState("posting");
  const style = {
    position: "absolute",
    left: "42%",
    bottom: "300px",
    width: "250px",
    height: "100px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: 24,
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  // useEffect(() => {
  //   let a = jwtDecode(window.localStorage.getItem("token"));
  //   console.log("a:", a);
  // });
  console.log("istab", isTab);

  return (
    <section className=" mt-5" style={{ position: "relative" }}>
      <Head title="Wiki" />
      <div className="content-home">
        <NavbarLeft
          handleTab={(e) => {
            setTab(e);
          }}
        />
        {isTab === "posting" && <Posting handleOpenModal={handleOpenModal} />}{" "}
        {isTab === "trading" && (
          <Trading
            setTabDetail={() => {
              setTab("detailTrade");
            }}
          />
        )}
        {isTab === "detailTrade" && <DetailTrade />}
        {isTab === "trading" && (
          <button
            className="button-post-trading"
            onClick={() => {
              setOpenModalTrading(true);
            }}
          >
            <i
              className="fa fa-paper-plane"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Post
          </button>
        )}
        <div
          className="tag"
          style={isTab === "posting" ? { top: "90px" } : { top: "123px" }}
        >
          <h2 style={{ fontWeight: 500, margin: "10px 0 0 10px" }}>Hashtag</h2>
          <div className="item-tag">
            <p className="name-tag">#Alaska</p>
            <p className="count-post-tag">12.857 posts</p>
          </div>
          <div className="item-tag">
            <p className="name-tag">#Alaska</p>
            <p className="count-post-tag">12.857 posts</p>
          </div>
          <div className="item-tag">
            <p className="name-tag">#Alaska</p>
            <p className="count-post-tag">12.857 posts</p>
          </div>
        </div>
      </div>
      <ModalTrading
        style={style}
        handleOpenModal={() => {
          setOpenModalTrading(true);
        }}
        openModal={openModalTrading}
        hadleCloseModal={() => {
          setOpenModalTrading(false);
        }}
      />
      <Modal
        style={{ position: "relative" }}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div style={style}>
          <div
            className="hover-red"
            style={{
              paddingTop: "10px",
              textAlign: "left",
              borderBottom: "1px solid gray",
              width: "80%",
              margin: "0 auto",
              fontWeight: "300",
              paddingBottom: "15px",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-regular fa-flag"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Báo cáo bài viết
          </div>
          <div
            className="hover-red"
            style={{
              textAlign: "left",
              paddingTop: "13px",
              width: "80%",
              margin: "0 auto",
              fontWeight: "300",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-solid fa-trash"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Xóa bài viết
          </div>
        </div>
      </Modal>

      {/* <Wiki /> */}
    </section>
  );
}
