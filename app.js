"use strict";
let cars = 'subaru';
// test 1: Equality comparison(True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
// Test 2: Strict equality comparison(True)
console.log("Is car ==='subaru'? I predict True.");
console.log(car === 'subaru'); //True
// Test:3 Inenquality comparing (False)
console.log("Is car !='subaru'? I predict False.");
console.log(car != 'subaru'); //False
// Test4: Strict inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False
// Test 5:Less than comparison (False)
console.log("Is car <'subaru'? I predict Fales.");
console.log(car < 'subaru'); //False (lexicogaraphic comparison) 
//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False .");
console.log(car > 'subaru'); // False (lexicongraphic comparison)
//Test 7: Less than or comparison (True)
console.log("Is car <='subaru'? I predict True.");
console.log(car <= 'subaru'); //True
// Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); //True (non-empty string is truthy)
// Test 9: checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car); // True (non-empty string is truthy)
// Test 10: checking falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); //False (negation of a truthy value)
