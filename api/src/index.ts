import { container } from './configs';

const server = container.resolve('server');
const { PORT } = container.resolve('constants');

function serverCallback() {
  console.log(`🚀 server is running! 📡 http://localhost:${PORT}`);
}

server.listen(PORT, serverCallback);
