const buttonStyle = "btn";

export default function Button({ className = "", ...props }) {
  const css = `${buttonStyle} ${className}`;

  return <button className={css} type="button" {...props} />;
}
