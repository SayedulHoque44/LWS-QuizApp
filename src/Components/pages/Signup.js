import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={"signup"}>
          <TextInput type="text" placeholder="Enter Name" icon={"person"} />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon={"alternate_email"}
          />

          <TextInput
            type="password"
            placeholder="Enter password"
            icon={"lock"}
          />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon={"lock_clock"}
          />

          <CheckBox text={"I agree to the Terms & Conditions"} />

          <Button text={"Submit now"} />
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
