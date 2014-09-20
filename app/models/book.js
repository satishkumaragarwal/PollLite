// app/models/book.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var bookSchema = mongoose.Schema({
	"publisher_id" : String,
        "subject_ids" : [String],
        "title" : String,
        "physical_description_text" : String,
        "publisher_name" : String,
        "awards_text" : String,
        "edition_info" : String,
        "dewey_decimal" : String,
        "lcc_number" : String,
        "urls_text" : String,
        "publisher_text" : String,
        "notes" : String,
        "dewey_normal" : String,
        "book_id" : String,
        "language" : String,
        "title_long" : String,
        "author_data" : [],
        "isbn10" : String,
        "isbn13" : String,
        "summary" : String,
        "title_latin" : String,
        "marc_enc_level" : String,
});


//Create a model for books and expose it 
module.exports = mongoose.model('Books', bookSchema);