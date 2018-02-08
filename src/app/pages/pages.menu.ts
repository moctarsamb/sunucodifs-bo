export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-ios-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'ajoutBat',
         title: 'Options',
            data: {
              menu: {
                title: 'Options',
                icon: 'ion-ios-home',
                selected: false,
                order: 0,
              }
            },
        children: [
          {
            path: 'options',
            data: {
              menu: {
                title: 'Ajouter',
                icon: 'ion-ios-add',
              }
            }
          },]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Gestion Batiments',
            icon: 'ion-ios-list',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
          children: [
          {
            path: 'ajoutBat',
            data: {
              menu: {
                title: 'Ajouter',
                icon: 'ion-ios-add',
              }
            }
          },
          {
            path: 'listeBat',
            data: {
              menu: {
                title: 'Liste',
                icon: 'ion-ios-list-outline',
              }
            }
          }
        ]
      },
       {
        path: 'statistiques',
        data: {
          menu: {
            title: ' Statistiques',
            icon: 'ion-ios-bars',
            expanded: false,
            order: 0,
          },
        },

      },
      {
        path: 'login',
        data: {
          menu: {
            title: 'Deconnexion',
            icon: 'ion-ios-log-out',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

      ],
},
  ];
