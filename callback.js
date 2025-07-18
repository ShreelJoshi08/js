function doSomething(callback) {
  // Simulate a task
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
    callback(); // call the function passed as argument
  }, 2000);
}

doSomething(() => {
  console.log("Callback executed");
});


