const express = require ("express")

const app = express()

app.use("/student", require("./routes/Student.routes"))

  app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });

 