type Level = 'none' | 'warn' | 'error'

interface IncorrectPacketAction {
  log: Level
  emit: boolean
}

interface PacketPrediction {
  enabled: boolean
  onIncorrectPacket: IncorrectPacketAction
}

export const PACKET_PREDICTION: PacketPrediction = {
  enabled: true,
  onIncorrectPacket: {
    log: 'warn',
    emit: false
  }
}
