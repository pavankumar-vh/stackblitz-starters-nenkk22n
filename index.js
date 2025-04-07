const script = require('./script');

const payload = { id: 101, name: 'student' };
const secret = 'mySecretKey';

const token = script(payload, secret);
console.log('JWT:', token);
