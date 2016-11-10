
# bugsplat-slider (bugsplat-slider)

> Slider for Images

## Usage

Include the script:

```html
<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/kopz-projects/CodersClan/BugSplat/slider/bundle.js"></script>
```

Initialize the [UMD Library](https://github.com/umdjs/umd)

```javascript
bugsplatSlider.instance().init({
  pictures: [ // Array of pictures
    {
      url: 'https://s3-us-west-2.amazonaws.com/kopz-projects/CodersClan/BugSplat/slider/Asset+2.png'
    },
    {
      url: 'https://s3-us-west-2.amazonaws.com/kopz-projects/CodersClan/BugSplat/slider/Asset+1.png',
    },
  ],
  title: 'Powered by BugSplat',
  paragraphs: [
    'With the BugSplat seal of approval, your users will know you take crashes and stability seriously',
    'Some of the video game on the planet are developed and supported with BugSplat',
    'Why not yours?'
  ],
  href: 'https://askaig.bugsplat.com/video-game-crash/',
  linkText: 'Customizing your crash box', // Link Text
  node: document.getElementById('main'), // DOM Node
  changeInterval: 5000, // Change interval
  enterTimeout: 1000,
});
```

## Running your project

The generated project includes a development server on port `3000`, which will rebuild the app whenever you change application code. To start the server (with the dev-tools enabled), run:

```bash
$ npm start
```

To run the server with the dev-tools disabled, run:

```bash
$ DEBUG=false npm start
```

To build for production, this command will output optimized production code:

```bash
$ npm run build
```
