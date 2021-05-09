# MaxRow

MaxRow is a library to help you to create a editable area, which limit users to input no more than exact rows.

## Installation

__Option 1: npm__  
If you prefer the [node package manager](https://www.npmjs.com/package/maxrow), feel free to use it.  
Keep in mind that like with bower non-crucial files will be ignored (see above).

```bash
npm install maxrow
```

__Option 2: Bower__   

Include the *core* library in your HTML file:
```html
<script src="../lib/maxrow.min.js"></script>
```

## Usage

```javascript
import maxRow from "maxrow";

// init controller
let word = new maxRow({selector:"#word",row:3})

// create a sprite
word.setText('Hello world!');
```

### Parameters
- `selector`: `#id` DOM selector, default: body
- `row`: `(number)` max rows limited, default: 3
- `dialog`: `(function)` popup msg dialog, default: alert

## Browser Support

MaxRow aims to support all major browsers even in older versions:  
Firefox 26+, Chrome 30+, Safari 5.1+, Opera 10+, IE 9+

## About the Author

I am a creative coder based in Xiamen, China.

[Learn more on my website](http://ieexx.com) or [Follow me on Weibo](http://weibo.com/1225xlh)

## License

MaxRow is dual licensed under the MIT.  
For more information click [here](https://github.com/xxlh/max-row/blob/master/LICENSE).

