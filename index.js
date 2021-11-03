const express = require('express')
const cookieSession = require('cookie-session')
const authRouter = require('./routes/admin/auth')
const adminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products')
const cartsRouter = require('./routes/carts')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
)
app.use(authRouter)
app.use(productsRouter)
app.use(adminProductsRouter)
app.use(cartsRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...')
})
