const myPromise = new Promise((resolve, reject) => {
  // Simulate async task
  setTimeout(() => {
    console.log("Task started");
    const success = true;

    if (success) {
      resolve("Task completed!");
    } else {
      reject("Something went wrong.");
    }
  }, 100);
});

myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
