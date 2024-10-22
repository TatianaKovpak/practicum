import { ChangeEvent, FC, useRef, useState } from 'react';
import clsx from 'clsx';
import { Title } from '../title/title';
import PenIcon from '../../../assets/icons/icon_pen_blue.svg';
import { Modal } from '../modal';
import Textarea from '../textarea';
import Button from '../button';
import { ButtonColor } from '../button/types';
import style from './style.module.scss';
import { TaskSectionProps } from './types';

const TaskSection: FC<TaskSectionProps> = ({ title, description, issue }) => {
	const [sectionText, setSectionText] = useState(description);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null); 
	const descriptionRef = useRef<HTMLDivElement>(null);

	const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setSectionText(e.target.value);
	};
	const saveTextChanges = () => {
		setSectionText(textareaRef.current?.value || "");
		
		if (descriptionRef.current && textareaRef.current) {
			descriptionRef.current.innerText = textareaRef.current.value;
		}
		setModalIsOpen(false);
	};

	return (
		<div className={style.section__wrapper} data-testid="task-section">
			<Title
				tag="h5"
				data-testid="task-section-title"
				className={clsx(style.section__title, {
					[style['section__title-editable']]: issue,
				})}
			>
				{title}:
				{issue && (
					<div
						onClick={() => setModalIsOpen(true)}
						className={style['section__link-editable']}
						data-testid="edit-link"
					>
						<div
							className={style.section__icon}
							style={{ backgroundImage: `url(${PenIcon})` }}
						/>
						Изменить
					</div>
				)}
			</Title>
			<div ref={descriptionRef} className={style['section__description']} data-testid="description">
				{description}
			</div>

			{modalIsOpen && (
				<Modal handleClose={() => setModalIsOpen(false)} data-testid="modal">
					<div className={style['modal__wrapper']}>
						<Title tag="h2" data-testid="modal-title">Редактировать описание</Title>
						<Textarea
							controlRef={textareaRef}
							value={sectionText || ''}
							label={title}
							maxLength={2000}
							onChange={handleTextareaChange}
							hideClearButton={true}
							data-testid="textarea"
						/>
						<Button
							color={ButtonColor.primary}
							className={style['modal__button']}
							onClick={saveTextChanges}
							data-testid="save-button"
						>
							Сохранить
						</Button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default TaskSection;
