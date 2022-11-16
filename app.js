const express = require('express')


const port = 9000

const app = express()


app.get("/persona", (peticion, respuesta) => {
    respuesta.json({
        name: "Jesus",
        age: 32,
        country: "Mexico"
    })
})

app.post("/companies", (peticion, respuesta) => {
    respuesta.json([
        "Google",
        "Facebook",
        "Amazon"
    ])
})

app.patch("/hobbies", (peticion, respuesta) => {
    respuesta.json([
        "Watch youtube videos",
        "Rode on bicicle",
        "Coding"
    ])
})


app.listen(port, () => {
    console.log(`server started at port ${port}`)
})