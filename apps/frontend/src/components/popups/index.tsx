import ToastNotification from '@shared/toast-notification';
import { useAppSelector } from '@store/hooks';
import { viewsSelector } from '@store/slices/views';

export const ToastNotificationsController = () => {
  const toastNotificationPopUp = useAppSelector(viewsSelector.toastNotificationPopUp);

  return !toastNotificationPopUp.open ? null : <ToastNotification />;
};
