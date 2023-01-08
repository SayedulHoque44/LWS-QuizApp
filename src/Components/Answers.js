import CheckBox from "./CheckBox";
import classes from "./styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox id="option1" className={classes.answer} text="A new Hope" />
      <CheckBox id="option2" className={classes.answer} text="A new Hope" />
    </div>
  );
}
