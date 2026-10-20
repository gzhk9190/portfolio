import { CERTS } from '../config'
import { Section } from './Ui'

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="grid2">
        {CERTS.map((c) => (
          <article className="card cert" key={c.abbr}>
            <a className="cert-img" href={c.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${c.title} certificate in full size`}>
              <img src={c.image} alt={`${c.title} certificate issued to A’zam Suhbatillayev by ${c.issuer}`} loading="lazy" />
            </a>
            <h3>{c.title} <span className="abbr">({c.abbr})</span></h3>
            <p className="muted small">Issued by {c.issuer}<br />Credential ID: <code>{c.id}</code></p>
            {c.verifyUrl && <a className="btn btn-sm" href={c.verifyUrl} target="_blank" rel="noopener noreferrer">Verify</a>}
          </article>
        ))}
      </div>
    </Section>
  )
}
