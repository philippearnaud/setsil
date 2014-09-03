$(function() {
    var liste = [];
    function pick_a_winner() {
        var choice = Math.floor(Math.random() * liste.length + 1);
        console.log(choice);
        return choice;
    }
    
var compteur = false;
    $('#button').click(function(ev) {
            console.log(compteur);
            if ( !compteur ) {
            $('ul li').removeClass('red');
            $('ul li:nth-child('+ pick_a_winner()  + ')').addClass('red').text('WINNER');
            compteur = true;
            } else {
                 ev.preventDefault();
            }
    });

    function add_list() {
        var add = $('#add');
        var liste_appended = $('#ul-liste');
        add.click(function(ev) {
            var value = $('#liste').val();
            liste.push(value);
            var li = $('<li/>', {class: 'appended'}).text(value);
            li.append('<span class="remove"> Remove </span>');
            $('#ul-liste').append(li);
            $('.remove').click(function(ev) {
               $(ev.target).parent().remove();
            });
        });
    }
    
    add_list();
    pick_a_winner();
});
