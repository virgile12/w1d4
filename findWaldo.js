function findWaldo(arr, found) {
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {

      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {

  console.log("Found Waldo at index: " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);