import classes from "./styles/Button.module.css";

export default function Button({ text, ...rest }) {
  return (
    <button {...rest} className={classes.button}>
      <span>{text}</span>
    </button>
  );
}
