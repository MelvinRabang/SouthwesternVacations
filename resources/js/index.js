$(document).ready(function() {
    $("#myForm").dialog({
        title: "Contact Us",
        autoOpen: false,
        buttons: [
            {
                text: "Cancel",
                click: function() {
                    $(this).dialog("close");
                    clearDialogInputFields();
                },
                "id": "cancelButton"
            },
            {
                text: "Submit",
                click: function() {
                    $(this).dialog("close");
                    clearDialogInputFields();
                    
                },
                "id": "submitButton"
            }
        ]
    });

    $(".ui-dialog-titlebar").removeClass("ui-widget-header");
    $(".ui-dialog-titlebar").addClass("dialogHeader");
    $("#cancelButton").removeClass('ui-state-default');
    $("#submitButton").removeClass('ui-state-default');
    $("#cancelButton").addClass('dialogButtons btn');
    $("#submitButton").addClass('dialogButtons btn');

    $("#contactButton").click(function(){
        $("#myForm").dialog('open');
    });
});

function clearDialogInputFields() {
    $("#name").val("");
    $("#email").val("");
    $("#comments").val("");
}