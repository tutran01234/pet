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
import { Loading } from "../Loading";
import { ArticlePending } from "../../pages/Home/articlependding";

export function Staff() {
  const [arrPost, setArrPost] = useState("");

  const { getPostPendding, acceptPost, refusePost } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const handleAccept = async (id) => {
    let a = await acceptPost({
      token: window.localStorage.getItem("token"),
      postId: id,
    });
    if (a.status === 200) {
      alert("Bài viết được xác nhận");
    }
    console.log(a.status);
    setReload(!reload);
  };
  const handleRefuse = async (id) => {
    let a = await refusePost({
      token: window.localStorage.getItem("token"),
      postId: id,
    });
    if (a.status === 200) {
      alert("Đã từ chốt bài viết!");
    }
    console.log(a.status);
    setReload(!reload);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getDataNewFeeds() {
      let res = await getPostPendding();
      console.log("res pendding:", res[0].attachment[0].attachment);

      setArrPost(res);
      setIsLoading(false);
    }
    getDataNewFeeds();
  }, [reload]);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <div className="post">
        {isLoading && <Loading />}
        {arrPost &&
          arrPost.map((e, index) => (
            <ArticlePending
              id={e.id}
              handleAccept={handleAccept}
              handleRefuse={handleRefuse}
              key={index}
              handleOpenModal={() => {
                console.log(1);
              }}
              valueArticle={e}
              imagePost={
                e && e.attachment.length > 0 ? e.attachment[0].attachment : ""
              }
            />
          ))}
      </div>
    </div>
  );
}
