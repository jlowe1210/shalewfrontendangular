import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share.module';
import { ContactPageCompononet } from './ContacPage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from '../../Components/Contact-ContactInfo/ContactInfo.component';
import { ContactFormComponent } from 'src/app/Components/Contact-ContactForm/ContactForm.component';
import { ContactMapComponent } from 'src/app/Components/Contact-Map/Contactmap.component';

@NgModule({
  declarations: [
    ContactPageCompononet,
    ContactInfoComponent,
    ContactFormComponent,
    ContactMapComponent,
    ContactMapComponent,
  ],
  imports: [ShareModule, ReactiveFormsModule],
  providers: [],
  exports: [ContactPageCompononet],
})
export class ContactPageModule {}
