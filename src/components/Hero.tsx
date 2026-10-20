import { LINKS } from '../config'
import { Ext } from './Ui'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <p className="status">OPEN TO SUITABLE JUNIOR OPPORTUNITIES</p>
        <h1>Developer. Security Learner. Problem Solver.</h1>
        <p className="lead">I build software, explore web application security, and use AI-assisted development to turn ideas into working applications. Currently focused on software quality, testing, and secure development.</p>
        <div className="actions">
          <a className="btn btn-primary" href="#projects">Explore My Projects</a>
          <Ext href={LINKS.github} icon="github">View My GitHub</Ext>
          <Ext href={LINKS.linkedin} icon="linkedin">LinkedIn</Ext>
        </div>
        <p className="highlights">Java / Spring Boot <i>·</i> Web Application Security <i>·</i> AI-Assisted Development <i>·</i> C3SA + BTF</p>
      </div>
    </section>
  )
}
