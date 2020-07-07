const Products = require('../models/Products');

// exports.getPosts = async (req, res) => {

//     const pagination =  await req.query.pagination ? parseInt(req.query.pagination) : 5;
//     const page =  await req.query.page ? parseInt(req.query.page) : 1;
//     try {
//        await Products.find({ "stock": { $ne: "0" } }).sort({ price: 1 })
//         .skip((page - 1) * pagination)
//         .limit(pagination)
//         .then(posts => res.json(posts))
//         .catch(err => res.status(400).json('Error:' + err)); 
//     } catch (error) {
//         console.log(error);
//     }

// };

exports.getPosts = async (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const totalDocs = await Products.countDocuments({});

    const results = {};

    results.totalDocuments = {
        total: totalDocs
    };
    
    if(startIndex > 0) {
    
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    
    }
    
    if(endIndex < totalDocs) {
           
        results.next = {
            page: page + 1,
            limit: limit
        };
    
    }
    // if query params arent there, just return full array
    // results.data = (limit && page) ? model.slice(startIndex, endIndex) : model;

            try {
                 await Products.find()
                .skip(startIndex)
                .limit(limit)
                .then(posts => res.json({metaData: results, payload: posts}))
                .catch(err => res.status(400).json('Error:' + err)); 
            } catch (error) {
                console.log(error);
            }
    

};



exports.getSingleProduct = async (req, res) => {

    try {
    await Products.find({id: req.params.slug})
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Err ' + err))
    } catch (error) {
        console.log(error);
    }
     
  };
