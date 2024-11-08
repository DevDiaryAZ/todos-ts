import React from 'react';
import { Button } from '../../common/Button/Button';
import { TypeStatus } from '../../../types/types';


type TypeStatusButtonProps = {
  status: TypeStatus;
  label: TypeStatus;
  changeStatus: (label: TypeStatus) => void;
};

export const StatusButton: React.FC<TypeStatusButtonProps> = ({
  status,
  label,
  changeStatus,
}) => {
  return (
    <Button
      className={`button_white todo-list__status-btn${status === label ? ' active' : ''}`}
      onClick={() => changeStatus(label)}>
      {label}
    </Button>
  );
};
