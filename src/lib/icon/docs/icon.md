`apto-icon` makes it easier to use _vector-based_ icons in your app.  This directive supports both
icon fonts and SVG icons, but not bitmap-based formats (png, jpg, etc.).

<!-- example(icon-overview) -->

### Registering icons

`AptoIconRegistry` is an injectable service that allows you to associate icon names with SVG URLs,
HTML strings and to define aliases for CSS font classes. Its methods are discussed below and listed
in the API summary.

### SVG icons

When an `apto-icon` component displays an SVG icon, it does so by directly inlining the SVG content
into the page as a child of the component. (Rather than using an <img> tag or a div background
image). This makes it easier to apply CSS styles to SVG icons. For example, the default color of the
SVG content is the CSS
[currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword)
value. This makes SVG icons by default have the same color as surrounding text, and allows you to
change the color by setting the "color" style on the `apto-icon` element.

In order to prevent XSS vulnerabilities, any SVG URLs and HTML strings passed to the
`AptoIconRegistry` must be marked as trusted by using Angular's `DomSanitizer` service.

Also note that all SVG icons, registered by URL, are fetched via XmlHttpRequest, and due to the
same-origin policy, their URLs must be on the same domain as the containing page, or their servers
must be configured to allow cross-domain access.

#### Named icons

To associate a name with an icon URL, use the `addSvgIcon` or `addSvgIconInNamespace` methods of `AptoIconRegistry`. After
registering an icon, it can be displayed by setting the `svgIcon` input. For an icon in the
default namespace, use the name directly. For a non-default namespace, use the format
`[namespace]:[name]`.

#### Icon sets

Icon sets allow grouping multiple icons into a single SVG file. This is done by creating a single
root `<svg>` tag that contains multiple nested `<svg>` tags in its `<defs>` section. Each of these
nested tags is identified with an `id` attribute. This `id` is used as the name of the icon.

Icon sets are registered using the `addSvgIconSet` or `addSvgIconSetInNamespace` methods of `AptoIconRegistry`.
After an icon set is registered, each of its embedded icons can be accessed by their `id`
attributes. To display an icon from an icon set, use the `svgIcon` input in the same way
as for individually registered icons.

Multiple icon sets can be registered in the same namespace. Requesting an icon whose id appears in
more than one icon set, the icon from the most recently registered set will be used.

### Theming

By default, icons will use the current font color (`currentColor`). this color can be changed to
match the current theme's colors using the `color` attribute. This can be changed to
`'primary'`, `'accent'`, or `'warn'`.

### Accessibility

Similar to an `<img>` element, an icon alone does not convey any useful information for a
screen-reader user. The user of `<apto-icon>` must provide additional information pertaining to how
the icon is used. Based on the use-cases described below, `apto-icon` is marked as
`aria-hidden="true"` by default, but this can be overriden by adding `aria-hidden="false"` to the
element.

In thinking about accessibility, it is useful to place icon use into one of three categories:
1. **Decorative**: the icon conveys no real semantic meaning and is purely cosmetic.
2. **Interactive**: a user will click or otherwise interact with the icon to perform some action.
3. **Indicator**: the icon is not interactive, but it conveys some information, such as a status. This
includes using the icon in place of text inside of a larger message.

#### Decorative icons
When the icon is purely cosmetic and conveys no real semantic meaning, the `<apto-icon>` element
is marked with `aria-hidden="true"`.

#### Interactive icons
Icons alone are not interactive elements for screen-reader users; when the user would interact with
some icon on the page, a more appropriate  element should "own" the interaction:
* The `<apto-icon>` element should be a child of a `<button>` or `<a>` element.
* The parent `<button>` or `<a>` should either have a meaningful label provided either through
direct text content, `aria-label`, or `aria-labelledby`.

#### Indicator icons
When the presence of an icon communicates some information to the user whether as an indicator or
by being inlined into a block of text, that information must also be made available to
screen-readers. The most straightforward way to do this is to
1. Add a `<span>` as an adjacent sibling to the `<apto-icon>` element with text that conveys the same
information as the icon.
2. Add the `apto-sr-only` class to the `<span>`. This will make the message invisible
on-screen but still available to screen-reader users.
