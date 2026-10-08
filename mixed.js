// 1. Store the user profile using a JavaScript Object
const userProfile = {
    userName: "Alex Morgan",
    age: 28,
    isSubscribed: true, // Boolean status for subscription
    location: "Seattle, WA",
    hobbies: ["Hiking", "Photography", "Playing Chess"] // Array containing at least two hobbies
};

// 2. Function to display the stored user profile
function displayUserProfile(profile) {
    console.log("=== USER PROFILE ===");
    console.log(`Username:            ${profile.userName}`);
    console.log(`Age:                 ${profile.age} years old`);
    
    // Convert boolean subscription status into a reader-friendly string
    const subscriptionText = profile.isSubscribed ? "Active" : "Inactive";
    console.log(`Subscription Status: ${subscriptionText}`);
    
    console.log(`Location:            ${profile.location}`);
    
    // Join the array elements into a comma-separated string for display
    console.log(`Hobbies:             ${profile.hobbies.join(", ")}`);
    console.log("====================");
}

// 3. Execute the function to display the profile
displayUserProfile(userProfile);
