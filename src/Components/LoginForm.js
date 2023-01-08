import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  return (
    <Form className="login" action="#">
      <TextInput type="text" icon="alternate_email" placeholder="Enter email" />

      <TextInput type="password" icon="lock" placeholder="Enter password" />

      <Button text="Submit Now" />

      <div class="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </Form>
  );
}
