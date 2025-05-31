import { useAppSelector } from '@store/hooks';
import { viewsSelector } from '@store/slices/views';

// const getConfirmationModal = (modal: IOpenedModal<ConfirmationModalProps>) => (
//   <ConfirmationModal key={modal.name} {...modal.props} />
// );

const ModalsController = () => {
  const modals = useAppSelector(viewsSelector.modals);

  return (
    <>
      {modals.map((modal) => {
        switch (modal.name) {
          // case ModalName.ConfirmationModal:
          //   return getConfirmationModal(modal);
          default:
            return null;
        }
      })}
    </>
  );
};

export default ModalsController;
