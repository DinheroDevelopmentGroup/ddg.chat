import { registerCommand } from '../../../ddg.command/manager.js';
import chat from '../../local.js';

registerCommand('say', (...args) => {
  const message = args.join(' ');

  chat.toServer(message);
});

registerCommand('clientmsg', (...args) => {
  const json = args.join(' ');
  const message = JSON.parse(json);

  chat.toClient(message);
});

registerCommand('setactionbar', (...args) => {
  const json = args.join(' ');
  const message = JSON.parse(json);

  chat.toClientActionBar(message);
});
