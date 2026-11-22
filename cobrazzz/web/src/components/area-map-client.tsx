export function AreaMapClient() {
  return (
    <div className="relative mt-4 h-64 overflow-hidden rounded-lg border border-border bg-card lg:mt-6 lg:h-80">
      <iframe
        title="OpenStreetMap view of UCC hostel areas"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-1.314%2C5.098%2C-1.262%2C5.139&layer=mapnik&marker=5.1165%2C-1.2895"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
