#! /usr/bin/env node

/**
    Module: @mitchallen/maze2openscad-cli
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var mazeFactory = require("@mitchallen/maze2openscad");

var userArgs = process.argv.slice(2);

console.log(userArgs);

if(userArgs.length != 3 && userArgs.length != 4 ) {
    usage();
} else {
    main(userArgs);
}

function usage() {
    console.log("Usage: \n\n\n:> maze2openscad-cli square (columns) (rows) (maze-data.scad)\n\n");
    console.log("Usage: n:> maze2openscad-cli circle (options.json) (maze-circle-data.scad)\n\n");
}

function main(args) {

    let type = args[0];;
    let cols = 0;
    let rows = 0;
    let filePath = null;

    var mazeGenerator = null;

    switch(type) {
        case 'square':
            cols = parseInt(args[1]);
            rows = parseInt(args[2]);
            filePath = args[3];
            mazeGenerator = mazeFactory.Square({ x: cols, y: rows });
            break;
        case 'circle':
            var opFile = args[1];
            filePath = args[2];
            var options = require( opFile );
            mazeGenerator = mazeFactory.Circle(options);
            break;
        default:
            console.error('invalid type: ' + type);
            usage();
            process.exit(1);
    }

    mazeGenerator.generate();

    mazeGenerator.printBoard();

    mazeGenerator.writeDataFile(filePath); 

    var scadFile = type == 'square' ? 'maze.scad' : 'maze-circle.scad';

    console.log("\nINSTRUCTIONS: \n\n* Include the %s file in %s.", 
        filePath, scadFile );
    console.log("* You find %s here: https://github.com/mitchallen/maze2openscad-cli/", scadFile );
    console.log("* Open in OpenSCAD to see and export the 3D printable maze\n\n");
}
