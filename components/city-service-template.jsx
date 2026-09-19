import Link from 'next/link'
import {
  CheckCircle2,
  FileText,
  Globe2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
} from 'lucide-react'

const SITE_URL = 'https://courtmarriage.pro'
const WHATSAPP_NUMBER = '923331127834'
const WHATSAPP_DISPLAY = '+92 333 1127834'

export default function CityServiceTemplate({
  service,
  city,
  path,
  intro,
  localOverview = [],
  registrationNotes = [],
  overseasNotes = [],
  practicalNotes = [],
  faqs = [],
  phone,
  displayPhone,
  officeAddress,
  areas = [],
}) {
  const isOnline = service === 'Online Nikah'
  const waMessage = encodeURIComponent(
    `Assalam-o-Alaikum, mujhe ${service} in ${city} ke process, documents aur fee ke bare mein maloomat chahiye.`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  const steps = isOnline
    ? [
        ['Initial legal review', 'We begin by checking identity, lawful age, current marital status, nationality, location of both parties and the intended registration jurisdiction. Remote participation does not remove the need for these basic legal checks.'],
        ['Consent and Nikah structure', 'Free consent, Ijab-o-Qabool, Mahr, witnesses and any authorised representation are planned before the ceremony. The communication platform is only a tool; the legal and Sharia structure of the Nikah remains the central issue.'],
        ['Document verification', 'CNIC, NICOP or passport particulars are matched carefully. Previous-marriage documents, overseas records or authority papers are reviewed where the facts require them.'],
        ['Nikah Nama preparation', 'Names, identity numbers, addresses, Mahr and marital-status particulars are entered consistently so the marriage record can be relied upon later for registration, immigration, inheritance or other official purposes.'],
        ['Registration planning', `The ceremony and administrative registration are separate stages. The competent local process connected with ${city} should be identified before the couple assumes that a remote ceremony automatically creates every later certificate.`],
        ['Post-marriage documentation', 'Where required, the file may continue with certified copies, a computerised marriage certificate, translation, attestation or overseas-use documentation. These are handled according to the actual destination and purpose.'],
      ]
    : [
        ['Confidential case review', `We review the couple’s identity, legal age, free consent, marital status and the local jurisdiction relevant to Court Marriage in ${city}. Any overseas or protection issue is identified before a timeline is promised.`],
        ['Eligibility and identity checks', 'CNIC, passport or NICOP particulars are checked for accurate names and dates of birth. If a party was previously married, the relevant divorce, khula, talaq-effectiveness or death record may also need review.'],
        ['Nikah arrangements', 'The parties settle free consent, Mahr, witnesses and any agreed conditions. A responsible legal service distinguishes the Nikah itself from any court or police proceedings that might arise only in a genuine protection dispute.'],
        ['Nikah Nama completion', 'The Nikah Nama is prepared carefully so identity particulars, addresses, Mahr, witness details and marital status remain consistent with the source documents.'],
        ['Marriage registration', `The appropriate Nikah Registrar and local registration channel for ${city} are identified. Registration is a statutory documentary stage and should not be confused with the phrase “court marriage”.`],
        ['Certificate and follow-up', 'After registration, couples may need certified copies, a computerised certificate, translation, attestation or overseas-use guidance. Each follow-up step is explained separately rather than bundled into an unrealistic instant-completion promise.'],
      ]

  const requirements = [
    ['Identity documents', 'Valid identity documents for both parties are central to the file. Passport or NICOP details may become particularly important in overseas cases.'],
    ['Lawful age and capacity', 'The applicable minimum-age and legal-capacity rules should be checked for the relevant province or territory before the marriage is arranged.'],
    ['Free consent', 'Marriage must be based on genuine free consent. Coercion, unlawful confinement or a real safety threat should be treated as a separate legal issue requiring case-specific advice.'],
    ['Witnesses and Mahr', 'Witness arrangements and Mahr should be settled clearly and then recorded accurately in the Nikah Nama or supporting documentation.'],
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        name: `${service} in ${city} - Court Marriage Professional`,
        url: `${SITE_URL}${path}`,
        areaServed: city,
        serviceType: `${service} legal assistance and marriage documentation`,
        telephone: WHATSAPP_DISPLAY,
        description: intro,
        ...(officeAddress
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: officeAddress,
                addressLocality: city,
                addressCountry: 'PK',
              },
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: isOnline ? 'Online Nikah' : 'Court Marriage',
            item: `${SITE_URL}${isOnline ? '/services/online-nikah' : '/services/court-marriage'}`,
          },
          { '@type': 'ListItem', position: 3, name: `${service} in ${city}`, item: `${SITE_URL}${path}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-gold/10 via-gold/5 to-transparent" />
        <div className="absolute top-24 right-[-100px] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <section className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold mb-6">
              Professional Marriage Legal Services · {city}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-7">
              {service} <span className="text-gold">in {city}</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-3xl mb-7">{intro}</p>

            <p className="text-foreground/70 leading-relaxed max-w-3xl mb-8">
              {isOnline
                ? `Online Nikah in ${city} should be approached as a complete marriage and documentation matter, not as a simple video call. The technology used for communication is secondary to legal capacity, genuine consent, witnesses, Mahr, accurate identity particulars and the correct registration process.`
                : `The expression Court Marriage in ${city} is commonly used for a free-will marriage completed with professional legal and documentary assistance. It does not ordinarily mean that a judge performs the Nikah. The practical work centres on eligibility, free consent, Nikah arrangements, accurate documentation and registration through the competent local framework.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-black font-black hover:bg-gold-dark transition-colors">
                Call {displayPhone}
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-card/60 px-6 py-4 text-foreground font-bold hover:bg-gold/10 transition-colors">
                <MessageCircle className="w-5 h-5 text-gold" /> WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <aside className="glass-card rounded-[2rem] p-7 sm:p-9 shadow-2xl gold-glow lg:sticky lg:top-28">
            <FileText className="w-10 h-10 text-gold mb-5" />
            <h2 className="text-2xl font-black mb-5">Case preparation checklist</h2>
            <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
              <div><h3 className="font-bold text-foreground mb-1">Bride and groom</h3><p>CNIC, passport or NICOP particulars, current address and contact details.</p></div>
              <div><h3 className="font-bold text-foreground mb-1">Previous marital status</h3><p>Where applicable, divorce, khula, talaq-effectiveness or death documentation should be reviewed before the new marriage is arranged.</p></div>
              <div><h3 className="font-bold text-foreground mb-1">Witness information</h3><p>Identity particulars for witnesses and the agreed Nikah arrangements.</p></div>
              <div><h3 className="font-bold text-foreground mb-1">Overseas cases</h3><p>Passport, foreign address, authority documents, translation or attestation may become relevant depending on the country and intended use.</p></div>
            </div>

            {officeAddress && (
              <div className="mt-7 rounded-2xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">{city} Chamber Address</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{officeAddress}</p>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </section>

        <section className="py-20 lg:py-24 max-w-5xl">
          <div className="flex items-center gap-3 mb-7">
            <Scale className="w-7 h-7 text-gold" />
            <h2 className="text-3xl sm:text-4xl font-black">What {service} in {city} involves</h2>
          </div>
          <div className="space-y-6 text-foreground/72 leading-8 text-base sm:text-lg">
            {localOverview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <p>
              A professionally prepared marriage file should keep every stage consistent. Names and identity numbers should match the original documents, the parties should understand what they are signing, Mahr and agreed conditions should be recorded clearly, and the registration route should be identified before a certificate is required for immigration, banking, inheritance, employment or another official purpose.
            </p>
            <p>
              Couples should also distinguish between the Nikah ceremony, the registered Nikah Nama and any later computerised marriage certificate. These stages are connected, but they are not the same document or the same administrative act. Clear advice at the beginning reduces the risk of correction work later.
            </p>
          </div>
        </section>

        {areas.length > 0 && (
          <section className="pb-16">
            <h2 className="text-2xl font-black mb-5">Areas commonly served in {city}</h2>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span key={area} className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-foreground/75">{area}</span>
              ))}
            </div>
          </section>
        )}

        <section className="py-20 border-y border-border/40">
          <div className="max-w-3xl mb-12">
            <ShieldCheck className="w-9 h-9 text-gold mb-4" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Core legal and documentary requirements</h2>
            <p className="text-foreground/70 leading-relaxed">The exact checklist changes with jurisdiction, nationality, previous marital status and intended overseas use. These are the issues normally checked before proceeding.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {requirements.map(([title, text]) => (
              <div key={title} className="glass-card rounded-2xl p-6">
                <CheckCircle2 className="w-6 h-6 text-gold mb-4" />
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className="text-foreground/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Step-by-step {service} process in {city}</h2>
          <div className="max-w-5xl mx-auto space-y-5">
            {steps.map(([title, text], index) => (
              <div key={title} className="grid sm:grid-cols-[76px_1fr] gap-5 rounded-2xl border border-border/50 bg-card/50 p-6">
                <div className="text-3xl font-black text-gold/55">{String(index + 1).padStart(2, '0')}</div>
                <div><h3 className="text-xl font-black mb-2">{title}</h3><p className="text-foreground/70 leading-relaxed">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 py-16">
          <div className="glass-card rounded-[2rem] p-7 sm:p-9">
            <MapPin className="w-8 h-8 text-gold mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black mb-5">Registration and official records</h2>
            <div className="space-y-5 text-foreground/70 leading-relaxed">
              {registrationNotes.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
          <div className="glass-card rounded-[2rem] p-7 sm:p-9">
            <Globe2 className="w-8 h-8 text-gold mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black mb-5">Overseas and foreign-use cases</h2>
            <div className="space-y-5 text-foreground/70 leading-relaxed">
              {overseasNotes.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              <p>The receiving embassy, immigration department or foreign authority decides what translation, attestation or supporting evidence it requires. No responsible marriage service should guarantee acceptance by a foreign authority without checking that authority’s current requirements.</p>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HeartHandshake className="w-7 h-7 text-gold" />
            <h2 className="text-3xl font-black">Practical guidance for {city} clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {practicalNotes.map((note, index) => (
              <div key={index} className="rounded-2xl border border-border/50 bg-card/40 p-6 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p className="text-foreground/72 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Frequently asked questions about {service} in {city}</h2>
          <p className="text-center text-foreground/60 mb-10">General information only. Individual facts can change the legal and documentary requirements.</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-border/50 bg-card/50 p-6">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-5 font-black">
                  {faq.q}<span className="text-gold text-xl">+</span>
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/10 via-card/60 to-background p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Need a confidential {service} case review in {city}?</h2>
          <p className="max-w-3xl mx-auto text-foreground/70 leading-relaxed mb-8">Share the parties’ ages, nationality, current marital status, locations and whether both can attend. The legal team can then identify the appropriate Nikah, registration and documentation route before quoting a fee or completion time.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${phone}`} className="rounded-xl bg-gold px-7 py-4 text-black font-black hover:bg-gold-dark transition-colors">Call {displayPhone}</a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-gold/40 px-7 py-4 font-black hover:bg-gold/10 transition-colors">WhatsApp Now</a>
          </div>
          <p className="mt-6 text-xs text-foreground/55">Universal WhatsApp: {WHATSAPP_DISPLAY}</p>
        </section>

        <div className="pt-12 text-center">
          <Link href={isOnline ? '/services/online-nikah' : '/services/court-marriage'} className="text-gold font-bold hover:underline">← Back to {isOnline ? 'Online Nikah' : 'Court Marriage'} services</Link>
        </div>
      </div>
    </div>
  )
}
