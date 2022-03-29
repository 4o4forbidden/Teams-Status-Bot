var I;
function alternateStatus(state){
    if(state == 'Play' || state == 0){
        console.error('S T A R T I N G . . .');
        I = setInterval(()=>{
            r = Math.floor(Math.random(1)*6);
            console.log(r);
            $('.user-picture').click()
            setTimeout(()=>{
                $('.profile-set-presence-button').click()
            },500)
            setTimeout(()=>{
                $('.app-default-menu-ul .menuitem:eq('+r+') button').click()
            },800)
        },3160)
    }else if(state == 'Pause'){
        console.error('P A U S E D . . .')
        clearInterval(I);
    }
}
$('li.spacer').html('<button class="btn-0 app-bar-link app-bar-button">🗲</button>')

$('.btn-0').click(()=>{
    alternateStatus('Play');
})