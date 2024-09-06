export default function Footer() {
  return (
    <footer className="footer">
      <div className="container justify-content-between">
        <h1>
          <a href=""> logo</a>
        </h1>
        <nav>
          <ul className="d-flex gap-3">
            <li>
              <a href="#">常見問題</a>
            </li>
            <li>
              <a href="#">聯絡我們</a>
            </li>
            <li>
              <a href="#">意見回饋</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
