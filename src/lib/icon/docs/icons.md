### Loading Icons into your components
```
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@Component({
    ...
})
export class MyComponent {
    constructor(iconRegistry: AptoIconRegistry, sanitizer: DomSanitizer) {
        // load a single svg icon into default namespace. <apto-icon icon="furry"></apto-icon>
        iconRegistry.addSvgIcon(
            sanitizer.bypassSecurityTrustResourceUrl('/icons/furry.svg')
        );

        // load a single svg icon into cats namespace. <apto-icon icon="cats:furry"></apto-icon>
        iconRegistry.addSvgIconInNamespace(
            sanitizer.bypassSecurityTrustResourceUrl('cats', '/icons/furry.svg')
        );

        // load an svg icon set into default namespace. <apto-icon icon="foo"></apto-icon>
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl('/icons/sprite.svg')
        );

        // load an svg icon set into cats namespace. <apto-icon icon="cats:furry"></apto-icon>
        iconRegistry.addSvgIconSetInNamespace(
            sanitizer.bypassSecurityTrustResourceUrl('cats', '/icons/cat-sprite.svg')
        );
    }
}
```