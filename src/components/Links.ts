interface MenuLink {
  id: number;
  label: string;
  link: string;
}

export const MenuLinks: MenuLink[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
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
    label: "Create",
    link: "/create",
  },
  {
    id: 5,
    label: "Login",
    link: "/login",
  },
];
