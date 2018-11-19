export function updateWombat (wombat, change) {
  return {
    type: 'UPDATE_WOMBAT',
    wombat,
    change
  }
}
