var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){kittens.push(name); return kittens}
function destructivelyPrependKitten(name){kittens.unshift(name); return kittens}
function destructivelyRemoveLastKitten(){kittens.pop("Garfield"); return kittens}
function destructivelyRemoveFirstKitten(){kittens.shift("Milo"); return kittens}
function appendKitten(name){var newKittens = [...kittens,name];return newKittens}
function prependKitten(name) {var newKittens = [name, ...kittens];return newKittens;}
function removeLastKitten(){var newKittens = [kittens.slice(0,kittens.length-1)]; return newKittens}