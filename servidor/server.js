const createServer = () => {
    const express = require('express');
    const path = require('path');

    const disPath = path.join(__dirname, "../dist");
    const app = express();
    const PORT = 3000;

    app.use(express.static(disPath));

    app.get((req, res) => {
        res.sendFile(path.join(disPath, `index.html`));
    });

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);

    });
}

createServer();