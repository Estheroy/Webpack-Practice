// const sum = require('./sum'); // relative path to the file called sum

import sum from './sum'; // import function to use
import './image_viewer'; // import it to make it run

const total = sum(10, 5);
console.log(total);