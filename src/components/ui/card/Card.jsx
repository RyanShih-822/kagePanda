const cardStyle = "card";

export default function Card({ className, ...props }) {
  const css = `${cardStyle} ${className}`;
  return <div className={css} {...props} />;
}
