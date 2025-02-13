# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error arises when a function expects a number but receives a string.  The solution involves stricter type checking and input validation.

## Bug

The `add` function expects two numbers as input. However, in the example, we are passing a string ('10') as the second argument. TypeScript correctly identifies this type mismatch and throws an error.

## Solution

The solution involves ensuring that the inputs are actually numbers.  This can be done using type guards or by explicitly converting the inputs to numbers.