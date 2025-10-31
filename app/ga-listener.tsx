"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-140RV9FP1T";

export default function GAListener() {
    const pathname = usePathname();
    const search = useSearchParams()?.toString() ?? "";

    useEffect(() => {
        const url = pathname + (search ? `?${search}` : "");
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("config", GA_ID, { page_path: url });
        }
    }, [pathname, search]);

    return null;
}
