# Phonebook Node.js

git clone https://github.com/kaliko92/PhoneBookNodeJS.git

install node.js

in visual code 
write this command
- node -v (if you get a version, it works!)
then
- npm --save install

go to mysql and create database "mydatabase"

write this command in visual code
- sequelize db:migrate
- sequelize db:seed:all

<!-- if it doesn't work, write this in command 
- npm install --save sequelize
then try write previews command again -->


# in postman
- login with this json raw
{
    "email":"omar@hotmail.com",
    "password" :"123456789"
}
- take carear token and write its on authorization

|**Method**| **URL**                              | **Action**                |
|:--------:|:------------------------------------:|:-------------------------:|
|**Get**   |localhos:3000/api/people/person       | Get all people            |
|**Get**   |localhos:3000/api/people/person/id    | Get a specific person     |
|**Post**  |localhos:3000/api/people/person       | Create a new person       |
|**Patch** |localhos:3000/api/people/person/id    | Update an existing person |
|**Delete**|localhos:3000/api/people/person/id    | Delete an existing person |

|**Method**| **URL**                              | **Action**                |
|:--------:|:------------------------------------:|:-------------------------:|
|**Get**   |localhos:3000/api/contacts/contact       | Get all contacts           |
|**Get**   |localhos:3000/api/contacts/contact/id    | Get a specific contact     |
|**Post**  |localhos:3000/api/contacts/contact       | Create a new contact       |
|**Patch** |localhos:3000/api/contacts/contact/id    | Update an existing contact |
|**Delete**|localhos:3000/api/contacts/contact/id    | Delete an existing contact |



<!-- # update fist database
write this command to drop tables and datas, and seed them again
- sequelize db:migrate:undo

then write this again
- sequelize db:migrate
- sequelize db:seed:all -->