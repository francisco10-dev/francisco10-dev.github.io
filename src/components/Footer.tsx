import { useApp } from '../context/AppContext';
import './Footer.css';

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy mono">© {new Date().getFullYear()} Francisco Ortiz. </p>
      </div>
    </footer>
  );
}
