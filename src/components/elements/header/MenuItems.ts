export type MenuItemsType = {
  title: string;
  url: string;
  submenu?: MenuItemsType[]
};

export const MenuItems: MenuItemsType[] = [
  {
    title: 'За нас',
    url: '#',
  },
  {
    title: 'Сервиз',
    url: '#',
  },
  {
    title: 'Кариери',
    url: '#',
  },
  {
    title: 'Контакти',
    url: '#',
  },
];
