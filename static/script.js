$(function() {
    var liste = [];
    function pick_a_winner() {
        var choice = Math.floor(Math.random() * liste.length + 1);
        console.log(choice);
        return choice;
    }
    $('#button').click(function(ev) {
            var compteur = false;
            console.log(compteur);
            if ( !compteur ) {
            $('ul li').removeClass('red');
            $('ul li:nth-child('+ hasard()  + ')').addClass('red').text('WINNER');
            compteur = true;
            } else {
                 ev.preventDefault();
            }
    });

    function add_list() {
        var add = $('#add');
        var liste_appended = $('#ul-liste');
        add.click(function() {
            //TODO: Vérifier la variable jquery ci-dessous
            var value = $('#liste').val();
            $('#ul-liste').append("<li class='appended'>" + value +"</li>");
            $('.appended').append('<span class="remove"> Remove </span>');
            $('.remove').click(function(ev) {
               $(ev.target).parent().remove();
            });
        });
    }
    
    add_list();
    pick_a_winner();
});
