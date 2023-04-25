function printHelloWorld() {
    document.write("Hello World<br>");
    document.write("Hello World<br>");
    document.write("Hello World<br>");
  }
  
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    printHelloWorld();
  });
  