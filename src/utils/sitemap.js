export const headerLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Cart',
    path: '/cart',
  },
];

export const isPageActive = (pathname) => {
  if (typeof window === 'undefined') return;

  return pathname === window.location.pathname;
};
