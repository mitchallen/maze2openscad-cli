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

    console.log(args);

    let cols = parseInt(args[0]);
    let rows = parseInt(args[1]);
    let filePath = args[2];

    var mazeGenerator = mazeFactory.create({ x: cols, y: rows });

    mazeGenerator.generate();

    mazeGenerator.printBoard();

    mazeGenerator.writeDataFile(filePath); 
}
