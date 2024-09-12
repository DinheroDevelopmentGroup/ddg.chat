import type Instance from '../../instance/index.js';
import {
  type GlobalMessage,
  type LocalMessage,
  type ServerPlayerMessage,
} from './shared.js';

export default async function (instance: Instance): Promise<void> {
  const channel = instance.createChannel<GlobalMessage, LocalMessage>('chat');

  const server = instance.server;

  server.on('playerChat', (data) => {
    channel.write({
      type: 'player',
      // see https://github.com/PrismarineJS/node-minecraft-protocol/issues/1281
      message: data as unknown as ServerPlayerMessage,
    });
  });

  server.on('systemChat', (data) => {
    channel.write({
      type: 'system',
      message: data,
    });
  });

  channel.subscribe((message) => {
    server.chat(message);
  });
}
