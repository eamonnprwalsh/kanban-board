import React from 'react';
import ColumnProvider from '../context/ColumnProvider';
import { statuses } from '../constants';
import Column from '../components/Column';
import Header from '../components/Header';

const KanbanBoard = () => (
  <ColumnProvider>
    <Header />
    <div className="kanban-board">
      {statuses.map((status) => (
        <Column key={status} title={status} status={status} />
      ))}
    </div>
  </ColumnProvider>
);

export default KanbanBoard;
