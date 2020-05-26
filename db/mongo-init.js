db.createUser(
        {
            user: "student",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "studies"
                }
            ]
        }
);