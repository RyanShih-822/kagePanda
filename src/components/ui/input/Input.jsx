const InputStyle = "input";

export default function Input({ className = "", ...props }) {
  const css = `${InputStyle} ${className}`;
  return <input className={css} type="text" {...props} />;
}
