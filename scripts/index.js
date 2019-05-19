function gen(n) {
    return new Array((n * 1024) + 1).join('a')
}
function sessionStorageSize(){
    event.stopPropagation();
    // var sizeButton = document.querySelector('#sssize');        
    //         var ss = document.querySelector('.contentss'); 
    //         ss.removeChild(sizeButton); 
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
            let el = document.getElementById('sizeSS');    
            el.style.display = 'inline-block';    
            el.innerHTML = 'current size : ' +( i ? (i - 250)/1000 + 'Mb' : 0 + 'Mb' );
                   
        }
    }
}

function localStorageSize(){
    event.stopPropagation();
    // var sizeButton = document.querySelector('#lssize');        
    //         var ss = document.querySelector('.contentls'); 
    //         ss.removeChild(sizeButton); 
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
            let el = document.getElementById('sizeLS');    
            el.style.display = 'inline-block';    
            el.innerHTML = 'current size : ' +( i ? (i - 250)/1000 + 'Mb' : 0 + 'Mb' );
                   
        }
    }
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

