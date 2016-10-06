#! /usr/bin/env node

/**
    Module: @mitchallen/maze2openscad-cli
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var mazeFactory = require("@mitchallen/maze2openscad");

var userArgs = process.argv.slice(2);

if(userArgs.length != 3) {
    usage();
} else {
    main(userArgs);
}

function usage() {
    console.log("Usage: \n\n\n:> maze2openscad-cli (columns) (rows) (maze-data.scad)\n\n");
}

function main(args) {

    let cols = parseInt(args[0]);
    let rows = parseInt(args[1]);
    let filePath = args[2];

    var mazeGenerator = mazeFactory.create({ x: cols, y: rows });

    mazeGenerator.generate();

    mazeGenerator.printBoard();

    mazeGenerator.writeDataFile(filePath); 

    console.log("\nINSTRUCTIONS: \n\n* Include the %s file in maze.scad\n* maze.scad can be found here: https://github.com/mitchallen/maze2openscad-cli/", filePath );
    console.log("* Open in OpenSCAD to see and export the 3D printable maze\n\n");
}
