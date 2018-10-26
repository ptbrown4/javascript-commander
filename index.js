#!/usr/bin/env node

var program = require('commander');

program
    .version('1.0.0')
    .option('-c, --codingHomework', 'Finish Coding Homework')
    .option('-p, --pickUpHouse', 'Pick up the House')
    .option('-t, --takeNap', 'Take a nap')
    .option('-w, --workout', 'Workout at Crossfit')
    .parse(process.argv);
 
console.log('To Do List');
    if (program.codingHomework) console.log('  - Finish Coding HW');
    if (program.pickUpHouse) console.log('  - Clean the House');
    if (program.takeNap) console.log('  - Take a nap');
    if (program.workout) console.log('  - Workout at Crossfit');