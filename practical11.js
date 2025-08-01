
function fetchDataFromAPI(callback) {
    console.log("Fetching data from API...");

 
    setTimeout(() => {
        
        const apiData = {
            userId: 49,
            username: "ShreelJoshi",
            course: "Advanced Web Technology",
            status: "Active"
        };

        console.log("Data retrieved successfully!");
        
        
        callback(apiData);
    }, 2000);
}


function displayData(data) {
    console.log("\n--- API Response ---");
    console.log("User ID:", data.userId);
    console.log("Username:", data.username);
    console.log("Course:", data.course);
    console.log("Status:", data.status);
}

// Call the function and pass displayData as callback
fetchDataFromAPI(displayData);
