let fruits = []

const addFruit = (name, isFavorite) =>{
    let fruit = {
        name:name,
        favourite:isFavorite
    };

    fruits.push(fruit)

}
const showFruits = () =>{
    for (let i=0; i<fruits.length; i++){
        let fruit = fruits[i]
        let isFav = fruit.favourite ? "(Favourite)" : "";
        console.log("-----Fruits-----");
        console.log(`${i+1} , ${fruit.name} ${isFav}`);
    }
}

const showFavourite = () =>{
    console.log("-----Favourite Fruits-----")
    fruits.forEach(function(fruit, index) {
        if (fruit.favourite) {
            console.log(`${index + 1} , ${fruit.name}`);
        }
    })

}

addFruit("Apple", true);
addFruit("Banana", false);
addFruit("Mango", true);

showFruits();
showFavourite();