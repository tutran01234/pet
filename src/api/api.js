export const API_URL = 'https://petloversfptapi.azurewebsites.net/';

export function TOKEN_POST(body) {
  return {
    url: API_URL + 'jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + 'jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(idUser, data) {
  console.log("userIdL", idUser);

  return {
    url: `${API_URL}user/${idUser}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + data,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function REGISTER_USER(body) {
  return {
    url: API_URL + "user/register",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOGIN_USER(body) {
  return {
    url: API_URL + "user/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem(token),
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: `${API_URL}api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: `${API_URL}api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function CREATE_POST(formData, token) {
  return {
    url: API_URL + "/post/create-post",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}
export function ACCEPT_POST(formData) {
  return {
    url: API_URL + "manage/post/approve-post",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}


export function CREATE_POST_TRADE(formData) {
  return {
    url: API_URL + "postTrade/create-post-trade",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}

export function POST_FOLLOW(formData) {
  return {
    url: API_URL + "UserFollowing/follow-user",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}

export function REFUSE_POST(formData) {
  return {
    url: API_URL + "manage/post/refuse-post",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  };
}

export function LIST_POST_NEW_FEEDS() {
  return {
    url: `${API_URL}post/news-feed`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    },
  };
}
export function GET_POST_PENDDING() {
  return {
    url: `${API_URL}manage/post/pending-post`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    },
  };
}

export function GET_LIST_POST_BY_USER(userId) {
  return {
    url: `${API_URL}/user/${userId}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    },
  };
}
