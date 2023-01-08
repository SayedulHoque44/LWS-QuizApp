export default function CheckBox({ id, className, text, ...rest }) {
  return (
    <label htmlFor={id} className={className}>
      <input id={id} type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}
