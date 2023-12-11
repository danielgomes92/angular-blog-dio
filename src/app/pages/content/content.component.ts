import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  coverContent: string =
    'https://miro.medium.com/max/700/1*oTR3a2YrOsZkQ4mV97-xhw.jpeg';
  titleContent: string = 'MINHA NOTICIA';
  descriptionContent: string = `O Angular é um dos frameworks
  mais populares para o desenvolvimento de aplicações web
  modernas e ricas em recursos.
  Desde o seu lançamento em 2010,
  o Angular vem evoluindo constantemente para acompanhar
  as tendências e as necessidades dos desenvolvedores.`;
}
