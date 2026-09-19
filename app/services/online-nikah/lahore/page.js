import CityServiceTemplate from '@/components/city-service-template'

export const metadata = {
  title: 'Online Nikah in Lahore | Legal & Sharia Guidance',
  description: 'Online Nikah in Lahore with legal guidance on consent, witnesses, Nikah Nama, registration, overseas cases and marriage documentation.',
  alternates: { canonical: 'https://courtmarriage.pro/services/online-nikah/lahore' },
}

const faqs = [
  { q: 'Can Online Nikah be arranged for a Lahore-based couple?', a: 'Yes, where the parties are legally eligible and the Nikah is properly structured. The process should include identity review, consent, witness arrangements, Nikah Nama preparation and a clear plan for later registration.' },
  { q: 'Can one party be outside Pakistan while the other is in Lahore?', a: 'Yes, many cases involve an overseas bride or groom. The correct arrangement depends on the foreign location, nationality, documents and whether representation or authority documents are needed.' },
  { q: 'Does Online Nikah in Lahore mean the marriage is automatically registered?', a: 'No. The ceremony and the administrative registration of the marriage record are separate steps. Registration must be handled through the competent local process after the Nikah particulars are properly completed.' },
  { q: 'What documents are normally reviewed before Online Nikah in Lahore?', a: 'Identity documents, photographs, witness details and marital-status evidence are commonly checked. Overseas or foreign-national cases can require additional documents, attestation or authority papers.' },
  { q: 'Can a previous divorce affect an Online Nikah in Lahore?', a: 'It can affect the document checklist and legal review. The prior marriage must have ended lawfully and the relevant divorce documents should be checked before a new marriage is arranged.' },
  { q: 'Can you promise a fixed completion time in Lahore?', a: 'No responsible blanket promise should be made. Timing depends on document readiness, the structure of the Nikah, the registration office and any overseas or verification issue in the case.' },
  { q: 'Can the marriage documents be used for a spouse visa?', a: 'They may form part of a spouse-visa file, but the receiving country decides its own evidentiary and attestation requirements. The expected immigration use should therefore be discussed before documents are finalised.' },
  { q: 'Is a power of attorney always required for Online Nikah in Lahore?', a: 'No. Whether an authority document is needed depends on how the Nikah is being structured and where the parties are located. It should be used only where legally and practically appropriate.' },
  { q: 'How should Mahr be recorded?', a: 'Mahr should be agreed clearly and recorded accurately in the Nikah Nama. Any distinction between prompt and deferred Mahr or other agreed terms should be documented carefully.' },
  { q: 'What affects Online Nikah fees in Lahore?', a: 'The scope of legal review, documentation, registration assistance, overseas coordination and any attestation or authority work affects the total fee. A case review is needed for an accurate quotation.' },
]

export default function OnlineNikahLahorePage() {
  return (
    <CityServiceTemplate
      service="Online Nikah"
      city="Lahore"
      path="/services/online-nikah/lahore"
      phone="+923331127835"
      displayPhone="+92 333 1127835"
      intro="Online Nikah in Lahore is useful for couples who are in different cities or countries, but the process should still be treated as a complete marriage matter involving consent, witnesses, accurate Nikah Nama particulars and the correct registration route. Professional assistance should focus on legal clarity, documentation and practical coordination rather than blanket claims about instant completion."
      areas={['DHA Lahore', 'Gulberg', 'Model Town', 'Johar Town', 'Garden Town', 'Cantt', 'Wapda Town', 'Bahria Town Lahore']}
      localOverview={[
        'Lahore Online Nikah matters frequently involve one party residing abroad, students or professionals living in another Pakistani city, or families that want the Nikah completed before a later in-person event. These cases benefit from advance document review so the ceremony and the later official record remain consistent.',
        'A remote marriage arrangement should not be reduced to a video call. The relevant legal and religious elements must still be addressed, including free consent, witnesses, Mahr, the wording of the Nikah and any authority granted to a representative. The technology used is secondary to the structure of the marriage itself.',
        'Lahore and surrounding areas contain multiple local administrative jurisdictions. The marriage record should be connected with the competent authority based on the facts of the case rather than an arbitrary office. Correct jurisdiction at the outset reduces the risk of delay when a computerised certificate or verification is later required.',
        'Many Lahore clients intend to use their marriage record for immigration, university dependent status, family sponsorship or travel. Where foreign use is expected, names, passport spellings, CNIC numbers and marital-status details should match the documents that will later be submitted abroad.'
      ]}
      registrationNotes={[
        'For Lahore cases, the Nikah Nama should be completed accurately and the registration process should follow the competent local authority. The religious ceremony and the administrative recording of the marriage are not the same event, even when coordinated closely.',
        'A computerised marriage certificate may be required for a range of official purposes. Its issuance depends on the underlying registered record and local processing, so it should not be promised automatically at the time of the Online Nikah.',
        'Where there is a foreign-national spouse, an overseas address or documents issued outside Pakistan, extra verification or attestation requirements may arise. These should be identified before the registration stage wherever possible.'
      ]}
      overseasNotes={[
        'Lahore has a large number of families with relatives in the United Kingdom, Europe, North America and the Gulf, so overseas Online Nikah enquiries are common. The foreign party’s passport, immigration status and intended use of the marriage record can affect the documentation plan.',
        'Where documents will be presented to a foreign authority, the receiving country may require specific attestations, translations or certified copies. Those requirements are separate from the validity of the Nikah itself and should be planned as a later documentation stage.'
      ]}
      practicalNotes={[
        'Use the Lahore call number for Lahore matters while the universal WhatsApp number remains available for written case intake.',
        'Check spellings across CNIC, passport and any previous marital-status document before the Nikah Nama is drafted.',
        'If the marriage will support a foreign visa or sponsorship application, identify the destination country early because document requirements differ.',
        'Do not assume every overseas case requires the same power-of-attorney wording; the document should match the actual role of the authorised person.'
      ]}
      faqs={faqs}
    />
  )
}
