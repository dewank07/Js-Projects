let count = 0 ;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment(){
   count = count + 1;
   countEl.innerText = count;
console.log(count);
}
let mem = "";
function save()
{
    mem = mem + count + "-";
   saveEl.innerText = mem;
   countEl.innerText = 0;
   count = 0 ;

}