
@mitchallen/maze2openscad-cli
==
Code generate a maze as an OpenSCAD include file via the command line
--
* * *
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
* Find the file __maze.scad__ in the root of the project and make a local copy of it.
* Edit the include path at the top of the file and change it to:

        include <maze-data.scad>
      
* The __maze-data.scad__ file will be generated by the tool  
* To generate a maze include file with data for 10 columns and 20 rows you could do something like this:

        $ maze2openscad-cli 10 20 maze-data.scad
        
* Start OpenSCAD and open __maze.scad__
* You should see a generated maze
* Leave OpenSCAD running and run execute the command line again to see a new maze appear in OpenSCAD

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

#### Version 0.1.0 

* initial release

#### Version 0.1.1 

* updated to use latest version of parent class

* * *
