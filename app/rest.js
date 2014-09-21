var GoogleBooks = require('./models/bookGoogle.js');
var Client = require('node-rest-client').Client;
var client = new Client();


module.exports = function(app){
    //To get all books
    app.get('/api/books',function(req, res) {
		GoogleBooks.find(function(err, books) {
			if (err){
				res.send(err);
            }
			res.json(books);
		});
	});
	
	//To get books by ID
	app.get('/api/books/:book_id', function(req, res) {
		GoogleBooks.findById(req.params.book_id, function(err, book) {
			if (err){
				res.send(err);
			}
			res.json(book);
		});
	});
	
	//To get books by ISBN
	app.get('/api/isbn/:book_isbn', function(req, res) {
		GoogleBooks.findOne({id : req.params.book_isbn}, function(err, book) {
			if (book){
				var arr = [];
				arr.push(book);
				res.json(arr);
			}
			
			else {
			        client.get("https://www.googleapis.com/books/v1/volumes?q="+req.params.book_isbn, function(rsdata, restRes) {
                       	var temp = JSON.parse(rsdata);
                      	res.send(temp.items);
                    });
			}
			
		});
	});
	
	app.post('/api/books', function(req,res){
		
		GoogleBooks.findOne({id : req.body.id}, function(err, book) {
			if (book){
				res.json({ message: 'Book exists!' });
			}
			else{
				var newBook = new GoogleBooks(req.body);
				newBook.save(function(err, project, numAffected) {
					if (err)
						res.send(err);
					res.json({ message: 'Book added!' });
				});
			}
		});
	});
}