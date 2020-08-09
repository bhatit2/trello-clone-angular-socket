const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var cols = {
    todo: ['cooking','Pick up groceries','cleaning','Fall asleep'],
    doing: ['assignment','task 4','library exploration'],
    done: ['Get up','Brush teeth','Take a shower','Check e-mail','Walk dog']
};

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('message', cols);
    socket.on('add', (msg) => {
        console.log(msg);
        io.emit('message', JSON.parse(msg));
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
});



http.listen(3000, () => {
    console.log('listening on *:3000');
});