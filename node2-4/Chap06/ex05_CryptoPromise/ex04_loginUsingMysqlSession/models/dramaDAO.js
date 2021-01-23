var connection = require('./db')

// 콜백 함수
// exports.selectDrama = function(cb){
//     connection.query('SELECT * FROM drama', function (error, results, fields) {
//         if(error){
//             console.log(error);
//         }else{
//             cb(results);
//         }
//     });
// }

exports.selectDrama = ()=> new Promise((resolve, reject)=>{
    connection.query('SELECT * FROM drama', function (error, results, fields) {
        if(error){
            reject(error);
        }else{
            resolve(results);
        }
    });
})

// // 콜백 함수
// exports.insertDrama = function(body, cb){
//     sql = 'INSERT INTO drama (title, actor) VALUES(?, ?)';
//     values = [body.title, body.actor];
//     connection.query(sql, values, function(error, results, fields){
//         if(error){
//             console.log(error);
//         }else{
//             cb();
//         }
//     })
// }

exports.insertDrama = (body) => new Promise((resolve, reject)=>{
    sql = 'INSERT INTO drama (title, actor) VALUES(?, ?)';
    values = [body.title, body.actor];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            reject(error);
        }else{
            resolve();
        }
    })
})

exports.updateDrama = function(id, body, cb){
    sql = `UPDATE drama SET title = ?, actor = ? WHERE id = ?`;
    values = [body.title, body.actor, id];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log('UPDATE ERROR');
        }else{
            cb();
        }
    })
}

exports.deleteDrama = function(id, cb){
    sql = `DELETE FROM drama WHERE id = ${id}`;
    connection.query(sql, function(error, results, fields){
        if(error){
            console.log('DELETE ERROR');
        }else{
            cb();
        }
    })
}