var urlNinja = 'https://poe.ninja/api/data/currencyoverview?league=Sentinel&type=Currency';
$(function() {
    foo = $.cookie("scurwmdaAzxctilds");
    if (foo){
        $('#rate').val(foo);
    }
    $("#exalt").numeric({ decimal : ".",  negative : false, scale: 3 });
    $("#rate").numeric({ decimal : ".",  negative : false, scale: 3 });
    $("#exalt").on('change', ()=>{
        var res = 0;
        var rate = $('#rate').val();
        var exalt = $('#exalt').val();
        res = rate * exalt;
        $('#chaos').val(res);
    });
    $('#rate').on('change', ()=>{
        var rate =  $('#rate').val();
        $.cookie('scurwmdaAzxctilds', rate);
    })
});