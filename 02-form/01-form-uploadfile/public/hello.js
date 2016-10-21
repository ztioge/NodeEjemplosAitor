// http://api.jquery.com/jQuery.ajax/


$(document).ready(function(){

    $( "#formname" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        /* Clear result div*/
        $("#contentDiv").html('...');


        var formData = $(this).serializeArray();

        $.ajax({
           // type: "GET",
           type: "POST",
           url: "/upload",
           // important to upload images
           contentType: 'multipart/form-data',
           //contentType: false,
           //dataType: "json",
           dataType: "html",
           data: formData,

           success: function(data){
              console.log(data);
              $( "#contentDiv" ).html(data);

           },
           error: function(XMLHttpRequest, textStatus, errorThrown) {
              //alert("Status: " + textStatus); alert("Error: " + errorThrown);
              console.log(XMLHttpRequest.responseText);
              $( "#contentDiv" ).html(XMLHttpRequest.responseText);
           }

        });

        // other options using $.post
        // http://api.jquery.com/jquery.post/


    });

});
