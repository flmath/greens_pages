# New take on my webCV, not expanded with blog post features.

### Graphics Sources and inspirations:

I have tried to build the look based on bootstrap, but I have ended with quite a modifications:
#### The navbar:
https://pixabay.com/images/id-3227459/
https://pixabay.com/images/id-677521/

Penrose triangle and octagon for the navbar button taken from wikipedia (and colorized)
https://en.wikipedia.org/wiki/Penrose_triangle
https://en.wikipedia.org/wiki/File:Penrose_octagon.svg
https://upload.wikimedia.org/wikipedia/commons/c/c1/Penrose-dreieck.svg
https://upload.wikimedia.org/wikipedia/commons/a/a3/Penrose_hexagon.svg
https://upload.wikimedia.org/wikipedia/commons/2/25/Penrose_pentagon.svg
https://upload.wikimedia.org/wikipedia/commons/1/1c/Penrose_square.svg

Impossible cube:
https://en.wikipedia.org/wiki/Impossible_cube

A Penrose triangle boxes for postlist container:
https://pixabay.com/images/id-161955/

#### The background:
https://en.wikipedia.org/wiki/Relativity_(M._C._Escher)
The Escher Relativity drawing downloaded from https://www.flickr.com/photos/pmeimon/40066693941 then trimmed a little for the purpose.
### The inspiration for color palette:
https://pixabay.com/images/id-669296/
https://pixabay.com/images/id-1468883/
Clock transformed in the watermark background:

https://pixabay.com/images/id-4068582/
Hexagons:
https://pixabay.com/images/id-1562743/
Chess:
https://pixabay.com/images/id-316658/
Fibonacci:
https://pixabay.com/images/id-1601158/
Chrysalis:
https://pixabay.com/images/id-1548273/
Depth:
https://pixabay.com/images/id-1558164/
The CV container background:
https://pixabay.com/images/id-2703890/
Guilloche for bookmarks:
https://pixabay.com/images/id-1137074/
Guilloche for buttons:
https://pixabay.com/images/id-1253260/
Guilloche for gold marker:
https://pixabay.com/images/id-1337833/



#### The legacy look:
Butterfly:
https://pixabay.com/images/id-142506/
Bricks:
https://pixabay.com/images/id-2172682/

### How to make flexible containers:
https://medium.freecodecamp.org/how-to-create-a-fully-responsive-navbar-with-flexbox-a4435d175dd3

### How to change image on hover with CSS:
https://www.tutorialrepublic.com/faq/how-to-change-image-on-hover-with-css.php

### How to change image on hover with React (see BrandImg):
https://stackoverflow.com/questions/32125708/how-can-i-access-a-hover-state-in-reactjs

### Reference functions in react properly:
https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error/48497410

### Search bar reactive:
https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b


## Libraries I have used:
https://reactjs.org/
https://reactstrap.github.io
https://makotot.github.io/react-scrollspy/
https://github.com/timarney/react-app-rewired -> https://jaketrent.com/post/change-webpack-config-create-react-app-without-ejecting/
https://github.com/webpack-contrib/html-loader

## For further considerations:

https://codeburst.io/the-2018-web-developer-roadmap-826b1b806e8d
https://www.npmjs.com/package/react-render-html
https://stackoverflow.com/questions/35028591/react-dangerouslysetinnerhtml-to-render-an-iframe-youtube-embed-from-props
https://facebook.github.io/create-react-app/docs/advanced-configuration
https://survivejs.com/webpack/what-is-webpack/

https://blog.cloudboost.io/learn-how-to-create-a-simple-blog-with-react-node-c05fa6889de3

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

###Loading External sources and Lazy loading:
https://www.robinwieruch.de/react-fetching-data/#react-fetch-data-render-props
https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52

#### Fetch
https://davidwalsh.name/fetch
https://stackoverflow.com/questions/36631762/returning-html-with-fetch
```javascript
fetch('somePage.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
```
#### Load/import
https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js

As of node v0.5.x yes you can require your JSON just as you would require a js file.
```javascript
var someObject = require('./somefile.json')
```
In ES6:
```javascript
import someObject from ('./somefile.json')
```

https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d


https://stackoverflow.com/questions/52042301/reactjs-import-a-dynamic-file-in-render-method
```javascript
render() {
   let pdfFile = require('../' + this.props.termsAndCondition.pdfDocument);
   return (
      <li>
         <a href={pdfFile} target="_blank" className="link">
            <img src={pdfImage} className="phoneMain"></img>
            {this.props.termsAndCondition.language}
         </a>
      </li>
   );
}
```

### dangerouslySetInnerHTML
https://reactjs.org/docs/dom-elements.html

### iframe

### Public folder
https://facebook.github.io/create-react-app/docs/using-the-public-folder

https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder

How to make drawing from picture with GIMP:
https://www.youtube.com/watch?v=eLgsSN2MsMo

## Other pictures:
https://pixabay.com/vectors/impossible-optical-illusion-triangle-161955/


https://pixabay.com/vectors/cube-escher-gradient-mc-escher-1293954/
https://pixabay.com/photos/tree-silhouette-mysterious-407256/
https://pixabay.com/photos/nature-tree-fog-waters-snow-lake-3091991/
https://pixabay.com/photos/tree-fog-november-cold-nature-554391/
https://pixabay.com/photos/fog-tree-mood-backlighting-nature-553005/
https://pixabay.com/photos/butterfly-blue-insect-142506/
https://pixabay.com/photos/pattern-ceiling-steel-geometric-3130657/
https://pixabay.com/photos/arches-architecture-bridge-columns-1837166/
https://pixabay.com/photos/torino-royal-palace-piemonte-1220460/
https://pixabay.com/photos/library-church-architecture-white-2544157/
https://pixabay.com/photos/roof-glass-library-building-1878904/
https://pixabay.com/photos/library-book-literature-knowledge-807931/
https://pixabay.com/photos/peabody-institute-baltimore-usa-1629259/
https://pixabay.com/photos/ice-eiskristalle-snow-iced-1997289/
https://pixabay.com/photos/pattern-ceiling-steel-geometric-3130657/
https://pixabay.com/photos/coast-beach-ocean-sea-nature-509195/
https://pixabay.com/photos/ice-cave-ice-curtain-icicle-16574/
https://pixabay.com/photos/movement-clock-gear-feather-4068582/

https://pixabay.com/photos/graphic-creativity-geometric-shape-3197762/
https://pixabay.com/photos/puzzle-paper-design-game-sample-3935850/
https://pixabay.com/photos/spiral-notebook-notebook-open-3475360/

https://pixabay.com/photos/chess-metaphor-board-business-315940/
https://pixabay.com/photos/chess-metaphor-board-business-316657/

https://pixabay.com/vectors/guilloche-rosette-security-printing-1337833/

https://pixabay.com/illustrations/fractal-background-digitization-2173803/
https://pixabay.com/illustrations/black-and-white-background-spiral-2703890/
https://pixabay.com/illustrations/hexagon-background-tile-mosaic-2822770/
https://pixabay.com/illustrations/fractal-abstract-generated-2787625/
https://pixabay.com/illustrations/fractal-abstract-rendering-idea-1707412/
https://pixabay.com/illustrations/organic-fractal-abstract-background-1280085/
https://pixabay.com/illustrations/fractal-abstract-background-cosmos-1280111/
https://pixabay.com/illustrations/fractal-delicate-white-background-1784703/
https://pixabay.com/illustrations/apophysis-attractor-colours-digital-1437715/

https://pixabay.com/illustrations/wave-background-pattern-abstract-706397/
https://pixabay.com/illustrations/white-background-abstract-light-2486923/

https://pixabay.com/photos/storm-clouds-clouds-cumulus-3499982/
https://pixabay.com/photos/clouds-sky-weather-blue-3422258/


https://pixabay.com/illustrations/concept-gear-planet-technology-1262315/

https://pixabay.com/photos/pattern-winter-cold-ice-blue-2054281/
https://pixabay.com/photos/abstract-ice-frost-crystals-frozen-1869263/

https://pixabay.com/photos/sky-stars-constellations-astronomy-828648/
https://pixabay.com/photos/astronomy-space-darkness-science-3173669/
https://pixabay.com/photos/ocean-sea-water-wave-chess-2791952/
https://pixabay.com/photos/magic-chess-chess-harry-potter-play-3795150/
https://pixabay.com/photos/chess-game-chessboard-glass-board-433071/
https://pixabay.com/photos/macro-focus-cogwheel-gear-engine-1452986/

https://pixabay.com/photos/pocket-watch-time-clock-time-of-2058930/

https://pixabay.com/illustrations/matrix-binary-code-green-3415878/
https://pixabay.com/illustrations/background-color-template-abstract-3266287/

https://pixabay.com/illustrations/network-technology-communication-3880571/


https://pixabay.com/users/artbaggage-1189926/
https://pixabay.com/images/search/guilloche/

https://pixabay.com/vectors/memory-note-notepad-word-writing-1293086/
https://pixabay.com/photos/backdrop-background-blank-board-72250/
