var math = {
    add: function(a, b){
        return a+b;
    },
    subtract: (a, b) => a-b  // 화살표 함수(중괄호가 없으면 return문으로 처리)
}

// console.log(math.add(3, 4))
// console.log(math.subtract(3,4))

module.exports = math;
module.exports.multiply = (a,b)=>a*b;