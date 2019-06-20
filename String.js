1.建立字串
var str = 'ABC';
var str = new String('ABC');

var str = '';
var str = new String();

2.屬性--length
.html
<input type="email" id="email">
.js
var email = document.getElementById('email');
if(email.value.length > 0){...}

3.方法--字串拆分
charAt(index)
var fullName = 'Silvia Huang';
fullName.charAt(1);	=====> i
fullName.charAt(4);	=====> i

indexOf(string) | lastIndexOf()
fullName.indexOf('S');	=====> 0

var language = 'JavaScript';
language.indexOf('Script'); =====> 4
language.indexOf('script'); =====> -1

slice(index x[,int count]) 從字串中取出子字串
language.slice(4); =====> Script
language.slice(0,4); =====> Java

substr(index x, index y)

4.方法--字串操作
concat()
var address = '2215 NE 68th St';
address.concat(' Seattle,', ' WA', ' 98115', ' USA');
=====> "2215 NE 68th St Seattle, WA 98115 USA"
address 
=====> "2215 NE 68th St"

toLowerCase() | toUpperCase()
var language = 'JavaScript';
language.indexOf('Script'); =====> 4
language.indexOf('script'); =====> -1
language.toLowerCase().indexOf('script'); =====> 4

trim() 刪除字串兩端的空格

replace(String str1,String str2) 將str2取代str1
var newString = 字串.replace('A1005, ','') ;


