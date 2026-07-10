import { InformationPage } from "@/components/information-page";

export default function HowItWorksPage() {
  return <InformationPage eyebrow="How Cobra works" title="A clearer way to find and enquire about student accommodation" intro="Cobra helps students compare public hostel information, save options, and send enquiries. We do not collect hostel fees or guarantee availability in this MVP." sections={[
    { title: "1. Choose your campus", copy: "Start with a university, city, or student area so the listings and commute context are relevant." },
    { title: "2. Compare the details", copy: "Review room occupancy, indicative prices, amenities, transport context, and the precise trust label on each listing." },
    { title: "3. Create an account", copy: "Sign in when you want to save a hostel or contact a manager. Your profile keeps serious enquiries organised." },
    { title: "4. Send an enquiry", copy: "Request availability without paying through Cobra. Always inspect the room and confirm manager terms before payment." },
  ]} />;
}
