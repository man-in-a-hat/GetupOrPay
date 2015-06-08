"Get up or pay" app

How to develop:
 * install webpack: "npm install -g webpack",
 * install packages: "npm install",
 * go to the root folder of the project,
 * create "build" folder: "mkdir build",
 * create a symlink to index.html: "ln -s $(pwd)/src/index.html $(pwd)/build/index.html",
 * run webpack in a watch mode: "webpack --watch"