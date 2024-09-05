export default function Card({ className, ...props }) {
  const css = `card ${className}`;
  return <div className={css} {...props} />;
}
