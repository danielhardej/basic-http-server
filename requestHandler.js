const { getDatabaseItems, getDatabaseItemById } = require('./databaseHandler');

// GET request handler
const handleGetRequest = (req, res) => {
    if (req.url === '/users') {
        // Handle request for all users
        console.log('Received request for all users');
        getDatabaseItems('users', (err, payload) => {
            if (err) {
                console.log('Error retrieving all users:', err);
                res.writeHeader(400);
                res.write("Error retrieving data");
            } else {
                console.log(`Successfully retrieved ${payload.length} users`);
                res.writeHeader(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(payload));
            }
            res.end();
        });
    } 
    // Handle request for specific user based on id with the url /users/{id}
    else if (req.url.startsWith('/users/')) {
        const userId = req.url.split('/')[2];
        console.log(`Received request for user with ID: ${userId}`);
        
        // Validate that userId is a number
        const userIdNum = parseInt(userId);
        if (isNaN(userIdNum)) {
            console.log(`Invalid user ID provided: ${userId}`);
            res.writeHeader(400);
            res.write("Invalid user ID");
            res.end();
            return;
        }
        
        getDatabaseItemById('users', userIdNum, (err, payload) => {
            if (err) {
                console.log(`Error retrieving user with ID ${userIdNum}:`, err);
                res.writeHeader(400);
                res.write("Error retrieving data");
            } else {
                const user = payload;
                if (user) {
                    console.log(`Successfully retrieved user: ${user.firstName} ${user.lastName} (ID: ${user.id})`);
                    res.writeHeader(200, { "Content-Type": "application/json" });
                    res.write(JSON.stringify(user));
                } else {
                    console.log(`User with ID ${userIdNum} not found`);
                    res.writeHeader(404);
                    res.write("User not found");
                }
            }
            res.end();
        });
    }
    else {
        console.log(`Unknown endpoint requested: ${req.url}`);
        res.writeHeader(404);
        res.write("Endpoint not found");
        res.end();
    }
};

module.exports = { handleGetRequest };