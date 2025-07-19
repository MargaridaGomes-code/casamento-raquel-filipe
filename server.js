const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração do Multer para uploads temporários
const upload = multer({ dest: 'uploads/' });

// Carregar credenciais do Google
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');

let oauth2Client;

function authorizeGoogle() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oauth2Client.setCredentials(token);
  } else {
    console.log('Por favor, corre o script de autorização para gerar o token.json');
    process.exit(1);
  }
}

authorizeGoogle();

const drive = google.drive({ version: 'v3', auth: oauth2Client });

// Endpoint para upload de ficheiros
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum ficheiro enviado.' });
  }
  try {
    const fileMetadata = {
      name: req.file.originalname,
      parents: [process.env.DRIVE_FOLDER_ID] // Opcional: ID da pasta destino
    };
    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(req.file.path)
    };
    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id, name, webViewLink'
    });
    // Apagar ficheiro temporário
    fs.unlinkSync(req.file.path);
    res.json({ success: true, file: file.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao fazer upload para o Google Drive.' });
  }
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Servidor de upload a correr em http://localhost:${PORT}`);
}); 