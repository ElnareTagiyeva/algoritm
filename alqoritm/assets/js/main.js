var num = prompt("Ədəd daxil edin:");
var newNum = num;
var əks = 0;
while (num > 0) {
    var teklik = num % 10;
    num = (num - teklik) / 10;
    əks = əks * 10 + teklik;
}
if (əks == newNum) {
    alert("palindromdur");
}
else {
    alert("palindrom deyil");
}