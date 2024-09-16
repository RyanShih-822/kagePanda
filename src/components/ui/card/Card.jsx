const cardStyle = "card";

export default function Card({ className = "", htmlTag = "div", ...props }) {
  const css = `${cardStyle} ${className}`;
  const Tag = htmlTag;
  return <Tag className={css} {...props} />;
}
