import { Section, Tag } from './Ui'

const groups = [
  { t: 'Backend', s: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL', 'Hibernate', 'Spring Data JPA', 'REST APIs', 'Maven', 'Swagger'] },
  { t: 'Web Security', d: 'Learning and practice, not professional experience. I can solve some Apprentice-level access-control labs with assistance and am working toward doing them independently.', s: ['HTTP', 'Burp Suite', 'Access control & IDOR', 'Authentication', 'SQL injection labs', 'PortSwigger Academy', 'Kali Linux'] },
  { t: 'Workflow', s: ['Git and GitHub', 'Debugging', 'API testing', 'AI-assisted coding', 'Reading generated code', 'Test documentation'] },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid3">
        {groups.map((g) => (
          <article className="card" key={g.t}>
            <h3>{g.t}</h3>
            {g.d && <p className="muted small">{g.d}</p>}
            <ul className="tags">{g.s.map((x) => <Tag key={x}>{x}</Tag>)}</ul>
          </article>
        ))}
      </div>
      <p className="muted small">English: approximately B2+ (self-assessed; no official certificate).</p>
    </Section>
  )
}
