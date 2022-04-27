import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PhoneModelsComponent } from './phone-models/phone-models.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TopBarComponent } from './top-bar/top-bar.component';


const routes : Routes =[

  
  {path: '' , component: PhoneModelsComponent},
  {path: 'product-detail/:id' , component:ProductDetailComponent},
  {path: 'cart', component:CartComponent},
  {path: 'shipping',component:ShippingComponent},
  
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
