// app/models/bookGoogle.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var bookGSchema = mongoose.Schema({
"kind": String,
   "id": String,
   "etag": String,
   "selfLink": String,
   "volumeInfo": {
    "title": String,
    "subtitle": String,
    "authors": [String],
    "publisher": String,
    "publishedDate": String,
    "description": String,
    "industryIdentifiers": [
     {
      "type": String,
      "identifier": String
     },
     {
      "type": String,
      "identifier": String
     }
    ],
    "readingModes": {
     "text": Boolean,
     "image": Boolean
    },
    "pageCount": Number,
    "printType": String,
    "categories": [String],
    "averageRating": Number,
    "ratingsCount": Number,
    "contentVersion": String,
    "imageLinks": {
     "smallThumbnail": String,
     "thumbnail": String
    },
    "language": String,
    "previewLink": String,
    "infoLink": String,
    "canonicalVolumeLink": String
   },
   "saleInfo": {
    "country": String,
    "saleability": String,
    "isEbook": Boolean,
    "listPrice": {
     "amount": Number,
     "currencyCode": String
    },
    "retailPrice": {
     "amount": Number,
     "currencyCode": String
    },
    "buyLink": String,
    "offers": [
     {
      "finskyOfferType": Number,
      "listPrice": {
       "amountInMicros": Number,
       "currencyCode": String
      },
      "retailPrice": {
       "amountInMicros": Number,
       "currencyCode": String
      }
     }
    ]
   },
   "accessInfo": {
    "country": String,
    "viewability": String,
    "embeddable": Boolean,
    "publicDomain": Boolean,
    "textToSpeechPermission": String,
    "epub": {
     "isAvailable": Boolean,
     "acsTokenLink": String
    },
    "pdf": {
     "isAvailable": Boolean
    },
    "webReaderLink": String,
    "accessViewStatus": String,
    "quoteSharingAllowed": Boolean
   },
   "searchInfo": {
    "textSnippet": String
   }
  });
  
//Create a model for books from Google and expose it 
module.exports = mongoose.model('GoogleBooks', bookGSchema);