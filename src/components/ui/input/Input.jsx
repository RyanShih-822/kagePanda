export default function Input({ className = "", id, ...props }) {
  return (
    <input className={`input  ${className}`} type="text" id={id} {...props} />
  );
}
