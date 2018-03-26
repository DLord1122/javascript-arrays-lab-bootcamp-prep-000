var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){kittens.push(name); return kittens}
function destructivelyPrependKitten(name){kittens.unshift(name); return kittens}
function destructivelyRemoveLastKitten(){kittens.pop("Garfield"); return kittens}
function destructivelyRemoveFirstKitten(){kittens.unshift("Milo"); return kittens}