module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/lib/hostels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHostelBySlug",
    ()=>getHostelBySlug,
    "hostels",
    ()=>hostels
]);
const hostels = [
    {
        slug: "science-view-residence",
        name: "Science View Residence",
        room: "2 in a room",
        area: "Science / New Site",
        distance: "8 min walk to UCC Science gate",
        price: "GHS 3,200",
        yearlyPrice: "₵3,200/year",
        offer: "Save up to GHS 250",
        address: "Science Market Road, Cape Coast",
        rating: "4.8",
        reviews: "126",
        label: "Admin reviewed",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
        ],
        tags: [
            "Bills included",
            "Manager confirmed",
            "Study desk",
            "2 in a room",
            "Near campus"
        ],
        map: {
            left: "47%",
            top: "39%"
        },
        summary: "Reviewed student rooms close to the Science gate with shared study space, clear utilities information, and manager-confirmed availability.",
        manager: "Science Market Rooms",
        availableFrom: "2026/2027 academic year",
        nearby: [
            "0.4 mi from Sasakawa lecture hall",
            "8 min walk to UCC Science gate",
            "3 min ride to campus shuttle"
        ],
        amenities: [
            "Bills included",
            "Study desk",
            "Water available",
            "Shared kitchen",
            "Security lights",
            "Manager on call"
        ],
        rules: [
            "Students only",
            "No subletting",
            "Quiet hours after 10 PM"
        ]
    },
    {
        slug: "ayensu-court-rooms",
        name: "Ayensu Court Rooms",
        room: "3 in a room",
        area: "Ayensu",
        distance: "12 min shuttle to campus",
        price: "GHS 2,400",
        yearlyPrice: "₵2,400/year",
        offer: "Budget rooms",
        address: "Ayensu Junction, Cape Coast",
        rating: "4.6",
        reviews: "84",
        label: "Manager confirmed",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80"
        ],
        tags: [
            "Water storage",
            "Shared kitchen",
            "Budget room",
            "3 in a room",
            "Near shuttle"
        ],
        map: {
            left: "33%",
            top: "58%"
        },
        summary: "Budget-friendly shared rooms around Ayensu with shuttle access and clear room expectations before students call the manager.",
        manager: "Ayensu Court Management",
        availableFrom: "July 2026",
        nearby: [
            "12 min shuttle to campus",
            "Near Ayensu Junction",
            "10 min walk to food vendors"
        ],
        amenities: [
            "Water storage",
            "Shared kitchen",
            "Ceiling fan",
            "Near shuttle",
            "Manager confirmed"
        ],
        rules: [
            "Students only",
            "Visitors by manager approval",
            "Keep shared kitchen clean"
        ]
    },
    {
        slug: "kwaprow-studio-house",
        name: "Kwaprow Studio House",
        room: "1 in a room",
        area: "Kwaprow",
        distance: "15 min ride to UCC old site",
        price: "GHS 4,500",
        yearlyPrice: "₵4,500/year",
        offer: "Private room",
        address: "Kwaprow Main Road, Cape Coast",
        rating: "4.9",
        reviews: "61",
        label: "Physically verified",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=900&q=80"
        ],
        tags: [
            "Private washroom",
            "Security",
            "Quiet area",
            "1 in a room",
            "Study desk"
        ],
        map: {
            left: "66%",
            top: "32%"
        },
        summary: "Private room option for students who want quiet space, a verified location, and a shorter comparison path before visiting.",
        manager: "Kwaprow Studio House",
        availableFrom: "August 2026",
        nearby: [
            "15 min ride to UCC old site",
            "Close to Kwaprow taxi stop",
            "Quiet residential lane"
        ],
        amenities: [
            "Private washroom",
            "Study desk",
            "Security",
            "Quiet area",
            "Water available"
        ],
        rules: [
            "Single occupant",
            "No loud parties",
            "Manager visit required before payment"
        ]
    },
    {
        slug: "amamoma-hostel-annex",
        name: "Amamoma Hostel Annex",
        room: "2 in a room",
        area: "Amamoma",
        distance: "10 min ride to main campus",
        price: "GHS 2,850",
        yearlyPrice: "₵2,850/year",
        offer: "Manager confirmed",
        address: "Amamoma Hostel Street, Cape Coast",
        rating: "4.7",
        reviews: "92",
        label: "Photos confirmed",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
        ],
        tags: [
            "Manager confirmed",
            "Private washroom",
            "Near shuttle",
            "2 in a room",
            "Water available"
        ],
        map: {
            left: "55%",
            top: "66%"
        },
        summary: "A practical Amamoma option with confirmed photos, shuttle access, and the key room details students usually ask for first.",
        manager: "Amamoma Annex Manager",
        availableFrom: "June 2026",
        nearby: [
            "10 min ride to main campus",
            "Near Amamoma station",
            "Walkable food options nearby"
        ],
        amenities: [
            "Private washroom",
            "Water available",
            "Near shuttle",
            "Shared kitchen",
            "Manager confirmed"
        ],
        rules: [
            "Students only",
            "Respect shared facilities",
            "Inspect room before payment"
        ]
    }
];
function getHostelBySlug(slug) {
    return hostels.find((hostel)=>hostel.slug === slug);
}
}),
"[project]/src/app/hostels/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HostelDetailsPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hostels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hostels.ts [app-rsc] (ecmascript)");
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hostels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hostels"].map((hostel)=>({
            slug: hostel.slug
        }));
}
async function HostelDetailsPage({ params }) {
    const { slug } = await params;
    const hostel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hostels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHostelBySlug"])(slug);
    if (!hostel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-dvh bg-background"
    }, void 0, false, {
        fileName: "[project]/src/app/hostels/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/hostels/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/hostels/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10-geum._.js.map