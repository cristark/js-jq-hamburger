// Istruzione principale per assicurarci che il codice js venga caricato solo a documento pronto
$(document).ready(function(){

    // Creo variabili per semplificare codice
    var btnShow = $('.header-right > a');
    var btnHamb = $('.hamburger-menu');
    var btnClose = $('.hamburger-menu .close');

    /* // Funzione per mostrare menù
    btnShow.click(function(){
        btnHamb.addClass('active');
    });

    // Funzione per nascondere menù
    btnClose.click(function(){
        btnHamb.removeClass('active');
    }); */
    
    // Alternativa con dissolvenza
    btnShow.click(function(){
        btnHamb.fadeIn();
    });

    btnClose.click(function(){
        btnHamb.fadeOut();
    });

});