import { type UUID } from 'crypto'

// https://github.com/PrismarineJS/node-minecraft-protocol/blob/21240f8ab2fd41c76f50b64e3b3a945f50b25b5e/src/index.d.ts#L52
// export interface ServerPlayerMessage {
//   formattedMessage: string
//   message: string
//   type: string
//   sender: string
//   senderName: string
//   senderTeam: string
//   verified?: boolean | undefined
// }

// ### `playerChat` event

// https://github.com/PrismarineJS/node-minecraft-protocol/blob/master/docs/API.md#playerchat-event
// Called when a chat message from another player arrives. The emitted object contains:
// * formattedMessage -- (JSON) the chat message preformatted, if done on server side
// * plainMessage -- (Plaintext) the chat message without formatting (for example no `<username> message` ; instead `message`), on version 1.19+
// * unsignedContent -- (JSON) unsigned formatted chat contents ; should only be present when the message is modified and server has chat previews disabled - only on version 1.19 - 1.19.2
// * type -- the message type - on 1.19, which format string to use to render message ; below, the place where the message is displayed (for example chat or action bar)
// * sender -- the UUID of the player sending the message
// * senderTeam -- scoreboard team of the player (pre 1.19)
// * senderName -- Name of the sender
// * targetName -- Name of the target (for outgoing commands like /tell). Only in 1.19.2+
// * verified -- true if message is signed, false if not signed, undefined on versions prior to 1.19

// TODO: Figure out what the structure REALLY is from more testing
// ! Different from index.d.ts
// ! Aligned with API
// ! Reconstructed from testing (since API is incomplete)
export interface ServerPlayerMessage {
  plainMessage: string
  unsignedContent: string
  type: number
  sender: UUID
  // no senderTeam (since only pre-1.19)
  senderName: string
  targetName: string | undefined
  verified: boolean
}

export interface ServerSystemMessage {
  positionId: number
  formattedMessage: string
}

export type GlobalMessage = {
  type: 'player'
  message: ServerPlayerMessage
} | {
  type: 'system'
  message: ServerSystemMessage
}

export type ServerMessage = GlobalMessage['message']

export type LocalMessage = string
