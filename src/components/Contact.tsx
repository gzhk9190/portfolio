import { EMAIL, LINKS } from '../config'
import { Ext, Section } from './Ui'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="prose">The best way to reach me is through LinkedIn or GitHub.</p>
      <div className="actions">
        <Ext href={LINKS.linkedin} className="btn btn-primary" icon="linkedin">LinkedIn</Ext>
        <Ext href={LINKS.github} icon="github">GitHub</Ext>
        {EMAIL && <a className="btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>}
      </div>
    </Section>
  )
}
