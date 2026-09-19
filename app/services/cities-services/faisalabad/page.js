import CityServiceTemplate from '@/components/city-service-template'

export const metadata = {
  title: 'Court Marriage in Faisalabad | Legal Nikah & Registration',
  description: 'Court Marriage in Faisalabad with legal guidance on age, consent, documents, Nikah Nama, registration, fees and overseas marriage cases.',
  alternates: { canonical: 'https://courtmarriage.pro/services/cities-services/faisalabad' },
}

const faqs = [
  { q: 'What does Court Marriage in Faisalabad mean?', a: 'Court Marriage in Faisalabad is a commonly used expression for a free-will marriage completed with legal and documentary assistance. It does not ordinarily mean that a judge performs the Nikah. For Muslim couples, the practical work usually involves eligibility, free consent, Nikah arrangements, accurate Nikah Nama completion and registration through the competent local framework.' },
  { q: 'What is the minimum legal age for marriage in Faisalabad?', a: 'Faisalabad is governed by Punjab law. Current Punjab child-marriage law treats a person under eighteen, male or female, as a child for marriage purposes. Identity and date-of-birth documents should therefore be checked carefully before proceeding.' },
  { q: 'Is a court appearance necessary for Court Marriage in Faisalabad?', a: 'Not simply because the phrase court marriage is used. The Nikah and registration process are separate from litigation. Court or police proceedings may become relevant where there is a genuine protection issue, dispute or threat, but they are not a compulsory part of every marriage by choice.' },
  { q: 'Can an adult couple marry by choice in Faisalabad?', a: 'Where both parties are legally eligible and genuinely consenting, free consent is central to the marriage. If there is coercion, unlawful confinement, harassment or a credible threat, separate advice on protective legal remedies may also be appropriate.' },
  { q: 'What documents are normally required for a Faisalabad court marriage?', a: 'Valid identity documents for the bride and groom are normally essential, together with witness particulars. If either party was previously married, the relevant divorce, khula, talaq-effectiveness or death documentation should be reviewed. Overseas and foreign-national cases can require additional documents.' },
  { q: 'How is a Muslim marriage registered in Faisalabad?', a: 'Registration is handled through the competent Nikah Registrar and the relevant local-authority framework connected with the marriage jurisdiction. The registered Nikah Nama and any later computerised marriage certificate are separate stages.' },
  { q: 'Can Court Marriage in Faisalabad be completed on the same day?', a: 'A straightforward Nikah can sometimes be arranged quickly once identity, legal age, free consent and marital status have been checked. Registration and later official certificates may require additional processing time, so the Nikah date and document-completion timeline should be explained separately.' },
  { q: 'Can overseas Pakistanis arrange a Faisalabad marriage remotely?', a: 'Remote coordination can be possible, but the correct structure depends on the locations of the parties, witness and consent arrangements, representation, nationality and intended use of the documents. Authority documents, translation or attestation may be relevant in some cases.' },
  { q: 'Is a Nikah Nama enough for immigration purposes?', a: 'A registered Nikah Nama is important evidence of marriage, but immigration or foreign authorities may also require a computerised marriage certificate, translation, attestation or other relationship documents. Requirements differ by country and case.' },
  { q: 'How much does Court Marriage in Faisalabad cost?', a: 'Fees depend on the legal and documentary work required. Consultation, Nikah arrangements, registration, certified copies, computerised certificate assistance, translation, attestation and urgent handling may be separate cost heads. A clear quotation should explain what is included.' },
]

export default function CourtMarriageFaisalabadPage() {
  return (
    <CityServiceTemplate
      service="Court Marriage"
      city="Faisalabad"
      path="/services/cities-services/faisalabad"
      phone="+923331127834"
      displayPhone="+92 333 1127834"
      officeAddress="Chamber No. 6, Jalal Law Chambers, Near Bakhshi Khana, District Courts, Faisalabad."
      intro="Court Marriage in Faisalabad requires careful legal and documentary preparation: both parties should satisfy the applicable Punjab age requirements, free consent must be genuine, identity and marital status should be verified, and the correct local registration route should be identified before the Nikah Nama is finalised."
      areas={['District Courts Faisalabad', 'D-Ground', 'Peoples Colony', 'Madina Town', 'Jinnah Colony', 'Samanabad', 'Gulberg Faisalabad', 'Canal Road']}
      localOverview={[
        'Faisalabad court marriage enquiries often arise where a couple wants a private, properly documented marriage without unnecessary delay. The legal process should still begin with eligibility rather than speed. The parties’ identity documents, ages, free consent, marital status and intended registration jurisdiction should be clear before the Nikah Nama is prepared.',
        'Punjab’s current child-marriage framework treats a person under eighteen, male or female, as a child for marriage purposes. This makes accurate age verification an essential first step in Faisalabad. CNIC, passport or other reliable identity data should be checked carefully, and any discrepancy in the date of birth should be addressed before the ceremony.',
        'A marriage by choice does not automatically require a court case. The expression court marriage is commonly used in practice, but the marriage itself is completed through the applicable Nikah and registration requirements. Where family opposition creates a real threat or coercion issue, the safety question should be assessed separately.',
        'Nikah Nama accuracy is especially important. Names, identity numbers, addresses, Mahr, witness details and marital status should be entered consistently. A rushed or incomplete document can create later difficulty when the marriage is used for inheritance, immigration, banking, employment or family litigation.',
        'Overseas Faisalabad matters may involve a party living in the Gulf, United Kingdom, Europe, North America or elsewhere. The legal team should confirm how consent and witnesses will be handled, whether representation is required, and what post-registration documents the destination country expects.'
      ]}
      registrationNotes={[
        'For Muslim marriages in Faisalabad, registration should be completed through the competent Nikah Registrar and the relevant local-authority framework for the particular area. The registered Nikah Nama and any later computerised certificate should be treated as connected but separate records.',
        'The marriage file should be consistent from the first identity check through registration. Errors in names, CNIC numbers, addresses or marital status can delay later certificate issuance and verification.',
        'If the documents will be used outside Pakistan, the need for certified copies, translation or attestation should be checked according to the receiving authority rather than assumed in advance.'
      ]}
      overseasNotes={[
        'A Faisalabad-connected marriage may involve one party abroad while family or documentation remains in Punjab. Passport particulars, foreign address and the structure of any authorised participation should be checked before the Nikah is arranged.',
        'Foreign immigration and embassy requirements are separate from the validity of the Nikah itself. The destination country may require additional evidence, attestation or translation, so the expected overseas use should be disclosed early.'
      ]}
      practicalNotes={[
        'The Faisalabad chamber address should be used for local consultation and document coordination where an in-person meeting is needed.',
        'Bring clear identity documents and any prior-marriage record before asking for a fixed date or completion promise.',
        'Agree and record Mahr clearly before signatures are obtained on the Nikah Nama.',
        'For overseas use, confirm the destination country first so translation and attestation work is ordered only where necessary.'
      ]}
      faqs={faqs}
    />
  )
}
