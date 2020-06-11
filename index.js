const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      let newArr = Object.values(collection);
      newArr.forEach(e => func(e))
      return collection;
    },

    map: function(collection, func) {
      let newArr = Object.values(collection);
      let finalArr = [];
      newArr.forEach(e => finalArr.push(func(e)));
      return finalArr;
    },

    reduce: function(collection, func, acc) {
      let start = !!acc ? acc : collection[0];
      let newArr = start === acc ? collection : collection.slice(1);
      newArr.forEach(e => {
        start = func(start, e)
      })
      return start;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
        collection.forEach(e => {
        predicate(e);
        })
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
