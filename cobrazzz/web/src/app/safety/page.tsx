import { InformationPage } from "@/components/information-page";

export default function SafetyPage() {
  return <InformationPage eyebrow="Safety and verification" title="Trust labels should say exactly what has been checked" intro="Cobra separates owner-submitted information from admin review and physical verification. A listing should never receive a stronger label than the evidence supports." sections={[
    { title: "Owner Submitted", copy: "The manager supplied the information. Cobra has not yet confirmed the room, price, photos, or location." },
    { title: "Admin Reviewed", copy: "The listing passed an online administrative review for completeness and obvious inconsistencies." },
    { title: "Photos Confirmed", copy: "Cobra received evidence that the room photos correspond to the advertised property." },
    { title: "Physically Verified", copy: "The strongest label. The property, room condition, amenities, location, and advertised details were directly checked." },
  ]} />;
}
