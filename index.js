var recipes = {};
// function updateObjectWithKeyAndValue(object, key, value) {
//   return Object.assign({}, object, {key: value})
// }

 function updateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
 }

 function updateObjectWithKeyAndValue(object, key, value) {
   var newObj = Object.assign({}, object, {[key]: value});
   return newObj;
 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}
 // function functionName() {
 //
 // }
