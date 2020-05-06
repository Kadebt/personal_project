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
    
        req.session.cart = item[0]

        if(req.session.cart){ 
            console.log(req.session)
            res.status(200).send(req.session.cart)
        } else {
            res.status(404).send('cart empty')
        }

    },

    checkCart: (req, res) => {
        if(req.session.cart){
            res.status(200).send(req.session.cart)
        } else {
            res.status(404).send('cart empty')
        }
    }
}