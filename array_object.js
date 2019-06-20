//在JS建立一個陣列
var java011 = new Array('Anan','Stella','Annie','Peter','Tina','Jason');
var java011 = ['Anan','Stella','Annie','Peter','Tina','Jason'];
var java011 = [];
var java011 = new Array();

for(var i = 0; i < java011.length; i++){
	// use java011[i]
}

for(var key in java011){
    // use java011[key]
}

// =================
//在JS建立一個物件
//1
var boy = new Object();
boy.name = 'Anan';
boy.age = 13;

console.log(boy.name);

//2
var boy = {};
boy.name = 'Anan';
boy.age = 13;

console.log(boy.name);

//3
var boy = {name:'Anan',age:13};

// =================
//JSON: Array和Object的組合

//把陣列放進物件中
var temp = {[],[],[],[]};
var friends = {java011:[
				  {name:'Anan',age:13},
				  {name:'Stella',age:23},
				  {name:'Tina',age:18},
				  {name:'Annie',age:25},
			   ]
			  };
	friends: 是一個物件
	friends.java011: 是一個陣列
	friends.java011[0]: 是一個物件
	friends.java011[0].name --->  Anan


//把物件放進陣列中
var temp = [{},{},{},{},{}];
var friends = [
				{name:'Anan',age:13},
				{name:'Stella',age:23},
				{name:'Tina',age:18},
				{name:'Annie',age:25},
			];

	friends: 是一個陣列
	friends[0]: 是一個物件
	friends[0].name --->  Anan

//真正的JSON格式的檔案
{}
[]
""
:
,

{"java011":[
		  {"name":"Anan","age":13},
		  {"name":"Stella","age":23},
		  {"name":"Tina","age":18},
		  {"name":"Annie","age":25},
		]
}

