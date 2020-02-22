$(document).ready(function() {
    $('#error-message').hide();

    var url = 'https://peterpoliwoda.me:4001/';
    $.get(url + 'number-of-guests', function(data, status) {
        console.log(`${data} and status is ${status}`);
        $('#rsvps-confirmed').html(data);
    }).catch(function() {
        console.error();
    });

    function validateForm() {
        if ($('#guest_name').val()
            && $('#guest_email').val()
            && $('#guest_email').val().indexOf('@') > 1
            && $('#guest_phone').val()
            && $('#guest_numbers').val()) {
            return true;
        } else {
            return false;
        }
    }

    $('#send-rsvp').click(function() {

        $('#error-message').hide();

        if (validateForm()) {
            var data = {
                guest_name: $('#guest_name').val(),
                guest_phone: $('#guest_phone').val(),
                guest_email: $('#guest_email').val(),
                guest_numbers: $('#guest_numbers').val(),
                guest_optional_note: $('#guest_optional_note').val(),
                guest_attending: $('input[type=radio][name=guest_attending]:checked').val(),
            };

            $.post(url + 'rsvp/', data, function(data, status) {
                console.log(`${data} and status is ${status}`);
                $('#rsvp_form').hide();
                $('#send-rsvp').hide();
                $('#error-message').removeClass('alert-danger').addClass('alert-success');
                $('#error-message').html('Message sent. Thank you!');
                $('#error-message').show();
            }).catch(function() {
                $('#error-message').html('Ocorreu um erro ao enviar email. '
                    + 'Tente novamente mais tarde ou informe-nos de outra maneira.\n' +
                    + 'Something went wrong with sending email.'
                    + ' Please try again later or let us know in another way.');
                $('#error-message').show();
            });
        } else {
            $('#error-message')
                .html('Por favor, preencha todos os detalhes necessários. \n'
                    + 'Please fill all required details.');
            $('#error-message').show();
        }
    });
});
