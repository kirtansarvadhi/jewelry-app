const users = [
    {
        username: "Kirtan",
        password: "Kirtan@123"
    }
];
 
function login(username, password) {
    const user = users.find(
        u => u.username === username && u.password === password)
        ;
 
        if (user) {
            console.log("Login Successful");
        } else {
            console.log("Invalid Credentials");
        }
}
 
login("Kirtan", "Kirtan@123");
login("jay", "jay@123");

 