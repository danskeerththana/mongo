var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki-database";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'danskeerththana', address: 'ukkulamkulam vavuniya'},
    { name: 'mayoori', address: 'velanai jaffna'},
    { name: 'thadshajini', address: 'nelliyadi jaffna'},
    { name: 'janarthanan', address: 'velanai jaffna'},
    { name: 'darshan', address: 'valvettithural'},
    { name: 'ramanakarasarma', address: 'nelliyadi jaffna'},
    { name: 'thaneeshan', address: 'velanai jaffna'},
    { name: 'abirami', address: 'sulipuram'},
    { name: 'janusha', address: 'elalai jaffna'},
    { name: 'minerva', address: 'jaffna'},
    { name: 'dilani', address: 'karainagar'},
    { name: 'shama', address: 'jaffna'},
    { name: 'shangeeran', address: 'shavakacheri jaffna'},
    { name: 'thuvarakan', address: 'jaffna'},
    { name: 'jakshan', address: 'jaffna'}
  ];
  db.collection("customers").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
