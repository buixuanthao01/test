import Product from '../model/book';


export const create = (req,res)=>{
    const product = new Product(req.body);
    product.save((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Add product failed"
            })
        }
        res.json(data);
    })
}
export const productById = (req, res, next, id) =>{
    Product.findById(id).exec((err,product) =>{
        if(err || !product){
            res.status(400).json({
                error:"Không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}
export const read = (req,res) =>{
    return res.json(req.product)
}
export const list = (req,res)=>{
    Product.find((err,data)=>{
        if(err){
            error:"Không tìm thấy sản phẩm"
        }
        res.json({data})
    })
}


