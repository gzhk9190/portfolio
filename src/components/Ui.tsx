import type { ReactNode } from 'react'
import { Icon } from './Icons'

export const Ext = ({ href, children, className = 'btn', icon }: { href: string; children: ReactNode; className?: string; icon?: 'github' | 'linkedin' }) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">{icon && <Icon name={icon} />}{children}</a>
)

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="section" aria-labelledby={`${id}-h`}>
    <div className="wrap">
      <h2 id={`${id}-h`}>{title}</h2>
      {children}
    </div>
  </section>
)

export const Tag = ({ children }: { children: ReactNode }) => <li className="tag">{children}</li>
