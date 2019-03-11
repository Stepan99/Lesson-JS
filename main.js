/*prompt('Введіть своє імя') ;
alert ('Чи правильно його ввели???');*/


/*var developer;
developer = 'Stepan';
console.log(developer);
var user;
user=developer;
console.log(user);*/


/*var year = prompt('Який зараз рік???');
if (year == 2019)
{
 alert ('Ви молодці');
}
else
{
 alert  ('Ви з верховини');
}*/

/*var number = prompt('Enter number');
if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else {
    alert('0');
}*/


var name = prompt('Enter your login');
if (name === 'admin') {
    var password = prompt('Enter your password');
    if ('password' === password) {
        console.log('Welcome home');
    } else if (password === null) {
        console.log('Canceled');
    } else {

        console.log('Wrong password');
    }

} else if (name === null) {
    console.log('repeat pls');
} else {
    console.log('your user');
}


