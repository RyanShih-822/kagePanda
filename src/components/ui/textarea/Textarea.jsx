const textareaStyle = "textarea";
export default function Textarea({ className = "", ...props }) {
  const css = `${textareaStyle} ${className}`;
  return <textarea className={css} {...props} />;
}
