import bcrypt from 'bcrypt'

const users = [
    {
       name: 'Admin User',
       email:"admin@example.com" ,
       password: bcrypt.hashSync('123456',10),
       isAdmin:true
    },
    {
       name: 'Anisha Islam',
       email:"anisha@example.com" ,
       password: bcrypt.hashSync('123456',10),
       isAdmin:true
    },
    {
       name: 'Nazmul Hossain',
       email:"nazmul@example.com" ,
       password: bcrypt.hashSync('123456',10),
       
    },
    
]

export default users