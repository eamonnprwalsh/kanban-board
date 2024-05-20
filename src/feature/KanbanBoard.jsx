import React from 'react';
import ContextProvider from '../context/ContextProvider';
import { statuses } from '../constants';
import Status from '../components/Status';
import Header from '../components/Header';

const KanbanBoard = () => (
  <ContextProvider>
    <Header />
    <div className="kanban-board">
      {statuses.map((status) => (
        <Status key={status} title={status} status={status} />
      ))}
    </div>
  </ContextProvider>
);

export default KanbanBoard;
