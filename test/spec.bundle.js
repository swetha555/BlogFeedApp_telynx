import "./shim";
import "./boot";

// require all modules follwing spec pattern
// pass `true` for recursive
let context = require.context("../src", true, /\.spec\.js$/);

context.keys().forEach(context);
