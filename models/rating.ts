import { SanityBase } from "./sanity-base";
import { SEO } from "./seo";
import { Slug } from "./slug";

export interface Rating extends SanityBase {
    seo?: SEO;
    slug?: Slug;
    title?: string;
    pageBuilder?: any[]
}