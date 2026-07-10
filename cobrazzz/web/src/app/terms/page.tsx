import { InformationPage } from "@/components/information-page";

export default function TermsPage() {
  return <InformationPage eyebrow="Cobra policies" title="Terms of use" intro="These MVP terms explain how students and hostel managers may use Cobra while the service is being prepared for production." sections={[
    { title: "Marketplace role", copy: "Cobra helps students discover accommodation and send enquiries. Cobra is not the hostel owner, landlord, payment processor, or party to a tenancy agreement." },
    { title: "Listings and availability", copy: "Prices, room availability, utilities, travel times, and policies must be confirmed directly with the hostel manager before a student commits or pays." },
    { title: "Safe use", copy: "Users must provide accurate information, avoid impersonation, and never use the service for fraudulent payments, harassment, or misleading listings." },
    { title: "Demo limitations", copy: "This build stores temporary demo account and enquiry state in the browser. Production terms, contacts, dispute handling, and jurisdiction details require legal review before launch." },
  ]} />;
}
