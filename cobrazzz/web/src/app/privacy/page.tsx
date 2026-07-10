import { InformationPage } from "@/components/information-page";

export default function PrivacyPage() {
  return <InformationPage eyebrow="Cobra policies" title="Privacy policy" intro="Cobra uses progressive data collection: browse first, then provide only the details needed to save preferences or contact a hostel." sections={[
    { title: "Information collected", copy: "The MVP may store a name, email, phone or WhatsApp number, university preference, saved hostels, and enquiries in this browser only." },
    { title: "How information is used", copy: "Contact and preference data supports saved searches and accommodation enquiries. The demo does not sell data or process hostel payments." },
    { title: "Storage and deletion", copy: "Demo state uses local browser storage and can be cleared by logging out and clearing site data. Production requires authenticated storage, retention controls, and account-deletion workflows." },
    { title: "Production safeguards", copy: "Before launch, Cobra must implement consent records, secure server-side storage, access controls, audit logs, breach procedures, and published data-controller contact details." },
  ]} />;
}
