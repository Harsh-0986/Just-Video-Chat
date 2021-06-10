const app = require("express")();
const express = require("express");
const path = require("path");
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({
        userToCall,
        signalData,
        from,
        name
    }) => {
        io.to(userToCall).emit("calluser", {
            signal: signalData,
            from,
            name,
        });
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));