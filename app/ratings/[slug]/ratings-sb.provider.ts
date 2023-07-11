/** 1. Tag it as a client component */
"use client";
import ImageComponent from "@/components/ratings/image";
import SRDescription from "@/components/ratings/description/description";
// import SRDivider from "@/components/ratings/divider";
import SRTitle from "@/components/ratings/title/title";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import SRImportantNotes from "@/components/ratings/important-notes/important-notes";
import SRComparisonTable from "@/components/ratings/comparison-table/comparison-table";
import SRTopPerformer from "@/components/ratings/top-performer/top-performer";

/** Import your components */
const components = {
  srTitle: SRTitle,
  srDescription: SRDescription,
  imageObject: ImageComponent,
  srImportantNotes: SRImportantNotes,
  srComparisonTable: SRComparisonTable,
  topPerformer: SRTopPerformer,
};

export default function SRProvider({ child }: { child: any }) {
  if (child && child._type) {
    switch (child._type) {
      case "srTitle":
        return components.srTitle({ content: child });
      case "srDescription":
        return components.srDescription({ content: child });
      case "srComparisonTable":
        return components.srComparisonTable({ vertical: child.vertical });
      case "topPerformer":
        return components.topPerformer({ content: child })
      case "srImportantNotes":
        return components.srImportantNotes({ content: child.srImportantNotes });
      case "imageObject":
        return components.imageObject({ content: child.image });
      default:
        return undefined;
    }
  }
}
