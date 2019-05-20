function gen(n) {
    return new Array((n * 1024) + 1).join('a')
}
function sessionStorageSize(){
    event.stopPropagation();

    // Determine size of localStorage if it's not set
    if (!sessionStorage.getItem('size')) {
        var i = 0;
        try {
            // Test up to 10 MB
            for (i = 0; i <= 10000; i += 250) {
                sessionStorage.setItem('test', gen(i));
                console.log(gen(i).length);
            }
        } catch (e) {
            sessionStorage.removeItem('test');
            sessionStorage.setItem('size', i ? i - 250 : 0);
            document.querySelector('#sssize').innerHTML = (i - 250)/1000 + 'Mb';
        }
    }
}

function localStorageSize(){
    event.stopPropagation();

    // Determine size of localStorage if it's not set
    if (!localStorage.getItem('size')) {
        var i = 0;
        try {
            // Test up to 10 MB
            for (i = 0; i <= 10000; i += 250) {
                localStorage.setItem('test', gen(i));
                console.log(gen(i).length);
            }
        } catch (e) {
            localStorage.removeItem('test');
            localStorage.setItem('size', i ? i - 250 : 0);
            document.querySelector('#lssize').innerHTML = (i - 250)/1000 + 'Mb'; 
        }
    }
}

function clearSessionStorage (){
    event.stopPropagation();
    sessionStorage.clear();
    document.querySelector('#sssize').innerHTML = 'Size';                  
}

function clearLocalStorage (){
    event.stopPropagation();
    localStorage.clear();
    document.querySelector('#lssize').innerHTML = 'Size';                  
            
}

let title = document.getElementsByClassName('section');

document.body.addEventListener('click', function(event){
    let target = event.target;
    let articles = document.getElementsByClassName('section');
    if (target.tagName == 'ARTICLE') {
        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.remove('active');
        }
        target.classList.add('active');                    
    };
    if (target.tagName == 'SPAN') {
        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.remove('active');
        }
        target.closest('.section').classList.add('active');
    } 
    if (target.tagName !== 'SPAN' && target.tagName !== 'ARTICLE') {
        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.remove('active');
        }
    }
});

