var connection = require('./db')

// // 콜백 함수 사용
// exports.selectUser = function(email, cb){
//     connection.query('SELECT * FROM user WHERE email = ?', [email], function (error, results, fields) {
//         if(error){
//             console.log(error);
//         }else{
//             cb(results);
//         }
//     });
// }

// Promise 사용
exports.selectUser = (email) => new Promise((resolve, reject)=>{
    connection.query('SELECT * FROM user WHERE email = ?', [email], function (error, results, fields) {
        if(error){
            reject(error);
        }else{
            resolve(results);
        }
    });
})