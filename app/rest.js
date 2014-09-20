var Books = require('./models/book.js');
var Client = require('node-rest-client').Client;
var client = new Client();


module.exports = function(app){
    //To get all books
    app.get('/api/books',function(req, res) {
		Books.find(function(err, books) {
			if (err){
				res.send(err);
            }
			res.json(books);
		});
	});
	
	//To get books by ID
	app.get('/api/books/:book_id', function(req, res) {
		Books.findById(req.params.book_id, function(err, book) {
			if (err){
				res.send(err);
			}
			res.json(book);
		});
	});
	
	//To get books by ISBN
	app.get('/api/isbn/:book_isbn', function(req, res) {
		Books.findOne({isbn10 : req.params.book_isbn}, function(err, book) {
			if (book){
				var arr = [];
				arr.push(book);
				res.json(arr);
			}
			
			else {
			        client.get("http://isbndb.com/api/v2/json/BAX9VPX1/book/"+req.params.book_isbn, function(rsdata, restRes) {
                        var obj = new Books(); 
                        var temp = JSON.parse(rsdata);
                        obj = temp.data[0];
                        obj.save(function(err){
                            if(err){
                                    console.log(err);
                            }
                            
                            res.send(temp.data[0]);
                            
                        });
                    });
			}
			
		});
	});
}