const http = require("http");

const handler = (req, res) => {

if(req.url === "/"){
    res.end("Hello Wolrd!");
}

const [_, op, num1, num2, num3] = req.url.split("/");

  let result;

  switch (op) {
    case "sobiranje":
        result = +num1 + +num2;
        res.end(`${result}`);
        break;
    case "odzemanje":
        result = +num1 - +num2;
        res.end(`${result}`);
        break;
    case "mnozenje":
        result = +num1 * +num2;
        res.end(`${result}`);
        break;
    case "delenje":
        if(num2 == 0){
            res.end("Ne moze da se deli so 0 --> Probajte drug broj");
        }else{
            result = +num1 / +num2;
            res.end(`${result}`);
        }       
        break;
    case "average":
        result = (+num1 + +num2 + +num3) / 3;
        res.end(`${result}`);
    default:
      res.end("Ne postoi takva operacija");
      break;
  }
}

const myServer = http.createServer(handler);
myServer.listen(8080, ()=>console.log("Server started at port 8080!"));