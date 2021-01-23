var express = require('express');
var router = express.Router();
var model = require('../models/dramaDAO');

// // 1. 콜백 함수
// router.get('/', function(req, res) {
//   model.selectDrama((results)=>{
//     res.send(results)
//     // res.render('dramaList', { title: 'My Favorite Drama List', list: results, isLogin: req.session.isLogin });
//   })
// });

// // 2. Promise
// router.get('/', function(req, res) {
//   model.selectDrama()
//     .then((results)=>res.render('dramaList', { title: 'My Favorite Drama List', list: results, isLogin: req.session.isLogin }))
//     .catch((error)=>res.send(error))
// });

// 3. async, await
router.get('/', async function(req, res) {
  const results = await model.selectDrama();
  res.render('dramaList', { title: 'My Favorite Drama List', list: results, isLogin: req.session.isLogin })
});

// // 1. 콜백 함수
// router.post('/', function(req, res){
//   if(req.body.title && req.body.actor){
//     model.insertDrama(req.body, ()=>{
//       res.redirect('/drama');
//     })
//   }else{
//     res.redirect('/drama');
//   }
// })


// // 2. Promise
// router.post('/', function(req, res){
//   if(req.body.title && req.body.actor){
//     model.insertDrama(req.body)
//       .then(res.redirect('/drama'))
//       .catch(res.send)  // .catch((error)=>res.send(error))
//   }else{
//     res.send('입력 데이터가 없습니다.')
//   }
// })

// 3. async, await
router.post('/', async function(req, res){
  if(req.body.title && req.body.actor){
    await model.insertDrama(req.body);
    res.redirect('/drama');
  }else{
    res.send('입력 데이터가 없습니다.')
  }
})

router.post('/update/:id', function(req, res){
  if(req.body.title && req.body.actor){
    model.updateDrama(req.params.id, req.body, ()=>{
      res.redirect('/drama');
    })
  }else{
    res.redirect('/drama');
  }
})

router.get('/delete/:id', function(req, res){
  //res.send(`/delete req.params.id: ${req.params.id}`);
  model.deleteDrama(req.params.id, ()=>res.redirect('/drama'))
})

module.exports = router;