
var extname = require('path').extname;
var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var in_place = require('metalsmith-in-place');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var define = require('metalsmith-define');

/**
 * Build.
 */

var metalsmith = Metalsmith(__dirname)
  .use(define({
    env: getEnv()
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(layouts({
    engine: 'handlebars',
    cache: false
  }))
  .build(function(err){
    if (err) throw err;
  });

/**
 * Concat plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
function concat(files, metalsmith, done){
  // ...

  done();
}


function getEnv () {
  var env = 'development';
  process.argv.forEach(function(val, index, array) {
    if (val.indexOf('env') > -1) {
      env = val.substr(val.indexOf('=') + 1);
    }
  });
  return env;
}

