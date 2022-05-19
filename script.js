var urlNinja = 'https://poe.ninja/api/data/currencyoverview?league=Sentinel&type=Currency';
$(function() {
    $("#exalt").numeric({ decimal : ".",  negative : false, scale: 3 });
    $("#exalt").on('change', ()=>{
        $.ajax({
            url: urlNinja,
            xhrFields: {
               withCredentials: true
            }
         }).done(function( data ) {
            if ( console && console.log ) {
              console.log( "Sample of data:", data );
            }
          });;
    });
});