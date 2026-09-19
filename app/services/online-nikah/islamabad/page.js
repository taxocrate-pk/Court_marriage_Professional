import CityServiceTemplate from '@/components/city-service-template'

export const metadata = {
  title: 'Online Nikah in Islamabad | Legal & Sharia Guidance',
  description: 'Online Nikah in Islamabad with legal guidance on consent, witnesses, Nikah Nama, registration, overseas cases and marriage documentation.',
  alternates: { canonical: 'https://courtmarriage.pro/services/online-nikah/islamabad' },
}

const faqs = [
  { q: 'Can Online Nikah be arranged for parties connected with Islamabad?', a: 'Yes, provided the parties are legally eligible and the case is structured properly. Identity, consent, witnesses, Nikah Nama particulars and the correct ICT-related registration route should be reviewed in advance.' },
  { q: 'Can one party be overseas while the other is in Islamabad?', a: 'Yes. Overseas cases are common, but the need for authority documents, attestation or other supporting papers depends on the parties’ locations, nationality and the purpose for which the marriage record will later be used.' },
  { q: 'Is an online video ceremony automatically enough in Islamabad?', a: 'No. The communication medium is only one part of the arrangement. Consent, witnesses, Ijab-o-Qabool, Mahr, documentation and any representation must still be considered carefully.' },
  { q: 'What identity documents are usually checked?', a: 'CNIC, NICOP or passport details are commonly reviewed along with photographs, witness documents and any papers relating to previous marital status or overseas residence.' },
  { q: 'Can the marriage be registered in Islamabad after Online Nikah?', a: 'Registration may be possible through the competent ICT-related process where the facts support that jurisdiction. The marriage ceremony and the registration step should be treated separately and coordinated correctly.' },
  { q: 'Is same-day completion guaranteed?', a: 'No. Timing depends on document readiness, office processing, working days, verification needs and whether the matter has an overseas or foreign-document element.' },
  { q: 'Can an Islamabad Online Nikah record be used abroad?', a: 'It may be used as part of a foreign legal or immigration process, but the receiving authority decides what attestation, translation or additional evidence it requires.' },
  { q: 'Is an embassy NOC always required?', a: 'No blanket rule applies. Requirements vary according to nationality, marital status, destination country and the registration practice relevant to the particular case.' },
  { q: 'Can a divorced person remarry through Online Nikah in Islamabad?', a: 'Where legally eligible, yes, but the previous marriage and divorce documentation should be reviewed before arranging the new Nikah.' },
  { q: 'How are Online Nikah fees in Islamabad determined?', a: 'Fees depend on the legal and documentation work, registration assistance, overseas coordination, authority documents and any attestation requirement. A case review is needed for an accurate quotation.' },
]

export default function OnlineNikahIslamabadPage() {
  return (
    <CityServiceTemplate
      service="Online Nikah"
      city="Islamabad"
      path="/services/online-nikah/islamabad"
      phone="+923331127836"
      displayPhone="+92 333 1127836"
      intro="Online Nikah in Islamabad is often used by couples who are in different cities or countries, including overseas Pakistanis and foreign-linked families. The process should be planned around legal capacity, free consent, witnesses, accurate Nikah Nama particulars and the correct Islamabad Capital Territory registration route rather than a generic promise that a video ceremony alone completes every legal step."
      areas={['F-6', 'F-7', 'F-8', 'G-8', 'G-9', 'G-10', 'G-11', 'I-8', 'Bahria Enclave']}
      localOverview={[
        'Islamabad Online Nikah enquiries frequently involve one party living abroad, government or diplomatic families, professionals posted outside the capital, or couples who want the Nikah completed before they can attend the same place. These matters are easier to manage when identity and marital-status documents are reviewed before the ceremony is scheduled.',
        'The Islamabad Capital Territory has its own administrative context, so the registration plan should not simply copy a process used in Karachi or Punjab. The parties’ addresses, the place connected with the marriage record and any overseas element should be considered when identifying the appropriate registration route.',
        'A remote Nikah still requires careful attention to the substance of the marriage. Free consent, witnesses, Mahr, the wording of Ijab-o-Qabool and any representative acting for a party must be dealt with properly. The fact that the parties communicate by video does not remove those requirements.',
        'Islamabad cases also commonly involve documents that will later be used before embassies, immigration authorities or foreign institutions. Because those bodies may have their own evidentiary rules, the intended foreign use should be disclosed at the start so the marriage record is prepared consistently.'
      ]}
      registrationNotes={[
        'For Islamabad-linked cases, the Nikah Nama and supporting particulars should be prepared with the ICT registration route in mind. Solemnisation and official registration remain distinct stages even where they are coordinated as part of one legal service.',
        'A computerised marriage certificate, where required, is based on the underlying registered record and the applicable local administrative process. It should not be represented as an automatic result of the online ceremony itself.',
        'Foreign nationality, previous marriage, overseas residence or embassy use can add further documentation requirements. These should be identified before the parties assume that a standard local checklist will be enough.'
      ]}
      overseasNotes={[
        'Islamabad handles a high proportion of embassy, diplomatic and overseas-family matters. If the marriage record will be used for a visa, family sponsorship, immigration file or foreign registration, the destination country’s document expectations should be considered early.',
        'Attestation, translation, certified copies or an authority document may be relevant in some cases, but none should be treated as universally mandatory. The correct requirement depends on the foreign authority and the structure of the individual case.'
      ]}
      practicalNotes={[
        'Use the Islamabad call number for Islamabad matters while the universal WhatsApp number remains available for written case intake.',
        'Use passport spellings exactly where the marriage documents may later be presented to an embassy or immigration authority.',
        'Do not assume an embassy NOC is required in every foreign-national case; confirm the nationality-specific requirement first.',
        'If one party is abroad, clarify whether the intended arrangement uses direct participation, representation or another lawful structure before drafting documents.'
      ]}
      faqs={faqs}
    />
  )
}
