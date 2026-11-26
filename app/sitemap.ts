import type { MetadataRoute } from 'next';
import { siteUrl } from './site-info';
export default function sitemap(): MetadataRoute.Sitemap {
 // Section anchors belong to the same page, not separate indexable URLs.
 return [{ url: siteUrl + '/' }];
}
