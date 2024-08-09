import Form from "../components/forms"

export default function Login() {
    return (
        <Form route={"/api/token/"} type={"login"} ></Form>
    )
  }