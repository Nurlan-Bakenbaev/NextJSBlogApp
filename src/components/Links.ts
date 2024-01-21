interface MenuLink {
  id: number;
  label: string;
  link: string;
}

export const MenuLinks: MenuLink[] = [
  {
    id: 1,
    label: "Home",
    link: "/home",
  },
  {
    id: 2,
    label: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    label: "About",
    link: "/about",
  },
  {
    id: 4,
    label: "Login",
    link: "/login",
  },
];
