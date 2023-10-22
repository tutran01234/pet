import React, { useContext } from "react";
import { Input } from "../Forms/Input/index";
import { Button } from "../Forms/Button/index";
import { useForm } from "../../hooks/useForm";
import { REGISTER_USER, USER_POST } from "../../api/api";
import { UserContext } from "../contexts/UserContext";
import { useAPIFetch } from "../../hooks/useAPIFetch";
import { Warning } from "../Warning";
import { Head } from "../Head";

export function LoginCreateUser() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const phone = useForm();
  const name = useForm();

  const { userLogin } = useContext(UserContext);
  const { fetchAPIData, loading, error } = useAPIFetch();

  async function createUserAccount(event) {
    event.preventDefault();

    if (!email.validate() || !password.validate() || !username.validate() || !phone.validate() || !name.validate()) {
      return false;
    }

    const dataUser = {
      username: username.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      name: name.value,
    };

    const { url, options } = REGISTER_USER(dataUser);

    const { response } = await fetchAPIData(url, options);

    if (!response.ok) {
      console.log("Error");
      return false;
    }

    userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Create user" />
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-amber-500 after:z-sub">
        Register
      </h1>

      <form onSubmit={createUserAccount}>
        <Input
          type="text"
          id="username"
          name="username"
          required
          label="Username"
          {...username}
        />
        <Input
          type="text"
          id="name"
          name="name"
          required
          label="Name"
          {...name}
        />
        <Input
          type="email"
          id="email"
          name="email"
          label="E-mail"
          required
          {...email}
        />
        <Input
          type="text"
          id="phone"
          name="phone"
          label="Phone"
          required
          {...phone}
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          required
          {...password}
        />

        {loading ? (
          <Button disabled>Đợi xíu...</Button>
        ) : (
          <Button>Đăng ký</Button>
        )}

        <Warning errorMessage={error} />
      </form>
    </section>
  );
}
