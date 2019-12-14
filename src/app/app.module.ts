import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, AdminGuard } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        ProductsModule,
        SharedModule,
        TranslateModule.forRoot()
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
