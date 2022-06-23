let menuBtn = document.getElementById('menuimg');
let crossBtn = document.getElementById('cross');

function clickBtn() {
    menuBtn.style.display = 'none';
    crossBtn.style.display = 'flex'; 
 let dropDown = document.getElementById('list');
 dropDown.style.display = 'block';
 dropDown.style.color = 'red';
 dropDown.style.margin = '10px';
    }
 
function unclickBtn() {
    crossBtn.style.display = 'none';
    menuBtn.style.display = 'flex';
    let dropDownn = document.getElementById('list');
    dropDownn.style.display = 'none';
}

menuBtn.addEventListener('click',clickBtn);

crossBtn.addEventListener('click',unclickBtn);