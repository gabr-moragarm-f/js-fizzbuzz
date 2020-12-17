var lista = document.getElementById('lista');

var printValue;

for (var i = 1; i <= 100; i++) {
  printValue = '';

  console.log(i);
  
  if (i % 3 !== 0 && i % 5 !== 0) {
    printValue = i;
  }

  if (i % 3 === 0) {
    printValue = 'Fizz';
  }

  if (i % 5 === 0) {
    printValue += 'Buzz';
  }

  lista.innerHTML += '<div>' + printValue + '</div>';


  console.log(printValue);
}
