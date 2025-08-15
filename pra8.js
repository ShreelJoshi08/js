// Fetch GitHub profile data for one user
async function fetchGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`User "${username}" not found (HTTP ${response.status})`);
        }

        const data = await response.json();
        return {
            username: data.login,
            name: data.name || "No name provided",
            bio: data.bio || "No bio available",
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following,
            profileUrl: data.html_url
        };

    } catch (error) {
        return { error: error.message, username };
    }
}

// Fetch multiple GitHub users at once
async function fetchMultipleUsers(usernames) {
    const results = await Promise.all(usernames.map(fetchGitHubUser));
    return results;
}

// Example usage
(async () => {
    const usernames = ["octocat", "torvalds", "invalidUser12345"];
    const profiles = await fetchMultipleUsers(usernames);

    profiles.forEach(profile => {
        if (profile.error) {
            console.error(`❌ Error for ${profile.username}: ${profile.error}`);
        } else {
            console.log(`✅ ${profile.username} (${profile.name})`);
            console.log(`   Bio: ${profile.bio}`);
            console.log(`   Public Repos: ${profile.publicRepos}`);
            console.log(`   Followers: ${profile.followers}`);
            console.log(`   Profile: ${profile.profileUrl}\n`);
        }
    });
})();
