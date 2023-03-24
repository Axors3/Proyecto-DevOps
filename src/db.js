import {createPool} from 'mariadb'

export const db = createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'telefoniadb'
})


