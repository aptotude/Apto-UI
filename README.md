# Apto Angular 5 UI
[![npm version](https://img.shields.io/npm/v/apto-ui.svg)](https://img.shields.io/npm/v/apto-ui.svg)
[![npm version](https://img.shields.io/npm/dt/apto-ui.svg)](https://img.shields.io/npm/dt/apto-ui.svg)

#### Quick links
[Documentation](https://aptotude.github.io/apto-ui)
### Getting started

#### Step 1: Install Apto-UI
##### NPM
```
npm install --save apto-ui
```
##### Yarn
```
yarn add apto-ui
```

#### Step 2: Import the component modules
```
import { AptoButtonComponentModule } from 'apto-ui';

@NgModule({
    ...
    imports: [
        AptoButtonComponentModule
    ],
    ...
})
export class SuperAwesomeAppModule { }
```

## SUIT CSS Naming Conventions

## [Components](components.md)

The CSS responsible for component-specific styling.

Syntax: `<ComponentName>[-descendentName][--modifierName]`

This has several benefits when reading and writing HTML and CSS:

* It helps to distinguish between the classes for the root of the component,
  descendent elements, and modifications.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

<a name="ComponentName"></a>
### ComponentName

The component's name must be written in pascal case. Nothing else in the
HTML/CSS uses pascal case.

```css
.MyComponent { /* … */ }
```

```html
<article class="MyComponent">
  …
</article>
```

<a name="ComponentName--modifierName"></a>
### ComponentName--modifierName

A component modifier is a class that modifies the presentation of the base
component in some form (e.g., for a certain configuration of the component).
Modifier names must be written in camel case and be separated from the
component name by two hyphens. The class should be included in the HTML _in
addition_ to the base component class.

```css
/* Core button */
.Button { /* … */ }
/* Default button style */
.Button--default { /* … */ }
```

```html
<button class="Button Button--default" type="button">…</button>
```

<a name="ComponentName-descendentName"></a>
### ComponentName-descendentName

A component descendent is a class that is attached to a descendent node of a
component. It's responsible for applying presentation directly to the
descendent on behalf of a particular component. Descendent names must be
written in camel case.

```html
<article class="Tweet">
  <header class="Tweet-header">
    <img class="Tweet-avatar" src="{{src}}" alt="{{alt}}">
    …
  </header>
  <div class="Tweet-bodyText">
    …
  </div>
</article>
```

<a name="is-stateOfComponent"></a>
### ComponentName.is-stateOfComponent

Use `is-stateName` to reflect changes to a component's state. The state name
must be camel case. **Never style these classes directly; they should always be
used as an adjoining class.**

This means that the same state names can be used in multiple contexts, but
every component must define its own styles for the state (as they are scoped to
the component).

```css
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
```

```html
<article class="Tweet is-expanded">
  …
</article>
```
