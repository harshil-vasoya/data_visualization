 import Cookies from "js-cookie";
function login(data ,setMessage, callback)
{
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/LogIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "OK") {
            Cookies.set("token", res.token);
            callback(res);
          }
          else
          {
          setMessage(res.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
}
export default login;