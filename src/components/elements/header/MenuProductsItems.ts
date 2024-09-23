export type MenuItemsType = {
    title: string;
    url: string;
    submenu?: MenuItemsType[]
};

export const MenuProductsItems: MenuItemsType[] = [
    {
        title: 'Говедовъдство',
        url: '',
        submenu: [
            {
              title: 'други ...',
              url: '#',
            }
          ],
    },
    {
        title: 'Коне/Ездачи',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
    {
        title: 'Овце/Кози',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
    {
        title: 'Свиневъдство',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
    {
        title: 'Електропастири',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
    {
        title: 'Силаж и сенаж',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
    {
        title: 'Още продукти',
        url: '',
        submenu: [
            {
                title: 'други ...',
                url: '#'
            }
        ]
    },
];
