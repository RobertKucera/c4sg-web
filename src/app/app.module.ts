import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpModule, JsonpModule} from '@angular/http';
import {NavScrollDirective} from './navscroll.directive';

import {MaterializeModule} from 'angular2-materialize';
import {Ng2PaginationModule} from 'ng2-pagination';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';

import {ProjectListComponent} from './project/list/project-list.component';
import {ProjectViewComponent} from './project/view/project-view.component';
import {ProjectEditComponent} from './project/edit/project-edit.component';

import {OrganizationListComponent} from './organization/list/organization-list.component';
import {OrganizationViewComponent} from './organization/view/organization-view.component';
import {OrganizationEditComponent} from './organization/edit/organization-edit.component';

import {UserListComponent} from './user/list/user-list.component';
import {UserViewComponent} from './user/view/user-view.component';
import {UserEditComponent} from './user/edit/user-edit.component';

import {SkillComponent} from './skill/common/components/skill/skill.component';

import {AuthRoleSelectionComponent} from './auth.role.component';
import {MapViewerComponent} from './map-viewer/map-viewer.component';

import {OrganizationService} from './organization/common/organization.service';
import {ProjectService} from './project/common/project.service';
import {UserService} from './user/common/user.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {FormConstantsService} from './_services/form-constants.service';
import {DeveloperService} from './about/common/developer.service';
import {ImageDisplayService} from './_services/image-display.service';
import {ImageUploaderService} from './_services/image-uploader.service';
import {DataService} from './_services/data.service';
import {SkillService} from './skill/common/skill.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    JsonpModule,
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    NavScrollDirective,
    HomeComponent,
    AboutComponent,

    HeaderComponent,

    ProjectListComponent,
    ProjectViewComponent,
    ProjectEditComponent,

    OrganizationListComponent,
    OrganizationViewComponent,
    OrganizationEditComponent,

    UserListComponent,
    UserViewComponent,
    UserEditComponent,

    AuthRoleSelectionComponent,

    MapViewerComponent,
    SkillComponent,
  ],
  providers: [ProjectService,
    OrganizationService,
    UserService,
    FormConstantsService,
    AuthService,
    AuthGuard,
    DeveloperService,
    ImageDisplayService,
    ImageUploaderService,
    DataService,
    SkillService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
