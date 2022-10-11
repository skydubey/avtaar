let input = document.getElementById('nameid');
let imgChange = document.getElementById('imgchange');


function imageChanger() {
    imgChange.setAttribute(`src`,`https://joeschmoe.io/api/v1/${input.value}`);
}

