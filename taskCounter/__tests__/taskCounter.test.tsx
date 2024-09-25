import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TaskCounter } from '..';
import { TaskCounterProps } from '../types';

describe('TaskCounter component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props: TaskCounterProps) => {
    render(<TaskCounter {...props} />);
  };

  test('should render the component with the correct count and text', () => {
    // Arrange
    const props: TaskCounterProps = {
      count: 10,
      text: 'Task',
      direction: 'up',
    };

    // Act
    setup(props);

    // Assert
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Task')).toBeInTheDocument();
    expect(screen.getByText('10')).toHaveClass(
      'color-accent'
    );
    expect(screen.getByTestId('task-counter')).toHaveClass(
      'upWrap'
    );
  });

  test('should render the component with a custom count color', () => {
    // Arrange
    const props: TaskCounterProps = {
      count: 5,
      text: 'Pending',
      direction: 'down',
      countColor: 'color-primary',
    };

    // Act
    setup(props);

    // Assert
    expect(screen.getByText('5')).toHaveClass(
      'color-primary'
    );
    expect(screen.getByTestId('task-counter')).toHaveClass(
      'downWrap'
    );
  });
});