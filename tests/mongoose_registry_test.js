var nodeunit = require('nodeunit');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

exports.registryTest = nodeunit.testCase({
    'testConstructor': function(test) {
        var mongooseRegistry = require('../lib/mongoose_registry');
        test.done();
    },
    'testAdd': function(test) {
        var reg = require('../lib/mongoose_registry');
        var testSchema = new Schema({
            title:      String,
            test:       String
        });
        reg.add(testSchema, 't', function(success) {
            test.ok(success, "Registration adding should've succceeded");
            reg.log(function(schemas) {
                console.log(JSON.stringify(schemas));
                test.done();                
            })
        })
    },
    'testRemove': function(test) {
        var reg = require('../lib/mongoose_registry');
        var testSchema = new Schema({
            
        });
        reg.add(testSchema, 't', function(success) {
            reg.remove('t', function(success) {
                test.ok(success, 'Should have removed the schema from the registry');
                reg.log(function(schemas) {
                    console.log(JSON.stringify(schemas));
                    test.done();
                });
            });
        });
    },
    'testGet': function(test) {
        var reg = require('../lib/mongoose_registry');
        var testSchema = new Schema({
            
        });
        reg.add(testSchema, 't', function(success) {
            reg.get('t', function(schema) {
                test.deepEqual(schema, testSchema, 'Schemas should be deep equal to each other.');
                reg.log(function(schemas) {
                    console.log(JSON.stringify(schemas));
                    test.done();
                });
            });
        });
    }
});