import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskSection from '..';
import { TaskSectionProps } from '../types';

describe('TaskSection', () => {
    const setup = (props: TaskSectionProps) => {
        const { getByTestId } = render(<TaskSection {...props} />);
        const taskSection = getByTestId('task-section');
        
        const titleElement = within(taskSection).getByTestId('task-section-title');
        const descriptionElement = within(taskSection).getByTestId('description');
        const editLink = within(taskSection).getByTestId('edit-link');
        const modal = within(taskSection).queryByTestId('modal');
        const saveButton = within(taskSection).queryByTestId('save-button');
        const textarea = within(taskSection).queryByTestId('textarea');

        return { taskSection, titleElement, descriptionElement, editLink, modal, saveButton, textarea };
    };

    test('should render the component with title and description', () => {
        const { titleElement, descriptionElement } = setup({
            title: 'Тестовая задача',
            description: 'Это описание задачи.',
            issue: false,
        });

        expect(titleElement).toHaveTextContent('Тестовая задача:');
        expect(descriptionElement).toHaveTextContent('Это описание задачи.');
    });

    test('should open modal on edit link click', () => {
        const { editLink, modal } = setup({
            title: 'Тестовая задача',
            description: 'Это описание задачи.',
            issue: true,
        });

        fireEvent.click(editLink);
        expect(modal).toBeInTheDocument();
				if(modal)
        expect(within(modal).getByTestId('modal-title')).toHaveTextContent('Редактировать описание');
    });

    test('should update description text when save button is clicked', () => {
        const { editLink, textarea, saveButton, descriptionElement } = setup({
            title: 'Тестовая задача',
            description: 'Это описание задачи.',
            issue: true,
        });

        fireEvent.click(editLink);
        
				if(textarea)
        fireEvent.change(textarea, { target: { value: 'Новое описание задачи.' } });
        
				if(saveButton)
        fireEvent.click(saveButton);
        
        expect(descriptionElement).toHaveTextContent('Новое описание задачи.');
    });

    test('should close modal on clicking outside', () => {
        const { editLink, modal } = setup({
            title: 'Тестовая задача',
            description: 'Это описание задачи.',
            issue: true,
        });

        fireEvent.click(editLink);
        fireEvent.click(document);

        expect(modal).not.toBeInTheDocument();
    });
});
