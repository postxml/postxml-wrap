# postxml-wrap
[![npm version][npm-image]][npm-url]

> [PostXML] plugin wrap with emmet abbreviation. Support only tags and classes.

## Installation
`npm i postxml- --save-dev`

## Usage
[PostXML]

## Example

> ! Plugin doesn't work with whitespaces. They are added just for example

### Input
```html
<div wrap=".g-section.bg>.g-section__content">
	<a></a>
</div>
```

### Output
```html
<div class="g-section bg">
	<div class="g-section__content">
		<div>
			<a></a>
		</div>
	</div>
</div>
```

## Options

### attr
Type: `String`<br>
Default: `wrap`

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-wrap
[npm-image]: http://img.shields.io/npm/v/postxml-wrap.svg?style=flat-square
