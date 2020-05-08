module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        console.log(id)
        
        const products = await db.get_products(id)

        res.status(200).send(products)
    },
    getItem: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        const item = await db.get_item(id)
        res.status(200).send(item)
    },
    addToCart: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params 

        const item = await db.get_item(id)
        // console.log('item', item) 
       

        if(req.session.cart){ 
            req.session.cart = [...req.session.cart, item[0]]
        
            res.status(200).send(req.session.cart)
        } else {
            req.session.cart = item
            res.status(404).send('cart empty')
        }
        

    },

    checkCart: (req, res) => {
        if(req.session.cart){
            res.status(200).send(req.session.cart)
        } else {
            res.status(404).send('cart empty')
        }
    },

    deleteCart: (req, res) => {
        delete req.session.cart
        res.sendStatus(200)
    },

    addQuantity: (req, res) => {
        let { id } = req.params
        
            for(let i = 0; i < req.session.cart.length; i++){
                let newPrice = req.session.cart[i].price
                if(req.session.cart[i].id === id){
                    return newPrice + newPrice
                }
                console.log(newPrice)
                return newPrice
                
            }
            res.status(200).send(newPrice)
    
    },
    checkout: async (req, res) => {
        const { product, token } = req.body


       
        const charge = await stripe.charges.create(
            {amount: product.price * 100,
             currency: 'usd',
             receipt_email: token.email,
             description: 'Purchased',
             shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
             }
            }
        )
       if(console.log("charge", {charge})){
      return res.status('success').send({status})}
      else {
          res.status('Failed').send(status)
      }
    },


    getReviews: async (req, res) => {
        const db = req.app.get('db')
        const reviews = await db.get_reviews()

        res.status(200).send(reviews)
    },

    postReviews: async (req, res) => {
        const db = req.app.get('db')
        const {email, content} = req.body
        
        console.log(req.session)

        await db.add_review([email, content])

        const reviews = await db.get_reviews()

        res.status(200).send(reviews)
    },

    editReview: async (req, res) => {
        const db = db.app.get('db')

        const { id } = req.params
        const { content } = req.body

        await db.edit_review([content, id])
        const reviews = await db.get_posts()

        res.status(200).send(reviews)
    },

    deleteReview: async (req, res) => {
        const db = db.app.get('db')

        const {review_id} = req.params

        await db.delete_review([review_id])

        const reviews = await db.get_reviews()
        res.status(200).send(reviews)
    }
}
