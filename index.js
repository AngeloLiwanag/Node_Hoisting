// ------------------ Example 1 --------------------
// console.log(hello);                                   
// var hello = 'world'; 
// ------------------- Answer ----------------------
// undefined




// ------------------ Example 2 --------------------
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// ------------------- Answer ----------------------
// var needle = 'haysatck'; gets hoisted to the top
// function test() gets hoisted to the top
// test(); runs
// output magnet




// ------------------ Example 3 --------------------
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// ------------------- Answer ----------------------
// var brendan gets hoisted to the top
// function print() doesnt run
// then brendan gets console.loged 




// ------------------ Example 4--------------------
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// ------------------- Answer ----------------------
// var food gets hoisted to the top
// console.log(food); runs
// function eat(); gets hoisted to the top
// eat(); runs
// var food gets hoisted to the top
// food updates to 'half-chicken'
// then gets console.log




// ------------------ Example 5 --------------------
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(mean);
// ------------------- Answer ----------------------
// mean(); makes an error because its not a function
// console.log(food) makes an error because its not with in the scope
// var mean console.logs chicken and fish
// console.log(food) makes an error because its not with in the scope




// ------------------ Example 6 --------------------
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// ------------------- Answer ----------------------
// undefined
// var genre hoiset to top
// function rewind() hoisted
// rewind(); runs rock and r&b
// console.log(genre)




// ------------------ Example 7 --------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// ------------------- Answer ----------------------
// output san jose, seattle, burbank, san jose



// ------------------ Example 8 --------------------
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// ------------------- Answer ----------------------
// error because const type can not be changed.
