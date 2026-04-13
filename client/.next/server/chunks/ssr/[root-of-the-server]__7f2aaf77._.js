module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
{}/*#__PURE__*/ _jsxDEV("section", {
    className: "relative w-full py-16 overflow-hidden min-h-[600px]",
    children: [
        /*#__PURE__*/ _jsxDEV("div", {
            className: "absolute inset-0 -z-10",
            children: [
                /*#__PURE__*/ _jsxDEV(Image, {
                    src: "/menubg.png",
                    alt: "Main Background",
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 5,
                    columnNumber: 5
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "absolute inset-0 bg-black/90"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 6,
                    columnNumber: 5
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 4,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
        /*#__PURE__*/ _jsxDEV(Image, {
            src: "/decor-left.png",
            alt: "Left Decoration",
            width: 200,
            height: 400,
            className: "absolute left-0 top-20 hidden md:block max-h-[80%] h-auto"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 10,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
        /*#__PURE__*/ _jsxDEV(Image, {
            src: "/decor-right.png",
            alt: "Right Decoration",
            width: 200,
            height: 400,
            className: "absolute right-0 top-20 hidden md:block max-h-[80%] h-auto"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 17,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
        /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-5xl mx-auto px-6 relative z-10",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "border border-yellow-600 p-8 relative",
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-[40px] font-oswald font-semibold uppercase text-center text-white mb-10 [text-shadow:2px_1px_0_#800020]",
                        children: activeMenuName
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    loading ? /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-center text-white",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e) : items.length === 0 ? /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-center text-white",
                        children: "No items found."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e) : /*#__PURE__*/ _jsxDEV("div", {
                        className: "grid md:grid-cols-2 gap-x-12 gap-y-6",
                        children: items.map((item)=>/*#__PURE__*/ _jsxDEV("div", {
                                className: "text-white",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "font-oswald text-[22px] uppercase tracking-[0.03em] whitespace-nowrap",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex-1 border-b border-dotted border-gray-500 mx-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "font-oswald text-[22px] font-semibold tracking-[0.03em]",
                                                children: [
                                                    "$",
                                                    item.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-gray-300 text-sm mt-1",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, item._id, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 26,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    ]
}, void 0, true, {
    fileName: "[project]/app/page.tsx",
    lineNumber: 2,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f2aaf77._.js.map