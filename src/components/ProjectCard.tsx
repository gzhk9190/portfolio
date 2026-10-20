import type { ReactNode } from 'react'
import { Ext, Tag } from './Ui'

type P = { name: string; desc: ReactNode; tags: string[]; shot?: string; links: { label: string; href: string; icon?: 'github' }[] }

export default function ProjectCard({ name, desc, tags, shot, links }: P) {
  return (
    <article className="card project">
      {shot && <div className="shot"><img src={shot} alt={`${name} screenshot`} loading="lazy" /></div>}
      <h3>{name}</h3>
      <p>{desc}</p>
      <ul className="tags">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
      <div className="actions">{links.map((l, i) => <Ext key={l.href} href={l.href} icon={l.icon} className={i === 0 && !l.icon ? 'btn btn-primary' : 'btn'}>{l.label}</Ext>)}</div>
    </article>
  )
}
