$(document).ready(function() {
    $('#error-message').hide();

    function validateForm() {
        if ($('#guest_name').val()
            && $('#guest_email').val()
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
                guest_email: $('#guest_email').val(),
                guest_numbers: $('#guest_numbers').val(),
                guest_optional_note: $('#guest_optional_note').val(),
                guest_attending: $('input[type=radio][name=guest_attending]:checked').val(),
            };

            var url = 'https://peterpoliwoda.me:4001/rsvp/';
            $.post(url, data, function(data, status) {
                console.log(`${data} and status is ${status}`);
                $('#rsvp_form').hide();
                $('#send-rsvp').hide();
                $('#error-message').removeClass('alert-danger').addClass('alert-success');
                $('#error-message').html('Message sent. Thank you!');
                $('#error-message').show();
            }).catch(function() {
                $('#error-message').html('Something went wrong with sending email. Please try again later or let us know in another way.');
                $('#error-message').show();
            });
        } else {
            $('#error-message').html('Please fill all required details.');
            $('#error-message').show();
        }
    });
});