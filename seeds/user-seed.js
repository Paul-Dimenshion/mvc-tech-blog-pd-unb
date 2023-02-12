const { User } = require('../models');

const userData = [
    {
		"username": "Ivan",
        "email": "ivan@mail.com",
		"password": "password1111"
	},
	{
		"username": "Petro",
        "email": "petro@mail.com",
		"password": "password2222"
	},
	{
		"username": "Mykola",
        "email": "mykola@mail.com",
		"password": "password3333"
	},
	{
		"username": "Pavlo",
        "email": "pavlo@mail.com",
		"password": "password4444"
	}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;
