var mongoose = require('mongoose');
//mongoose.connect('localhost:27017/cart', { useNewUrlParser: true });

mongoose.connect('mongodb+srv://admin:mongopass@cluster0.oye87.azure.mongodb.net/cart?retryWrites=true&w=majority', 
{ useNewUrlParser: true });

var Product = require('../../models/product');
const { exists } = require('../product');
var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'Gothic is an action role-playing game franchise, created and owned by Piranha Bytes.',
    price: 10

}),

new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    title: 'Minecraft',
    description: 'Minecraft is a sandbox video game developed by Mojang Studios.',
    price: 15

}),

new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/911Zw+jW5CL.jpg',
    title: 'Roblox Game',
    description: 'Roblox is an online game platform and game creation system that allows users to program games and play games created by other users.',
    price: 20

}),

new Product({
    imagePath: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/de3626a4-96d8-11e6-803b-00163ed833e7/980380181/terasology-screenshot.jpg',
    title: 'Terasology Game',
    description: 'Terasology is a game that pays ample tribute to Minecraft in initial look and origin, but stakes out its own niche by adopting the NPC-helper.',
    price: 12

}),

new Product({
    imagePath: 'https://media.contentapi.ea.com/content/dam/gin/common/packart/nfs-xbox-one-packart.jpg',
    title: 'Need for Speed Game',
    description: 'Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games.',
    price: 25

}),

new Product({
    imagePath: 'https://www.gamesreviews.com/wp-content/uploads/2019/10/sc5rht.jpg',
    title: 'Asphalt 9: Legends',
    description: 'Asphalt 9: Legends is a racing video game developed by Gameloft Barcelona and published by Gameloft.',
    price: 30

}),

new Product({
    imagePath: 'https://cdn.arstechnica.net/wp-content/uploads/2015/02/lol.png',
    title: 'League of Legends',
    description: 'League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS.',
    price: 40

})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
} 

function exit() {
mongoose.disconnect();
}
