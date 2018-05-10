import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnqueryformComponent } from './enqueryform/enqueryform.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { HomeComponent } from './routes/home/home.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import { ReviwesComponent } from './routes/reviews/reviwes.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import { ServiceComponent } from './service/service.component';
import {CourseService} from './services/course.service';
import { OffercodePipe } from './offercode.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterpricePipe } from './pipes/filterprice.pipe';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReviewService } from  './services/review.service';
import { EnquiryService } from  './services/enquiry.service';
import{TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CoursedetailsComponent } from './routes/home/coursedetails/coursedetails.component';
import { ScheduleComponent } from './schedule/schedule.component';
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}
const routes=[
  {path: "" ,component: HomeComponent},
  {path:"office",component: OfficesComponent},
  {path:"newcourses",component: NewcoursesComponent},
  {path:"offers",component: OffersComponent},
  {path:"vclass",component: VirtualclassComponent},
  {path:"reviews",component: ReviwesComponent},
  {path:"cdetails/:ccode", component:CoursedetailsComponent},
  {path:"schedules",component:ScheduleComponent,outlet:"sidebar"}

]
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnqueryformComponent,
    HomeComponent,
    OfficesComponent,
    NewcoursesComponent,
    OffersComponent,
    VirtualclassComponent,
    ReviwesComponent,
    CourselistComponent,
    CourseComponent,
    ServiceComponent,
    OffercodePipe,
    FilterpricePipe,
    ReviewComponent,
    ReviewlistComponent,
    CoursedetailsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),FormsModule ,HttpClientModule,TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    }), ReactiveFormsModule
  ],
  providers: [CourseService, ReviewService, EnquiryService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
