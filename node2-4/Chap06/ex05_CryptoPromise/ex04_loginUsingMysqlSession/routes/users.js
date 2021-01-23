var express = require('express');
var router = express.Router();
var model = require('../models/usersDAO');

// // 로그인 처리
// // 1. 콜백 함수
// router.post('/login', (req, res)=>{
//   if(req.body.email && req.body.pwd){
//     console.log('req.body: ', req.body);
//     model.selectUser(req.body.email, (results)=>{
//       //res.send(results[0]);
//       console.log('results: ', results);
//       console.log(req.body.email, results[0].email, req.body.pwd, results[0].pwd)
//       if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
//         //res.send('<h1>로그인 성공</h1>')
//         // 로그인 성공 req.session에 기록
//         req.session.isLogin = true;
//         req.session.userEmail = req.body.email;
//         res.redirect('/');
//       }else{
//         res.send('<h1>로그인 실패</h1>')
//       }
//     });
//   }else{
//     res.redirect('/');
//   }
// })

// // 2. Promise
// router.post('/login', (req, res)=>{
//   if(req.body.email && req.body.pwd){
//     model.selectUser(req.body.email)
//       .then((results)=>{
//         if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
//           req.session.isLogin = true;
//           req.session.userEmail = req.body.email;
//           res.redirect('/');
//         }else{
//           res.send('<h1>로그인 실패</h1>')
//         }
//       })
//       .catch(res.send)
//   }else{
//     res.send('email과 password를 입력하세요.')
//   }
// })

// 3. async, await
router.post('/login', async (req, res)=>{
  if(req.body.email && req.body.pwd){
    const results = await model.selectUser(req.body.email);
    if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
      req.session.isLogin = true;
      req.session.userEmail = req.body.email;
      res.redirect('/');
    }else{
      res.send('<h1>로그인 실패</h1>')
    }
  }else{
    res.send('email과 password를 입력하세요.')
  }
})


router.get('/logout', (req, res)=>{
  req.session.destroy(function(err){
    if(err)
        console.log(`req.session.destroy error : ${err}`);
    res.redirect('/');
  });
})

module.exports = router;