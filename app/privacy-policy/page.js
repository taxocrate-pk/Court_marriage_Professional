import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Court Marriage Professional',
  description: 'Privacy policy for Court Marriage Professional, including enquiry data, confidentiality, website usage and contact information.',
  alternates: { canonical: 'https://courtmarriage.pro/privacy-policy' },
}

const sections = [
  ['Information we may receive', 'When you contact us through telephone, WhatsApp, email or a website form, you may voluntarily provide your name, contact details, city, nationality, marital-status information and a summary of the legal or marriage-documentation matter for which you are seeking assistance. Please do not send passwords, banking credentials or unrelated sensitive records.'],
  ['How enquiry information is used', 'Information supplied during an enquiry is used to understand the requested service, route the matter to the appropriate team, communicate with you, prepare a document checklist, arrange a consultation and, where you instruct us to proceed, provide the requested professional service.'],
  ['Legal and professional confidentiality', 'Marriage, family and identity matters can be sensitive. Information received for professional legal work is handled with appropriate confidentiality subject to applicable law, professional obligations, court orders and circumstances in which disclosure is legally required.'],
  ['Website and technical information', 'Like most websites, hosting and analytics systems may process technical information such as browser type, device type, approximate location, referring page, visited pages, security events and IP-related data. This information may be used for website security, performance and service improvement.'],
  ['Third-party communication services', 'If you choose to contact us through WhatsApp, telephone, email or another third-party service, that provider processes information under its own privacy terms. We do not control the privacy practices of external platforms.'],
  ['Document retention', 'Records connected with an active legal or documentation matter may be retained for the period reasonably required for professional, legal, compliance and record-keeping purposes. Enquiry information that does not become an active matter may be retained for a shorter operational period.'],
  ['Your choices', 'You may ask us to correct inaccurate contact information or clarify how information supplied for an enquiry is being used. Some records cannot be deleted immediately where retention is required for legal, professional, security or accounting reasons.'],
  ['No sale of enquiry data', 'We do not describe client or enquiry information as a product for sale to advertisers. Information is used for service delivery, communication, professional administration, security and lawful compliance purposes.'],
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold mb-6">Legal Information</div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-foreground/70 text-lg leading-relaxed mb-12">This policy explains how Court Marriage Professional handles information provided through website enquiries and professional service communications. It is intended as a clear operational privacy statement and does not replace any rights or obligations created by applicable law.</p>

        <div className="space-y-5">
          {sections.map(([title, text]) => (
            <section key={title} className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black mb-3">{title}</h2>
              <p className="text-foreground/70 leading-7">{text}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
          <h2 className="text-2xl font-black mb-3">Contact about privacy</h2>
          <p className="text-foreground/70 leading-7">For a privacy-related question connected with this website or an enquiry, use the <Link href="/contact" className="text-gold font-bold hover:underline">Contact Us</Link> page and identify the matter as a privacy request.</p>
        </section>

        <p className="mt-10 text-sm text-foreground/55">Last updated: September 2026.</p>
      </div>
    </div>
  )
}
