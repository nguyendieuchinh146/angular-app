import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  expanded = false;
  showMenu = false;
  activeUrl = '';
  menus = [
    {name : 'Products', url: '/crm/product-list', expanded: false},
    {name : 'Checkout', url: '/crm/cart', expanded: false},
    {name : 'Shipping Price', url: '/crm/shipping', expanded: false},
    {name : 'Link', url: '#', expanded: false,children: [
      {name : 'Card 1', url: '/crm/cart', child: true},
      {name : 'Card 2', url: '/crm/cart', child: true},
      {name : 'Card 3', url: '/crm/cart', child: true},
    ]}
  ]
  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.activeUrl = window.location.pathname;
  }

  navClicked(menu: any){
    console.log(menu)
    this.activeUrl = menu.url;
    if(!menu.children || menu.child){
      this.toggleMenu()
    }
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['auth']);
  }
}
