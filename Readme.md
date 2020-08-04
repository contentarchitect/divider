# Divider

Divider is a block for ContentArchitect editor. It's simply. And it's able to style customization.

## Installation
### 1st Method

```yarn i @contentarchitect/divider``` or ```npm i -S @contentarchitect/divider```

and

```js
import Divider from '@contentarchitect/divider'
ContentArchitect.Blocks.register(Divider)
```

### 2nd Method
In your html page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@contentarcihtect/editor/ContentArchitect.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@contentarcihtect/divider/src/theme.extract.css">

<content-architect>
	<div data-block="Divider"></div>
</content-architect>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script src="https://cdn.jsdelivr.net/npm/@contentarcihtect/editor"></script>
<script src="https://cdn.jsdelivr.net/npm/@contentarcihtect/divider"></script>
```

### 3rd Method
Use bundler.