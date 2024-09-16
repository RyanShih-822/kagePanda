export default function Textarea({ className = "", id, ...props }) {
  return <textarea className={`textarea ${className}`} id={id} {...props} />;
}
