import { LINKS } from '../config'
import { Ext } from './Ui'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div><strong>A’zamxo’ja Suhbatillayev</strong><p className="muted small">Software Development / QA / Cybersecurity</p></div>
        <nav aria-label="Footer">
          <Ext href={LINKS.github} className="icon-link" icon="github">GitHub</Ext>
          <Ext href={LINKS.linkedin} className="icon-link" icon="linkedin">LinkedIn</Ext>
        </nav>
        <p className="muted small">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
