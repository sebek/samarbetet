var io = require('socket.io')(7575);

var commands = [];

io.on('connection', (socket) => {

    // Just logged in, send all the old commands
    socket.emit('commands', commands);

    socket.on('loaded.document', (data) => {
        console.log(data)
    });

    socket.on('command', (data) => {

        commands.push(data);
        socket.broadcast.emit('command', data);

    });

    socket.on('disconnect', () => {
        console.log("disconnect", socket.client.id);
    });


});
