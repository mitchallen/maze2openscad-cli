/**
    Module: @mitchallen/maze2openscad-cli
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    fs = require('fs'),
    child_process = require('child_process'),
    modulePath = "../index";

describe('module smoke test', function() {

    before(function(done) {
        // Call before all tests
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    function runApp(done, spec ) {

        spec = spec || {};
        const type = spec.type,
              circleOptionFile = spec.optionFile,
              x = spec.x,
              y = spec.y;

        var scadFile = 'test/output/maze' 
            + ( type ? '-' + type + '-' : '' ) + x + 'x' + y 
            + '-test.scad';

        var list = [];

        list[0] = type;

        switch(type) {
            case 'square':
                list[1] = x;
                list[2] = y;
                list[3] = scadFile;
                break;
            case 'circle':
                list[1] = circleOptionFile;
                list[2] = scadFile;
                break;
            default:
                done(new Error('unsupported type: ' + type) );
                break;
        }

        fs.exists( scadFile, function(exists) { 
            if (exists) { 
                // delete file from previous run
                fs.unlinkSync(scadFile); 
            }

            var child = child_process.spawn('./index.js', list );
            
            var gotOutput = false;
    
            child.stdout.on('data', function(data) {
                // data.toString().should.eql('Lookout World\n');
                gotOutput = true;
            });
    
            child.on('exit', function(exitCode) {
                exitCode.should.eql(0);
                var fs = require('fs');
                if (fs.existsSync(scadFile)) {
                    gotOutput.should.eql(true);

                    var data = fs.readFileSync(scadFile, 'utf8');
                    switch(type) {
                        case 'square':
                            data.should.containEql('columns = ' + x );
                            data.should.containEql('rows = ' + y );
                            data.should.containEql('connections = ['  );
                            data.should.containEql('];');
                            break;
                        case 'circle':
                            data.should.containEql('ringData = ['  );
                            data.should.containEql('];');
                            break;
                        default:
                            done(new Error('unexpected type: ' + type));
                    }
                    done();
                } else {
                    done( new Error("File doesn't exist: " + scadFile ) );
                }
            });
    
            child.on('error', function(err) {
                console.log(err);
                done(err);
            });

        });
    }

    it('maze 5x6', function(done) {
        runApp( done, { type: 'square', x: '5', y: '6' } );
    });

    it('maze 10x10', function(done) {
        runApp( done, { type: 'square', x: '10', y: '10' } );
    });

    it('maze 20x10', function(done) {
        runApp( done, { type: 'square', x: '20', y: '10' } );
    });

    it('maze square 7x8', function(done) {
        runApp( done, { type: 'square', x: '7', y: '8' } );
    });

    it('maze circle 8x9', function(done) {
        runApp( done, { type: 'circle', optionFile: './test/input/circle-demo.json' } );
    });
});
