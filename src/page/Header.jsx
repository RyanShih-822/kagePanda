export default function Header() {
  return (
    <header className="header">
      <div className="container justify-content-between">
        <h1>
          <a href="#">Logo</a>
        </h1>
        <nav>
          <ul className="d-flex gap-3">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
