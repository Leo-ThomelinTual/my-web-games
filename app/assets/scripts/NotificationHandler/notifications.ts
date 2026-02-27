export interface Notifications {
  id: number;
  text: string;
  xpGained: number;
  xpLost: number;
  icon: string;
}

const notifications = ref<Notification[]>([]);
let nextId = 1;

export function useNotification() {
  function addNotification(
    text: string,
    xpGained: number,
    xpLost: number,
    icon: string,
    duration: 5000, // 5 sec par défaut
  ) {
    const id = nextId++;
    notifications.value.unshift({ id, text, xpGained, xpLost, icon });

    // Suppression automatique après X ms
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  }

  function removeNotification(id: number) {
    const index = notifications.value.findIndex((n) => n.id === id);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  }

  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
