import classes from "./styles/Form.module.css";

export default function Form({ className, children, ...rest }) {
  return (
    <form {...rest} className={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
}
