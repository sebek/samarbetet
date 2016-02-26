var io = require('socket.io')(7575);

io.on('connection', (socket) => {

    console.log(socket.client.id);

    socket.on('loaded.document', (data) => {
        console.log(data)
    });

    socket.on('disconnect', () => {
        console.log("disconnect", socket.client.id);
    });


});
