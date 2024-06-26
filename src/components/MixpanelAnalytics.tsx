"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

import { usePathname } from "next/navigation";
import { http } from "@/lib/network";

const body = {
  collection_name: "counter_global",
  name: "page_view",
};

export default function MixpanelAnalytics() {
  useEffect(() => {
    mixpanel.init("8a679310fb17ccef3982f7937e041391", {
      // debug: true,
      // track_pageview: true,
      persistence: "localStorage",
      api_host: "/mp",
    });

    // mixpanel.track_links("a", "click link", {
    //   "referrer": document.referrer
    // });
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    mixpanel.track_pageview();
    // http("/api/update_count", {
    //   method: "POST",
    //   body: JSON.stringify(body),
    // });
  }, [pathname]);


  return <></>;
}
