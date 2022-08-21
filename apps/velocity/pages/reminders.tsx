import { useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';
import numeral from 'numeral';
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { Flex } from '@terenceodonoghue/react-components/core';
import {
  Card,
  Driver,
  KanbanCard,
  Pill,
  Text,
} from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';

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
  const fixtures = useMemo(() => {
    return [
      {
        avatar: faker.image.avatar(),
        name: 'Bebop',
        vehicle: 'Tesla Model X',
        totalEarnings: 6432,
        totalDistance: 1322,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Gran Tesoro',
        vehicle: 'Chevrolet Bolt',
        totalEarnings: 6432,
        totalDistance: 1322,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Belafonte',
        vehicle: 'Tesla Model X',
        totalEarnings: 6432,
        totalDistance: 1322,
      },
    ];
  }, []);

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

  const { color } = useTheme();

  const colorMap = {
    'service-needed': color.ui.blue,
    waiting: color.ui.purple,
    'in-service': color.ui.teal,
    'fully-serviced': color.ui.yellow,
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
                  }}
                  data-role={columnKey}
                  key={columnKey}
                >
                  <Text
                    css={{ display: 'inline-block', marginLeft: 12 }}
                    as="h3"
                    variant="c1"
                  >
                    {columnName}
                  </Text>
                  <Pill
                    css={{ marginLeft: 8 }}
                    color={colorMap[columnKey]}
                    label={tickets[i].length}
                  />
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
                                  ref={providedDrag.innerRef}
                                  {...providedDrag.draggableProps}
                                  {...providedDrag.dragHandleProps}
                                >
                                  <KanbanCard
                                    color={colorMap[columnKey]}
                                    name={ticket.name}
                                    cost={ticket.price}
                                    description={ticket.type}
                                    date={ticket.date}
                                  />
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
            caption="Service Centers"
          />
          <Flex css={{ flexGrow: 1 }} direction="column">
            <Card caption="Vehicle Service Status" />
            <Card
              css={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              caption="Top Drivers"
            >
              {fixtures.map(
                ({ totalDistance, totalEarnings, ...driver }, i) => (
                  <Driver
                    rank={i + 1}
                    totalDistance={`${numeral(totalDistance).format(
                      '0,0',
                    )} miles`}
                    totalEarnings={numeral(totalEarnings).format('$0')}
                    {...driver}
                  />
                ),
              )}
            </Card>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default RemindersPage;
