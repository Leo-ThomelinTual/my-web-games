export function outputText(
  text: string,
  xpGained: number,
  xpLost: number,
  icon: string,
  duration?: number,
) {
  const { addNotification } = useNotification();
  addNotification(text, xpGained, xpLost, icon, duration);
}
