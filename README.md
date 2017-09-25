
@mitchallen/maze2openscad-cli
==
Code generate a maze as an OpenSCAD include file via the command line
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/maze2openscad-cli">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/maze2openscad-cli.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/maze2openscad-cli">
    <img src="https://codecov.io/gh/mitchallen/maze2openscad-cli/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/maze2openscad-cli">
    <img src="http://img.shields.io/npm/dt/@mitchallen/maze2openscad-cli.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/maze2openscad-cli">
    <img src="http://img.shields.io/npm/v/@mitchallen/maze2openscad-cli.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/maze2openscad-cli">
    <img src="https://img.shields.io/github/license/mitchallen/maze2openscad-cli.svg" alt="License"></a>
  </a>
</p>

## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

This is the command line version of the module __[@mitchallen/maze2openscad](https://www.npmjs.com/package/@mitchallen/maze2openscad)__.

Because this is a command line tool, you should install it using the __-g__ flag. This may require starting the command with __sudo__.

    $ npm install -g @mitchallen/maze2openscad-cli
  
* * *

## Usage

* If you don't have a copy of __OpenSCAD__ you can download it for free from here: __[http://www.openscad.org](http://www.openscad.org)__
* Create a new test folder and change to it
* Browse to: __[https://github.com/mitchallen/maze2openscad-cli/](https://github.com/mitchallen/maze2openscad-cli/)__

### Square Maze

* Find the file __maze.scad__ in the root of the project and make a local copy of it.
* Edit the include path at the top of the file and change it to:
```
include <demo-maze-data.scad>
```
      
* The __demo-maze-data.scad__ file will be generated by the tool  
* To generate a maze include file with data for 10 columns and 20 rows do this:
```
$ maze2openscad-cli square 10 20 demo-maze-data.scad
```
        
* Start OpenSCAD and open __maze.scad__
* You should see a generated maze
* Leave OpenSCAD running and run execute the command line again to see a new maze appear in OpenSCAD

### Circle Maze

* Find the file __maze-circle.scad__ in the root of the project and make a local copy of it.
* Edit the include path at the top of the file and change it to:
```
include <demo-circle-maze-data.scad>
```
      
* The __demo-circle-maze-data.scad__ file will be generated by the tool 
* Create a subfolder called __input__ 
* Copy the __test/input/circle-demo.json__ file from the repo to that folder
* To generate a maze include file with data for a circular maze run this command (*you must use an absolute path for the first parameter - substitute __your-project__ with your project folder*):
```
$ maze2openscad-cli circle ~/your-project/input/circle-demo.json \
demo-circle-maze-data.scad
```
Windows users may need to adjust the input path to use drive letters, etc.
        
* Start OpenSCAD and open __maze-circle.scad__
* You should see a generated maze
* Leave OpenSCAD running and run execute the command line again to see a new maze appear in OpenSCAD

#### Circle Options

* See ```test/input/circle-demo.json``` in the repo for an example of how to create option files for circlular mazes.
* The circle input file must be a valid JSON file with the following parameters:

```
{
    "rings": 5,
    "ringHeight": 6,
    "ringThickness": 1.5,
    "outerThickness": 3,
    "ringCutWidth": 5,
    "innerRadius": 6,
    "middleRadius": 18,
    "middleHole": false,
    "spokeWidth": 0.5,
    "hasFloor": false,
    "floorHeight": 2
}
```

* Feel free to change the values to generate various types of mazes.

#### JSON Validator

To make sure that your circle maze input file is valid, paste it into an online JSON validator, like this one:  https://jsonlint.com/

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/maze2openscad-cli.git](https://bitbucket.org/mitchallen/maze2openscad-cli.git)
* [github.com/mitchallen/maze2openscad-cli.git](https://github.com/mitchallen/maze2openscad-cli.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.2.7

* Updated circular maze instructions to highlight need for absolute input path
* Updated doc with example circle make input file and link to JSON validator

#### Version 0.2.6

* Set license to MIT

#### Version 0.2.5

* Updated code coverage script

#### Version 0.2.4

* Added coverage script

#### Version 0.2.3

* Install mocha as a local dev dependency

#### Version 0.2.2

* Added CircleCI support and badges in README

#### Version 0.2.1

* Fixed documentation

#### Version 0.2.0 

* now supports circular mazes
* note that command line arguments have changed

#### Version 0.1.1 

* updated to use latest version of parent class

#### Version 0.1.0 

* initial release


* * *
