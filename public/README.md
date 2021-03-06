## New take on my webCV, now expanded with blog post features.
 https://flmath.github.io/greens_pages/

### Setting up a Travis CI + React + Github Pages
https://medium.com/@bezgachev/6-simple-steps-to-automatically-test-and-deploy-your-javascript-app-to-github-pages-c4c32a34bcb1

https://github.com/flmath-dirty/react_two

1. install nodejs
2. install  npm install -g create-react-app
3. create repo reactx
4. git clone (https:/ get it from page)
5. create-react-app reactx
6. cd reactx
7. add .travis.yml file
8. npm run start
9. npm run build
10. modify package.json file
11. git add .
12. git commit -m'comment'
13. git push
14. generate token in github
15. set token in travis
16. run build
17. check https://flmath-dirty.github.io/react_two/

### Graphics Sources and inspirations:

I have tried to build the look based on bootstrap, but I have ended with quite a modifications:
#### The navbar:
https://pixabay.com/images/id-3880571/ heavily edited
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
The CV container background and the list of post:
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

### Linking README.md from public directory to root for github.
https://stackoverflow.com/questions/49980639/specify-alternate-project-level-readme-md-on-github

### Internal history back button handling
https://stackoverflow.com/questions/24307401/window-history-pushstate-refreshing-the-browser
```javascript
window.history.pushState({urlPath:'/page1'},"",'/page1')
```
https://stackoverflow.com/questions/49022516/detecting-that-the-back-button-was-pressed-in-react-router?noredirect=1&lq=1
```javascript
componentDidUpdate(){
  window.onpopstate  = (e) => {
 //your code...
 }
}
```

### React + Markdown
react-markdown + react-syntax-highlighter prism:
https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

### React non breaking space
https://www.javascriptstuff.com/how-whitespace-works-in-jsx/

```
<div>&nbsp;•Hello•World</div>
```
### CSS for wrapping in code fences in markdown.

https://stackoverflow.com/questions/41238148/how-to-line-wrap-long-lines-inside-markdown-code-blocks-in-githubgitlab

### React block default behaviors connected to listeners
https://hashnode.com/post/why-do-you-write-eventpreventdefault-in-react-cjdznf1el0atom3wt831c2m9o
```javascript
doMeow = e => {
 e.preventDefault();
 // do meow here
}

render() {
    return(
        <a onClick={this.doMeow} href="/">Meow</a>
    );
}```

### React synchronous states
https://medium.freecodecamp.org/understanding-setstate-in-react-ea8982168b49

```javascript
onClick = () =>
{this.setState((prevState, props) => ({value: prevState.value + 1}))
}
```
### Javascript spread operator/ merge objects
https://flaviocopes.com/how-to-merge-objects-javascript/
```javascript
const object1 = {
  name: 'Flavio'
}
const object2 = {
  age: 35
}
const object3 = {...object1, ...object2 }
```

### React route with forwarded props
https://tylermcginnis.com/react-router-pass-props-to-components/

### Separate library without component is possible
https://stackoverflow.com/questions/43262599/call-js-function-from-another-file-in-react

``` javascript
//slideshow.js
export const plusSlides = (n)=>{
    showSlides(slideIndex += n);
}
```

and import it where you need to

```
//Homepage.js
import {plusSlides} from './slide'

handleClick (event) {
        plusSlides(1);
    }
```    
### withRouter Router usage
https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md

### withRouter Router usage onClick
https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

``` javascript
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/new-location') }}
  >
    Click Me!
  </button>
))
```

``` javascript
import { Route } from 'react-router-dom'

const Button = () => (
  <Route render={({ history}) => (
    <button
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
      Click Me!
    </button>
  )} />
)
```
### Router parameters :id
https://stackoverflow.com/questions/45468837/get-path-params-in-react-router-v4

``` javascript
import {withRouter} from 'react-router';

class BookDetailedView extends React.Component {
    render() {
        var id = this.props.match.params.id


    }
}
export default withRouter(BookDetailedView) ;
```

``` javascript
<Route path="/details/:id" render={({match}) => (
          <BookDetailedView
            bookStateUpdated = {this.bookStateUpdated}
            book = {this.state.books}
            id={match.params.id}
          />
)}/>
```

### Change basename of the router, so it works on github Pages
https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819
https://github.com/facebook/create-react-app/issues/1765#issuecomment-327615099

``` javascript
<BrowserRouter basename={process.env.PUBLIC_URL}>
  {/* routes */}
</BrowserRouter>
```
### The SPA (Single Page Application) subpages redirecting to 404 issue on github.io pages
https://github.com/rafrex/spa-github-pages

### Default value for object attributes in Javascript
https://stackoverflow.com/questions/6600868/set-default-value-of-javascript-object-attributes

``` javascript
var handler = {
  get: function(target, name) {
    return target.hasOwnProperty(name) ? target[name] : 42;
  }
};

var p = new Proxy({}, handler);

p.answerToTheUltimateQuestionOfLife; //=> 42

```
### React router handling 404
https://tylermcginnis.com/react-router-handling-404-pages/

### Crazy error 'Cannot read property 'toLowerCase' of undefined'
https://stackoverflow.com/questions/55212280/npm-run-build-failed-to-compile-cannot-read-property-tolowercase-of-undefi

## Libraries I have used:
https://reactjs.org/
https://reactstrap.github.io
https://makotot.github.io/react-scrollspy/
https://github.com/timarney/react-app-rewired -> https://jaketrent.com/post/change-webpack-config-create-react-app-without-ejecting/
https://github.com/webpack-contrib/html-loader
https://github.com/ReactTraining/history
https://www.npmjs.com/package/marked

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

https://pixabay.com/vectors/certificate-diploma-award-background-1253260/
https://pixabay.com/vectors/guilloche-rosette-security-printing-1337833/
https://pixabay.com/illustrations/spirograph-pattern-design-geometric-1991340/


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

https://pixabay.com/photos/sky-stars-constellations-astronomy-828648/S
https://pixabay.com/photos/astronomy-space-darkness-science-3173669/
https://pixabay.com/photos/ocean-sea-water-wave-chess-2791952/
https://pixabay.com/photos/magic-chess-chess-harry-potter-play-3795150/
https://pixabay.com/photos/chess-game-chessboard-glass-board-433071/
https://pixabay.com/photos/macro-focus-cogwheel-gear-engine-1452986/

https://pixabay.com/photos/pocket-watch-time-clock-time-of-2058930/

https://pixabay.com/illustrations/matrix-binary-code-green-3415878/
https://pixabay.com/illustrations/background-color-template-abstract-3266287/

https://pixabay.com/illustrations/network-technology-communication-3880571/

https://pixabay.com/vectors/computer-cyber-circuitry-circuits-3163436/

https://pixabay.com/users/artbaggage-1189926/
https://pixabay.com/images/search/guilloche/

https://pixabay.com/illustrations/organic-fractal-abstract-background-1280085/

https://pixabay.com/vectors/memory-note-notepad-word-writing-1293086/
https://pixabay.com/photos/backdrop-background-blank-board-72250/

https://pixabay.com/illustrations/fractals-background-mathematics-1800242/
https://pixabay.com/vectors/note-notes-memo-cards-cards-learn-1399152/
https://pixabay.com/illustrations/fractal-abstract-background-physics-1280076/
https://pixabay.com/illustrations/mandala-coloring-picture-imagine-3225164/


## Other interesting colors:
https://visme.co/blog/color-combinations/

http://www.color-hex.com/color/b9e5f3
http://www.color-hex.com/color/8ed3f4
http://www.color-hex.com/color/328daa
http://www.color-hex.com/color/e4ebf4
http://www.color-hex.com/color/8a8683
http://www.color-hex.com/color/5a4d4c
http://www.color-hex.com/color/51a2d9
http://www.color-hex.com/color/505961

### English language support:

https://www.slickwrite.com
https://app.grammarly.com
