import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@proshop.com',
        password: bcrypt.hashSync('admin@proshop', 10),
        isAdmin: true
    },
    {
        name: 'Nik',
        email: 'nik@proshop.com',
        password: bcrypt.hashSync('nik@proshop', 10),
        isAdmin: false
    },
    {
        name: 'Ahmad',
        email: 'ahmad@proshop.com',
        password: bcrypt.hashSync('ahmad@proshop', 10),
        isAdmin: false
    }
]

export default users