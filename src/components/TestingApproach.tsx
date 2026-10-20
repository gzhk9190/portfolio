import { Section } from './Ui'

const steps = ['Understand the expected behavior', 'Identify the important user flows', 'Test normal and edge-case inputs', 'Reproduce unexpected behavior', 'Record expected versus actual results', 'Write clear reproduction steps', 'Verify fixes when possible']

export default function TestingApproach() {
  return (
    <Section id="testing" title="How I approach testing">
      <p className="prose">Testing a feature starts with knowing what it should do. From there I follow this routine:</p>
      <ol className="steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
    </Section>
  )
}
