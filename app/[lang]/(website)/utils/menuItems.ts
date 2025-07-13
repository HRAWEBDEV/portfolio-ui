import { type Dictionary } from '@/internationlization/loader';

export const menuItems: {
 name: keyof Dictionary['websiteNavigation'];
 link: string;
}[] = [
 {
  name: 'home',
  link: '/',
 },
 {
  name: 'about',
  link: '/about',
 },
 {
  name: 'projects',
  link: '/projects',
 },
 {
  name: 'articles',
  link: '/articles',
 },
 {
  name: 'uses',
  link: '/uses',
 },
];
