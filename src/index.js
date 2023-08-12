import app from "./app.js"
import { PORT } from "./config.js"


app.set('port', PORT)

app.listen(app.get('port'))
console.log(`server se esta escuchando en el puerto ${PORT}`)