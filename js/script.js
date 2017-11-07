/**
 * Created by Mei on 06/11/2017.
 */
$(document).ready(function () {

 /*label focus*/
    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    /*Form Validation*/
    $('#login-form').parsley({});

        $('#login-form').parsley().on('field:validated', function() {
            var ok = $('.parsley-error').length === 0;
            if(!ok) { 
                $('.message-tab').removeClass('is-hidden');
                $('label').addClass('label-error');
                    }
            else if (ok){
                $('.message-tab').addClass('is-hidden');
                $('label').removeClass('label-error');
            }

        })
        .on('form:submit', function() {
            $('#login-form').css('display' , 'none');
            $('#gif').css('visibility', 'visible');
            return true;
        });
    

});