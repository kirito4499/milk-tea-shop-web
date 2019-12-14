import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent, FooterComponent, SidebarComponent } from "./layout";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        HttpClientModule,
        RouterModule,
        NgbDropdownModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
    ]
})
export class SharedModule {}
