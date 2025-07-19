# Raquel & Filipe - Website de Fotos de Casamento e Batizado

Este é um website elegante e responsivo para upload e visualização de fotos do casamento de Raquel e Filipe e do batizado da Caetana, otimizado para compartilhamento via QR code e uso em dispositivos móveis. Inclui uma área de administrador para visualizar e descarregar todas as fotos enviadas pelos convidados.

## Características

- Design moderno com tema em tons de azul e decorações de rosas em aquarela no cabeçalho
- Upload de fotos via drag-and-drop ou seleção de arquivos
- Visualização prévia de imagens antes do upload
- Armazenamento seguro das fotos (localmente e no "servidor")
- Visualizador de imagens em tamanho completo (lightbox)
- Design totalmente responsivo para todos os dispositivos
- Funciona como Progressive Web App (PWA), podendo ser instalado como aplicativo
- Funcionalidade offline para visualizar fotos já carregadas
- Otimização automática de imagens para economia de dados
- Área de administração para acessar todas as fotos enviadas pelos convidados

## Como Usar

1. Escaneie o QR code para abrir o site no navegador do seu dispositivo móvel
2. Navegue pelas diferentes secções do site utilizando o menu de navegação
3. Para fazer upload de fotos:
   - Clique na área de upload ou arraste fotos para ela
   - Visualize as fotos selecionadas
   - Clique em "Enviar Fotos"
4. Para ver as suas fotos enviadas, vá para a secção "Minhas Fotos"
5. Para instalar o site como aplicativo, toque no banner de instalação que aparecerá

## Área do Administrador

O site inclui uma área de administração para visualizar e descarregar todas as fotos enviadas pelos convidados:

1. Para acessar o modo administrador, digite a palavra "admin" em qualquer tela do site
2. Na área de administração, você verá:
   - Estatísticas de uso (número de fotos enviadas e convidados participantes)
   - Botão para visualizar todas as fotos organizadas por convidado
   - Botão para descarregar todas as fotos

Em uma implementação real, esta funcionalidade estaria em uma página protegida por senha com um backend para processamento e armazenamento das imagens.

## Compartilhamento via QR Code

O site está configurado para ser compartilhado facilmente via QR code:

1. Hospede o site em um servidor com HTTPS (ex: Netlify, Vercel, GitHub Pages)
2. Gere um QR code para o URL do site hospedado
3. Imprima o QR code e coloque-o em locais visíveis durante o evento
4. Os convidados podem escanear o código com a câmera do smartphone e acessar o site instantaneamente

## Design Floral

O website apresenta um design elegante com rosas azuis em aquarela no cabeçalho:

- Belas rosas azuis em aquarela nos cantos superiores do cabeçalho
- Detalhes de folhas verdes e pequenas flores brancas que complementam as rosas azuis
- Esquema de cores em tons de azul que harmonizam com as rosas
- Design limpo e minimalista para destacar o conteúdo e as decorações florais

## Compatibilidade com Dispositivos Móveis

O site foi otimizado para funcionar perfeitamente em dispositivos móveis:

- Layout fluido que se adapta a qualquer tamanho de tela
- Controles de toque para navegação na galeria (swipe para trocar de imagem)
- Compressão automática de imagens para economia de dados móveis
- Suporte para orientação retrato e paisagem
- Interface adaptada para facilitar o toque com os dedos

## Recursos PWA (Progressive Web App)

O site funciona como um aplicativo nativo quando instalado:

- Pode ser adicionado à tela inicial do dispositivo
- Carrega rapidamente mesmo com conexão lenta
- Funciona offline para visualizar fotos já carregadas
- Experiência de aplicativo fluida e integrada ao sistema

## Armazenamento das Fotos

Nesta versão demonstrativa:

- As fotos são salvas tanto no armazenamento local quanto simuladas no "servidor" (LocalStorage)
- Cada convidado vê apenas suas próprias fotos na galeria normal
- As fotos recebem identificadores únicos para evitar conflitos
- O administrador pode acessar todas as fotos enviadas por todos os convidados
- Os dados são organizados para facilitar a visualização e download

Em uma implementação real, as fotos seriam enviadas para um servidor backend com armazenamento em nuvem e banco de dados.

## Notas de Implementação

Esta é uma versão de demonstração que simula o armazenamento no servidor usando LocalStorage. Para uma implementação real, seria necessário adicionar:

1. Um backend real (Node.js, PHP, etc.) para receber e processar uploads
2. Serviço de armazenamento em nuvem (como AWS S3, Google Cloud Storage)
3. Banco de dados para metadados das fotos
4. Autenticação segura para a área de administração
5. Geração de arquivo ZIP para download em massa das fotos

## Estrutura de Ficheiros

- `index.html` - Estrutura principal do website
- `css/styles.css` - Estilos e layout do website
- `js/script.js` - Funcionalidades interativas e lógica de armazenamento
- `sw.js` - Service Worker para funcionalidade offline
- `manifest.json` - Configuração para instalação como aplicativo
- `images/` - Pasta para imagens decorativas e recursos visuais
  - `blue-roses.png` - Belas rosas azuis em aquarela para decoração do cabeçalho
  - `wave.svg` - Efeito ondulado para o cabeçalho
  - `icon-192x192.png` - Ícone para dispositivos Android
  - `icon-512x512.png` - Ícone para tela de splash
  - `apple-touch-icon.png` - Ícone para dispositivos Apple
  - `favicon.ico` - Ícone para a guia do navegador

## Requisitos para a Versão Completa

Para implementar uma versão totalmente funcional com armazenamento permanente, seria necessário:

- Servidor web (Node.js, PHP, etc.)
- Banco de dados para informações das imagens
- Serviço de armazenamento de arquivos (como Amazon S3)
- Sistema de autenticação de utilizadores e administradores
- Certificado SSL para segurança
- Funcionalidade de backup e exportação de imagens

## Créditos

Criado com amor para Raquel, Filipe e Caetana! 