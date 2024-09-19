const spinnerStyle = "spinner";
export default function Spinner({ className = "", ...props }) {
  const css = `${spinnerStyle} ${className}`;
  return <div className={css} {...props} />;
}
