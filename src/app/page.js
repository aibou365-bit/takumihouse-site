import SiteBody from "@/components/SiteBody";
import { getContentEn } from "@/lib/getContent";

export default function Home() {
  return <SiteBody c={getContentEn()} />;
}
