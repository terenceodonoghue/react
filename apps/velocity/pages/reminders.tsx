import { useTheme } from '@emotion/react';
import { Card } from '@terenceodonoghue/react-components/velocity';
import { NextPage } from 'next';
import Head from 'next/head';
import { em, linearGradient, rgba, transitions as transition } from 'polished';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import Container from '../components/core/Container';
import Flex from '../components/core/Flex';

const COLUMNS = ['Service needed', 'Waiting', 'In service', 'Fully serviced'];

interface Ticket {
  date: string;
  name: string;
  price: string;
  type: string;
}

const move = (
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  tickets: Ticket[][],
): Ticket[][] => {
  const columns = Array.from(tickets);
  const sourceClone = Array.from(
    tickets[parseInt(droppableSource.droppableId, 10)],
  );
  const destClone = Array.from(
    tickets[parseInt(droppableDestination.droppableId, 10)],
  );

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
  columns[parseInt(droppableDestination.droppableId, 10)] = destClone;
  return columns;
};

const reorder = (
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  tickets: Ticket[][],
): Ticket[][] => {
  const columns = Array.from(tickets);
  const sourceClone = Array.from(
    tickets[parseInt(droppableSource.droppableId, 10)],
  );

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  sourceClone.splice(droppableDestination.index, 0, removed);

  columns[parseInt(droppableSource.droppableId, 10)] = sourceClone;
  return columns;
};

const onDragEnd = (
  dragResult: DropResult,
  tickets: Ticket[][],
  setTickets: Dispatch<SetStateAction<Ticket[][]>>,
): void => {
  const { source, destination } = dragResult;
  if (!destination) {
    return;
  }

  if (source.droppableId === destination.droppableId) {
    setTickets(reorder(source, destination, tickets));
  } else {
    setTickets(move(source, destination, tickets));
  }
};

const RemindersPage: NextPage = () => {
  const [tickets, setTickets] = useState([
    [
      {
        date: 'June 12',
        name: 'Spire',
        price: '$233',
        type: 'Tire replacement',
      },
      {
        date: 'May 2',
        name: 'Eos',
        price: '$120',
        type: 'Engine check-up',
      },
      {
        date: 'June 6',
        name: 'Eagle',
        price: '$180',
        type: 'Tire replacement',
      },
      {
        date: 'June 12',
        name: 'Bebop',
        price: '$1400',
        type: 'Monthly service',
      },
    ],
    [
      {
        date: 'June 3',
        name: 'Expedition',
        price: '$766',
        type: 'Tire replacement',
      },
      {
        date: 'June 12',
        name: 'Bliss',
        price: '$199',
        type: 'Engine check-up',
      },
      {
        date: 'June 5',
        name: 'Vigor',
        price: '$690',
        type: 'Monthly service',
      },
    ],
    [
      {
        date: 'June 4',
        name: 'Scorpion',
        price: '$430',
        type: 'Monthly service',
      },
      {
        date: 'June 22',
        name: 'Resolve',
        price: '$560',
        type: 'Tire replacement',
      },
    ],
    [
      {
        date: 'June 24',
        name: 'Empire',
        price: '$430',
        type: 'Monthly service',
      },
      {
        date: 'June 27',
        name: 'Eos',
        price: '$560',
        type: 'Tire replacement',
      },
      {
        date: 'June 28',
        name: 'Spire',
        price: '$430',
        type: 'Monthly service',
      },
      {
        date: 'June 29',
        name: 'Nebula',
        price: '$560',
        type: 'Tire replacement',
      },
    ],
  ]);

  const theme = useTheme();

  const colorMap = {
    'service-needed': theme.palette.ui.blue,
    waiting: theme.palette.ui.purple,
    'in-service': theme.palette.ui.teal,
    'fully-serviced': theme.palette.ui.yellow,
  };

  return (
    <>
      <Head>
        <title>Velocity | Service Reminders</title>
      </Head>
      <Container heading="Service Reminders">
        <Flex css={{ margin: '12px 0', overflow: 'scroll' }}>
          <DragDropContext
            onDragEnd={(dragResult): void =>
              onDragEnd(dragResult, tickets, setTickets)
            }
          >
            {COLUMNS.map((columnName, i) => {
              const columnKey = columnName.split(' ').join('-').toLowerCase();
              return (
                <div
                  css={{
                    flexBasis: 264,
                    flexGrow: 1,
                    flexShrink: 0,
                    padding: '0 12px',
                  }}
                  data-role={columnKey}
                  key={columnKey}
                >
                  <h3
                    css={({ palette, typography }) => ({
                      color: palette.neutral[500],
                      fontSize: em(12, typography.fontSize),
                      fontWeight: typography.fontWeight.medium,
                      letterSpacing: 1.1,
                      margin: '8px 0',
                      textTransform: 'uppercase',
                      '&::after': {
                        alignItems: 'center',
                        backgroundColor: rgba(colorMap[columnKey], 0.2),
                        borderRadius: 10,
                        color: colorMap[columnKey],
                        content: `"${tickets[i].length}"`,
                        display: 'inline-flex',
                        height: 20,
                        letterSpacing: 'normal',
                        marginLeft: 8,
                        justifyContent: 'center',
                        width: 32,
                        ...colorMap[columnKey],
                      },
                    })}
                  >
                    {columnName}
                  </h3>
                  <Droppable droppableId={`${i}`}>
                    {(providedDrop): ReactElement => (
                      <ul
                        css={{
                          listStyle: 'none',
                          padding: 0,
                        }}
                        ref={providedDrop.innerRef}
                        {...providedDrop.droppableProps}
                      >
                        {tickets[i].map((ticket, j) => {
                          const draggableKey = `${ticket.name.toLowerCase()}-${ticket.type
                            .split(' ')
                            .join('-')
                            .toLowerCase()}`;
                          return (
                            <Draggable
                              draggableId={draggableKey}
                              index={j}
                              key={draggableKey}
                            >
                              {(providedDrag): ReactElement => (
                                <li
                                  css={{ padding: '4px 0' }}
                                  ref={providedDrag.innerRef}
                                  {...providedDrag.draggableProps}
                                  {...providedDrag.dragHandleProps}
                                >
                                  <Card
                                    css={({ palette, transitions }) => ({
                                      backgroundRepeat: 'no-repeat',
                                      borderRadius: 5,
                                      ...linearGradient({
                                        colorStops: [
                                          `${colorMap[columnKey]} 2px`,
                                          `${palette.neutral[50]} 2px`,
                                        ],
                                        fallback: palette.neutral[50],
                                        toDirection: '90deg',
                                      }),
                                      margin: '0 !important',
                                      padding: 24,
                                      ...transition(
                                        'box-shadow',
                                        `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
                                      ),
                                      '&:not(:hover)': {
                                        boxShadow: 'none',
                                      },
                                    })}
                                  >
                                    <Flex
                                      css={({ typography }) => ({
                                        fontWeight:
                                          typography.fontWeight.medium,
                                        justifyContent: 'space-between',
                                      })}
                                    >
                                      <span>{ticket.name}</span>
                                      <span>{ticket.price}</span>
                                    </Flex>
                                    <Flex
                                      css={({ palette }) => ({
                                        color: palette.neutral[600],
                                        justifyContent: 'space-between',
                                      })}
                                    >
                                      <span>{ticket.type}</span>
                                      <span>{ticket.date}</span>
                                    </Flex>
                                  </Card>
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {providedDrop.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
        </Flex>
        <Flex>
          <Card
            css={{ flexBasis: 655, flexShrink: 0 }}
            heading="Service Centers"
          />
          <Flex css={{ flexDirection: 'column', flexGrow: 1 }}>
            <Card heading="Vehicle Service Status" />
            <Card heading="Top Drivers" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default RemindersPage;
