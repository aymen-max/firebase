var db = firebase.database().ref('contact')


$('#btnSubmit').click(function(){
    var name = $('#name').val()
    var email = $("#email").val()
    var tel = $("#number").val()
    var track = $("#track").val()

    var newMsg = db.push();
    newMsg.set({
        name:name,
        email:email,
        phone:tel,
        track:track,
    })
})
