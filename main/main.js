module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxnum()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(arr) {
    // Write your code here
    this.arr = arr;
  }

  minimum() {
    // Write your code here
    var i;
    var min = this.arr[0];
    for(i = 1; i < this.arr.length; i++){
    	if(min > this.arr[i])
    		min = this.arr[i];
    }
    return min;
  }

  maxnum() {

  	var j;
  	var max = this.arr[0];
  	for(j = 1; j < this.arr.length; j++){
    	if(max < this.arr[j])
    		max = this.arr[j];
    }
    return max;
  }

  count() {
  	return this.arr.length;
  }

  average() {
  	var k;
  	var ave = 0.0;
  	for(k = 0; k < this.arr.length; k++){
    	ave = ave + this.arr[k]
    }
    ave = (ave / this.arr.length).toFixed(2);

    return ave;

  }
  
}
