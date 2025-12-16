import React from 'react';
import { Block, Container, Group, Title, Text } from './components/ui8kit';
import DataTable from './components/DataTable';
import { mockUsers } from './data/mockData';

function App() {
  return (
    <Block w="full" minH="screen" bg="background" p="lg">
      <Container py="xl">
        {/* Header */}
        <Group>
          <Title order={1} size="4xl" fw="bold" c="foreground" mb="md">
            DataTables Prototype
          </Title>
          <Text size="lg" c="secondary-foreground">
            Interactive table views built with React Table v7 and UI8Kit styling.
            Data stored in JSON files for rapid prototyping.
          </Text>
        </Group>

        {/* Main Content */}
        <Block bg="card" rounded="xl" shadow="lg" p="lg">
          <Block mb="lg">
            <Title order={2} size="2xl" fw="semibold" c="foreground" mb="sm">
              Users Table
            </Title>
            <Text c="secondary-foreground">
              Demonstrating sorting, filtering, and responsive design with UI8Kit components.
            </Text>
          </Block>

          <DataTable data={mockUsers} />
        </Block>
      </Container>
    </Block>
  );
}

export default App;
