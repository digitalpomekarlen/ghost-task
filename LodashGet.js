function getMyImp( object, paths, defaultVal ){
  paths = Array.isArray( paths )? paths : paths.split('.');
  object = object[paths[0]];
  if( object && paths.length>1 ){
    return getMyImp( object, paths.slice(1) );
  }
  return object === undefined? defaultVal : object;
}
var object = { "a": [{ "b": { "c": 3 } }] };
console.log(getMyImp(object, ["a", "0", "b", "c"]));
console.log(getMyImp(object, "a[0].b.c"));
console.log(getMyImp(object, "a[0].b.c"));