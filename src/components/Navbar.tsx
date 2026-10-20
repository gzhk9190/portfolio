import { useState } from 'react'
import { LINKS } from '../config'
import { Ext } from './Ui'

const items = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo" aria-label="AZAM — back to top">AZAM.</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav id="nav-links" className={open ? 'links open' : 'links'} aria-label="Primary">
          {items.map((i) => <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>{i}</a>)}
          <Ext href={LINKS.github} className="icon-link" icon="github"><span className="sr">GitHub</span></Ext>
          <Ext href={LINKS.linkedin} className="btn btn-sm" icon="linkedin">LinkedIn</Ext>
        </nav>
      </div>
    </header>
  )
}
