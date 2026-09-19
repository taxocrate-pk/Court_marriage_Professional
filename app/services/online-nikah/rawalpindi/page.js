import CityServiceTemplate from '@/components/city-service-template'

export const metadata = {
  title: 'Online Nikah in Rawalpindi | Legal & Sharia Guidance',
  description: 'Online Nikah in Rawalpindi with legal guidance on consent, witnesses, Nikah Nama, registration, overseas cases and marriage documentation.',
  alternates: { canonical: 'https://courtmarriage.pro/services/online-nikah/rawalpindi' },
}

const faqs = [
  { q: 'Can Online Nikah be arranged for a Rawalpindi-based couple?', a: 'Yes, where the parties are legally eligible and the marriage is structured properly. Identity, consent, witnesses, Nikah Nama particulars and the correct local registration route should be reviewed in advance.' },
  { q: 'Can one party be abroad while the other is in Rawalpindi?', a: 'Yes. Overseas participation is common, but the legal route depends on location, nationality, documents and whether any authority or attestation arrangement is required.' },
  { q: 'Is a video call by itself enough for Online Nikah in Rawalpindi?', a: 'No. The communication method is only one part of the process. Consent, witnesses, Ijab-o-Qabool, Mahr, identity and documentation still need to be handled properly.' },
  { q: 'What documents are usually needed?', a: 'CNIC, NICOP or passport details, photographs, witness documents and any marital-status or overseas papers relevant to the case are commonly reviewed before the Nikah is arranged.' },
  { q: 'Can the marriage be registered after Online Nikah in Rawalpindi?', a: 'Registration may be completed through the competent local process where the facts support that jurisdiction. Solemnisation and registration should be treated as separate but coordinated stages.' },
  { q: 'Can you guarantee same-day completion?', a: 'No. Timelines depend on document readiness, office processing, verification issues, working days and any overseas or foreign-document requirement.' },
  { q: 'Can the documents later be used for a foreign visa?', a: 'They may be relevant to a visa or sponsorship file, but the receiving country determines its own attestation, translation and evidentiary requirements.' },
  { q: 'Is a power of attorney always required?', a: 'No. The need for an authority document depends on how the Nikah is structured and where the parties are located. It should be used only where appropriate to the actual case.' },
  { q: 'Can a divorcee remarry through Online Nikah in Rawalpindi?', a: 'Where legally eligible, yes, but the earlier marriage and divorce record should be reviewed before a new Nikah is arranged.' },
  { q: 'How are Online Nikah fees in Rawalpindi determined?', a: 'Fees depend on legal review, documentation, registration assistance, overseas coordination and any authority or attestation work. A case review is needed for an accurate quotation.' },
]

export default function OnlineNikahRawalpindiPage() {
  return (
    <CityServiceTemplate
      service="Online Nikah"
      city="Rawalpindi"
      path="/services/online-nikah/rawalpindi"
      phone="+923331127831"
      displayPhone="+92 333 1127831"
      intro="Online Nikah in Rawalpindi can help couples who are in different cities or countries complete their marriage through a structured legal and documentation process. Professional support should focus on consent, witnesses, accurate Nikah Nama particulars, the appropriate Rawalpindi-side registration route and any overseas requirements instead of treating a remote ceremony as the end of the legal process."
      areas={['Saddar Rawalpindi', 'Satellite Town', 'Bahria Town Rawalpindi', 'Chaklala', 'Westridge', 'Peshawar Road', 'Adiala Road', 'Commercial Market']}
      localOverview={[
        'Rawalpindi Online Nikah cases commonly involve one party living in Islamabad, another district of Punjab or abroad, while family and documentation arrangements remain connected with Rawalpindi. Because the twin cities have different administrative jurisdictions, an Islamabad registration route should not automatically be assumed for a Rawalpindi matter.',
        'A remote Nikah should be planned around the substance of the marriage rather than the platform used for communication. Free consent, witnesses, Mahr, Ijab-o-Qabool and any representative acting for a party should be arranged carefully before the ceremony takes place.',
        'Rawalpindi clients may later need marriage documents for family registration, immigration, sponsorship, employment benefits or other official purposes. Accurate names, identity numbers, addresses and marital-status particulars therefore matter from the first draft of the Nikah Nama.',
        'The correct registration authority depends on the facts of the case and the local area connected with the marriage record. Choosing the proper route at the start helps reduce later verification or certificate problems.'
      ]}
      registrationNotes={[
        'For Rawalpindi-linked cases, the Nikah Nama should be prepared with the relevant local registration process in mind. The ceremony and the administrative recording of the marriage are separate legal steps even when one team coordinates both.',
        'A computerised marriage certificate is based on the registered underlying record and the competent local authority. It should not be described as automatically issued at the moment of Online Nikah.',
        'Where one party is foreign, overseas or previously married, additional documents can affect the registration stage. Those issues should be identified before the parties rely on a standard checklist.'
      ]}
      overseasNotes={[
        'Rawalpindi has many families with members serving or working abroad, including in the Gulf, United Kingdom, Europe and North America. Where an overseas party is involved, passport details, foreign address and intended use of the marriage record should be reviewed early.',
        'If the resulting record will be presented abroad, attestation, translation or other formalities may be required by the receiving authority. Those requirements are country-specific and should be checked separately from the Nikah itself.'
      ]}
      practicalNotes={[
        'Use the Rawalpindi call number for Rawalpindi matters while the universal WhatsApp number remains available for written case intake.',
        'Do not mix Islamabad and Rawalpindi jurisdictional assumptions merely because the cities are adjacent.',
        'Where one party is abroad, provide identity and previous-marriage documents before setting the Nikah date so discrepancies can be resolved first.',
        'If foreign use is expected, confirm the destination country and likely attestation requirements before ordering unnecessary certificates.'
      ]}
      faqs={faqs}
    />
  )
}
