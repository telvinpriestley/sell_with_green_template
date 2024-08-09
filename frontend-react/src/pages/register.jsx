import Form from "../components/forms"

export default function Register() {
    return (<div>
     <Form route={"/api/user/register/"} type={"register"}></Form>
    </div>
    )
  }