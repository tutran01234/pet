import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";

import { User } from "@phosphor-icons/react";
import { NavbarLeft } from "../navbarLeft";
import { Article } from "../../pages/Home/article";
import ToastCustom from "../toast/toastCustom";
import { toast } from "react-toastify";

export function Posting(props) {
  const [arrPost, setArrPost] = useState("");
  const [image, setImage] = useState(null);
  const [titleAticle, setTitleAticle] = useState("");

  const { handleOpenModal } = props;
  const { dataUser, postArticle, isToken, getListPost } =
    useContext(UserContext);

  const handleImageUpload = async (e) => {
    const file2 = e.target.files[0] || null;

    if (file2) {
      const reader = new FileReader();
      reader.readAsDataURL(file2);

      reader.onload = (e) => {
        try {
          const base64Data = e.target.result;
          setImage(base64Data);
        } catch (error) {
          console.error("Lỗi khi chuyển đổi thành base64:", error);
        }
      };
    }
  };

  useEffect(() => {
    async function getDataNewFeeds() {
      let res = await getListPost();

      setArrPost(res);
    }
    getDataNewFeeds();
  }, []);
  const handlePostArticle = async () => {
    if (!image) {
      alert("Bạn chưa thêm ảnh bài viết!");
      return;
    }
    if (!titleAticle) {
      alert("bạn chưa nhập nội dung bài viết!");
      return;
    }
    let res = await postArticle(
      {
        token: "",
        content: titleAticle,
        attachment: [image],
      },
      isToken
    );
    if (res.status == 200) {
      alert("tạo bài viết thành công");
      ToastCustom("Thêm bài viết thành công", "success");
    }
  };
  return (
    <div className="post">
      <div className="post-article">
        <div
          className="avatar"
          style={{
            margin: "10px 0 0 10px",

            backgroundImage: `url("https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        ></div>

        <div className="input-post">
          <div className="area-text">
            <textarea
              onChange={(e) => {
                setTitleAticle(e.target.value);
              }}
              placeholder="Write something"
              style={{
                width: "490px",
                height: "100px",
                resize: "none",
                backgroundColor: "rgb(244 241 241)",
                borderRadius: "5px",
                margin: "5px",
                padding: "5px",
              }}
            ></textarea>
          </div>
          <div className="file-post">
            <div
              className="import-photo"
              style={image ? { color: "blue" } : {}}
            >
              <div style={{ opacity: 0, width: 0 }}>
                <Input type="file" onChange={handleImageUpload} />
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
            <button
              className="button-post"
              onClick={() => {
                handlePostArticle();
              }}
            >
              <i className="fa fa-paper-plane"></i>Post
            </button>
          </div>
        </div>
      </div>
      {arrPost &&
        arrPost.map((e, index) => (
          <Article
            key={index}
            handleOpenModal={handleOpenModal}
            valueArticle={e}
            imagePost={
              "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }
          />
        ))}
    </div>
  );
}
