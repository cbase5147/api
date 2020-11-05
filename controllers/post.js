const Post = require('../models/post')

exports.getPosts = (req, res) => {
    // below is for get request 
    // res.json({
    //     posts: [{title: 'First post'},{title: 'Second post'}]
    // });

    const posts = Post.find().select("_id title body" )
    .then(posts => {
        res.json({ posts});
    })
    .catch(err => console.log(err))
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("CREATE POST: ", req.body)

    // post.save((err, result) => {
        // below condition is check from express-validors
        // if(err) {
        //     return res.status(400).json({
        //         error: err
        //     })
        // }

        // res.status(200).json({
        //     post: result
        // })
    // })

    post.save().then(result => {
        res.json({
            post: result
        })
    })
}
