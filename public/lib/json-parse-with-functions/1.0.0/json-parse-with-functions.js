/*
 * json-parse-with-functions.js version 1.0.0 by taemon1337
 *
 * Simpe JSON.parse() modification with evaluates javascript functions;
 *
 * Example: 
 *    json = "{
 *      firstname: 'Bob',
 *      lastname: 'Smith',
 *      fullname: 'function() { return [this.firstname,this.lastname].join() }'
 *    }"
 *
 *    user = JSON.parseWithFunctions(json);
 *    alert( 'Hi ' + user.fullname() );
 *
 */
JSON.parseStringFunctions = function(obj) {
  for(var key in obj) {
    if(typeof obj[key] == 'object') {
      obj[key] = this.parseStringFunctions(obj[key]);
    } else if(typeof obj[key] == 'string') {
       if(obj[key].match(/^function/)) {
         obj[key] = eval("("+obj[key]+")");
       }
    }
  }
  return obj;
}

JSON.parseWithFunctions = function(txt_or_obj) {
  if(typeof txt_or_obj == 'string') {
     return JSON.parseStringFunctions(JSON.parse(txt_or_obj));
  } else {
     return JSON.parseStringFunctions(txt_or_obj);
  }
}

JSON.stringifyFunctions = function(obj) {
  for(var key in obj) {
    if(typeof obj[key] == 'object') {
      obj[key] = this.stringifyFunctions(obj[key]);
    } else if(typeof obj[key] == 'function') {
      obj[key] = obj[key].toLocaleString();
    }
  }
  return obj;
}

JSON.stringifyWithFunctions = function(obj, two, three) {
  return JSON.stringify(JSON.stringifyFunctions(obj), two, three);
};