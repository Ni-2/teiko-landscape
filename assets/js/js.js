jQuery(document).ready(function(){
    var Form = {
        name: 'contactForm',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error' : 'error', 'success': 'success'},
        errorPrefix: 'Error',
        action: function(){return $('#' + this.name).attr('action')},
        data: function(){
            return $('#' + this.name).serialize();
        },
        hideBox: function(el){
            $(el).slideUp('slow');
        },
        showBox: function(el){
            $(el).slideDown('slow');
        },
        invalids: null,
        setInvalids: function(invalid){
            this.invalids = invalid
        }
    }
    // Boxes to hide
    var cssBoxes = '.' + Form.cssClass['warning'] + ',.' + Form.cssClass['error'] + ',.' + Form.cssClass['success'];


    // hide all boxes if some exists


    $('#ajax_loader').ajaxStart(function(){$('#send').hide();$(this).show()
            })
    $('#ajax_loader').ajaxComplete(function(){$('#send').show();$(this).hide()
            })
    $('#' + Form.name).submit(function(){
    Form.hideBox(cssBoxes);
    // Ajax request
    $.post(Form.action(), Form.data(), function(data){
        var $return = eval('(' + data + ')');
        if($return === true){
            Form.showBox('#' + Form.id['success']);
            $('#contact_form form input[type="text"]').attr('value', '');
            $('#contact_form form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/sec.php?'+Math.random());
        }else if($return === false){
            Form.showBox('#' + Form.id['error']);
        }
        else{
        for(var i in $return){
            Form.showBox('#' + $return[i] + Form.errorPrefix);
         }
        }
    });



        return false;
    })
})