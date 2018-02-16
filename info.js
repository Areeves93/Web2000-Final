 //How do we measure the length of the critical rendering path? (10 pts) 

    //Well first on the list would be by the number of server round trips the page has to do in order to successfully load and render, second being by the number of actions the browser is required (such as:build cssom, build dom, etc) in order for it to successfully load and render the page, Therefore, counting the number of all external resources that are required in order for it to be loaded. And lastly, you have to be sure to count the number of render-blocking external resources that are required in order to be loaded

    //Ex.
    function measureCRP() {
        var t = window.performance.timing,
          interactive = t.domInteractive - t.domLoading,
          dcl = t.domContentLoadedEventStart - t.domLoading,
          complete = t.domComplete - t.domLoading;
        var stats = document.createElement('p');
        stats.textContent = 'interactive: ' + interactive + 'ms, ' +
            'dcl: ' + dcl + 'ms, complete: ' + complete + 'ms';
        document.body.appendChild(stats);


  // What are the events in the Timeline pane which show the DOM being built, the CSSOM being built, and the render tree being built? (10 pts)
  //     •Parse HTML, Recalculate Style, Paint



//What is the render tree? (10 pts) 
//  A Render Tree is the combination of the DOM and CSSOM. The CSSOM and DOM trees come together to form a render tree, which is then used to compute the layout of each visible element and provides an input to the paint process that renders the pixels to the screen. Doing all of the steps mentioned is important to complete excellent rendering performance. 
    
    
// What are three things you can do in order to speed up a website's load time? (10 pts) 
 
  //  1.Minify CSS 
 //   2.Minify HTML 
 //   3.Minify JavaScript


//What is the name of the Google tool you can use to see a list of things you can do to improve your page's load speed? (10 pts) 

// PageSpeed Insights 

//What is the purpose of including multiple <source> elements within a single <video> element? 

// It's purpose is to conduct the same media content in multiple formats supported by the varies browsers.







    
 

    •    Use webpack to bundle all the files in the following project: https://github.com/Swolebrain/connect4
    •     Setup Steps: 
    •    Fork the project by going to the above link and clicking "Fork" near the top right of the screen 
    •    The project will now have a copy in your own github page. Clone it from there. 
    •    In your computer, initialize this folder as a node project. 
    •    Install webpack, webpack dev server, and make sure they are saved as development dependencies in package.json 
    •    Split out the code from the createTable function and the isLegitEdge function into separate files. Make sure each function has its own file. 
    •    Back in your main file, require/import the contents of your two new files 
    •    Create an npm script to use webpack to fire the dev server and create a javascript bundle (one single file containing all your JS). 
    •    Do anything else you need to do in order to get the bundle working and test your site. 
    •    Before submitting, ensure your code is bundled into one file. 
    •    Commit and push to github 
    •    Upload the game to yourname.fvi-grad.com

    •    Bonus points: Produce a minified bundle for the exercise above using an uglify plugin. 

Use: uglifyjs --compress --mangle -o dist/bundleoutput.js -- dist/bundle.js  
On then. Command prompt google this part