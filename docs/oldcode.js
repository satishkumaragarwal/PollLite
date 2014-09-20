app.get("/Books/:id", function(request, response){
        console.log(request.url);
        MongoClient.connect("mongodb://satish:1234@ds047438.mongolab.com:47438/mongoshare", function(err, db) {
                var collection = db.collection('books');
                console.log(request.params.id);
                collection.findOne({isbn10:request.params.id}, function(err, item){
                        if(item){
                                console.log("in if");
                                response.send(item);
                                //console.log(item);
                        }
                        else{
                        client.get("http://isbndb.com/api/v2/json/BAX9VPX1/book/"+request.params.id, function(rsdata, restRes) {
                                        console.log("in else");
                                        var obj = JSON.parse(rsdata);
                                        console.log(obj.data[0]);
                                        collection.insert(obj.data[0], function(err,inserted){
                                                if(err){
                                                        console.log(err);
                                                }
                                        });
                                        console.log("Reached");
                                        response.send(obj.data[0]);
                                        //console.log(response);
                                });
                                 //console.log(result);
                                //response.end();
                        }
                });
        });
});
