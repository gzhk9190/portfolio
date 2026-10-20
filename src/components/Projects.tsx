import { LINKS, SHOTS } from '../config'
import { Section } from './Ui'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid2">
        <ProjectCard
          name="KUN_UZ"
          desc="A news-site backend built with Java 17 and Spring Boot. The project uses Spring Data JPA with PostgreSQL, Flyway migrations, Spring Security with JWT, validation, mail support and Swagger annotations."
          tags={['Java 17', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Maven']}
          shot={SHOTS.kunUz}
          links={[{ label: 'Source on GitHub', href: LINKS.kunUz, icon: 'github' }]}
        />
        <ProjectCard
          name="Coffee Nation"
          desc="A design concept website for a specialty coffee roastery in Tashkent, built independently with AI-assisted development. It includes a filterable menu, a drink-matching guide, a brew-ratio calculator, a V60 timer and inquiry forms. It is a personal project, not the café’s official site."
          tags={['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel']}
          shot={SHOTS.coffee}
          links={[{ label: 'Live Demo', href: LINKS.coffeeLive }, { label: 'Source on GitHub', href: LINKS.coffeeRepo, icon: 'github' }]}
        />
      </div>
    </Section>
  )
}
