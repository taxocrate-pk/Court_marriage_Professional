import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Court Marriage Professional',
  description: 'Website and professional-service terms for Court Marriage Professional, including legal-information limitations, fees, timelines and third-party requirements.',
  alternates: { canonical: 'https://courtmarriage.pro/terms-of-service' },
}

const sections = [
  ['Website information is general', 'Material on this website provides general information about court marriage, Online Nikah, marriage registration and related documentation in Pakistan. It should not be treated as a substitute for case-specific legal advice because age, nationality, marital status, jurisdiction, documents and intended overseas use can change the correct process.'],
  ['No automatic lawyer-client relationship', 'Viewing the website or sending an initial message does not by itself create a lawyer-client relationship or guarantee that a matter has been accepted. A professional engagement begins only when the scope of work is agreed and any required fee or documentation arrangement is confirmed.'],
  ['Eligibility and truthful information', 'Users are responsible for providing accurate identity, age, nationality, marital-status and supporting information. We may decline or pause a service where documentation is incomplete, inconsistent, unlawful or raises a concern about consent, age, identity or legal capacity.'],
  ['Fees and scope of work', 'Professional fees depend on the work required. Consultation, Nikah arrangements, registration assistance, certified copies, computerised certificates, translation, attestation, courier costs, urgent handling and overseas coordination may be separate items. A quotation should be read together with the stated scope and exclusions.'],
  ['Timelines are estimates', 'A ceremony may sometimes be arranged quickly in a straightforward matter, but government registration, certificate issuance, attestation, embassy processing and third-party verification operate on their own timelines. Unless expressly agreed in writing for a step within our control, time estimates are not guarantees.'],
  ['No guarantee of embassy or immigration acceptance', 'Foreign embassies, immigration departments, universities, employers and other authorities apply their own document and evidentiary rules. We can assist with preparation and documentation, but we cannot guarantee a visa, immigration decision, foreign registration or acceptance by a third-party authority.'],
  ['Remote and Online Nikah matters', 'A video call or online platform is only a method of communication. A remote Nikah should be structured around applicable legal and religious requirements, including consent, witnesses, identity, Mahr, Ijab-o-Qabool and any authorised representation. No page on this website should be read as saying that every video call automatically creates a legally effective and registrable marriage.'],
  ['Intellectual property and acceptable use', 'Website text, design elements, branding and original materials may not be copied, republished or commercially reused without permission except where law allows. Users should not attempt to disrupt the site, submit malicious code, impersonate another person or use the service for unlawful activity.'],
  ['External services and links', 'The website may refer to WhatsApp, email, government offices, local authorities or other external services. Those services are controlled by their respective providers or authorities, and their availability, processing times and policies are outside our control.'],
  ['Changes to these terms', 'These terms may be updated to reflect changes in services, technology, law or administrative practice. The version published on this page applies to current website use, subject to any separate written engagement terms agreed for a particular professional matter.'],
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold mb-6">Legal Information</div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Terms of Service</h1>
        <p className="text-foreground/70 text-lg leading-relaxed mb-12">These terms govern use of the Court Marriage Professional website and explain important limits around general information, professional engagement, timelines, fees and third-party processes.</p>

        <div className="space-y-5">
          {sections.map(([title, text]) => (
            <section key={title} className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black mb-3">{title}</h2>
              <p className="text-foreground/70 leading-7">{text}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
          <h2 className="text-2xl font-black mb-3">Questions about a specific matter</h2>
          <p className="text-foreground/70 leading-7">For case-specific guidance, use the <Link href="/contact" className="text-gold font-bold hover:underline">Contact Us</Link> page and provide only the information needed for an initial review.</p>
        </section>

        <p className="mt-10 text-sm text-foreground/55">Last updated: September 2026.</p>
      </div>
    </div>
  )
}
