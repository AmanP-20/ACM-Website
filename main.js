let content = document.getElementById('text');
let sabd = content.innerHTML;
content.innerHTML = '';

let speed=6;
for(let i=0;i<sabd.length;i++)
{
    setTimeout(function delay(){
        content.innerHTML+=sabd.charAt(i);
    },i*speed);
}

