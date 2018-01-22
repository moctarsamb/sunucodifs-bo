export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Gestion Batiments',
            icon: 'ion-person',
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
            icon: 'ion-stats-bars',
            selected: false,
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
            icon: 'ion-log-out',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

      ],
},
  ];
