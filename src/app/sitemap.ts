import { routes } from '@/lib/routes';
import { MetadataRoute } from 'next';

type RouteObject = {
  [key: string]: string | (() => string) | RouteObject;
};

export const baseUrl = 'https://social-tract.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const getRouteUrls = (routeObject: RouteObject): string[] => {
    return Object.values(routeObject).reduce<string[]>((acc, value) => {
      if (typeof value === 'function') {
        acc.push(value());
      } else if (typeof value === 'object') {
        acc.push(...getRouteUrls(value));
      }
      return acc;
    }, []);
  };

  const routeUrls = getRouteUrls(routes);

  return routeUrls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    priority: 1.0,
  }));
}
