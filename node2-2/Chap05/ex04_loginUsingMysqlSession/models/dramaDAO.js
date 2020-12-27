var connection = require('./db')

exports.selectDrama = function(cb){
    connection.query('SELECT * FROM drama', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);  // results : select된 데이터가 객체 형태로 들어있음.
            // [{title: '나의 아저씨, actor: '아이유, 이선균'}, {title: '나의 아저씨, actor: '아이유, 이선균'}]
        }
    });
}

exports.insertDrama = function(body, cb){
    sql = 'INSERT INTO drama (title, actor) VALUES(?, ?)';
    values = [body.title, body.actor];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb();
        }
    })
}

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