var q = require('q');
var def = q.defer();

def.promise.then(console.log, console.log);

setTimeout(def.promise, 300)
def.resolve("I FIRED", null);
def.reject(null, "I DID NOT FIRE");
