const express = require('express')
const app = express()
const port = 550
const path = require('path')
const router = require('./routes/blog')
app.use(router)
const exphbs = require('express-handlebars')
app.engine('handlebars',exphbs.engine({
    extname:".handlebars",
    defaultLayout:'main'
}))
app.set('view engine', 'handlebars')
app.use("/",require(path.join(__dirname,"./routes/blog.js")))
app.use(express.static(path.join(__dirname,"./static")))
app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`);
})