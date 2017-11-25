export default class {

  constructor($mdSidenav, LoginService, $state) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;

    this.user = LoginService.getUserBasicData();

    console.log($state.current);
    this.currentTitle = $state.current.title;

    this.menu = [
      {
        title: 'Dashboard',
        link: 'dashboard',
        icon: 'dashboard'
      },
      {
        title: 'Estabelecimentos',
        link: 'estabelecimento-list',
        icon: 'business'
      },
      {
        title: 'Voucher',
        link: 'voucher-list',
        icon: 'credit_card',
      },
      {
        title: 'Eventos',
        link: 'evento-list',
        icon: 'event'
      },
      {
        title: 'Sair',
        link: 'logout',
        icon: 'exit_to_app'
      }
    ];


  }

  toggleLeftMenu() {
    console.log('hi');
    this.$mdSidenav('menuLeft').open();
  }
}


