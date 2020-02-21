import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { ButtonsSectionComponent } from './buttons-section/buttons-section.component';
import { InputsSectionComponent } from './inputs-section/inputs-section.component';
import { CrsSectionComponent } from './crs-section/crs-section.component';
import { NavigationSectionComponent } from './navigation-section/navigation-section.component';
import { TabsSectionComponent } from './tabs-section/tabs-section.component';
import { AlertsSectionComponent } from './alerts-section/alerts-section.component';
import { TypographySectionComponent } from './typography-section/typography-section.component';
import { AngularSectionComponent } from './angular-section/angular-section.component';
import { NucleoSectionComponent } from './nucleo-section/nucleo-section.component';
import { VersionsSectionComponent } from './versions-section/versions-section.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { WebPlanComponent } from './web-plan/web-plan.component';
import { FoxloaderComponent } from './foxloader/foxloader.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NeumorphicComponent } from './neumorphic/neumorphic.component';

@NgModule({
  declarations: [
    SectionsComponent,
    ButtonsSectionComponent,
    InputsSectionComponent,
    CrsSectionComponent,
    NavigationSectionComponent,
    TabsSectionComponent,
    AlertsSectionComponent,
    TypographySectionComponent,
    AngularSectionComponent,
    NucleoSectionComponent,
    VersionsSectionComponent,
    NgbdModalComponent,
    NgbdModalContent,
    TextAnimationComponent,
    ShowcaseComponent,
    WebPlanComponent,
    FoxloaderComponent,
    NewsletterComponent,
    TimelineComponent,
    NeumorphicComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  // tslint:disable-next-line:max-line-length
  exports: [TimelineComponent, NeumorphicComponent, SectionsComponent, TextAnimationComponent, ShowcaseComponent, WebPlanComponent, NucleoSectionComponent, FoxloaderComponent, NewsletterComponent ]
})
export class SectionsModule { }
