import { FC, useState } from 'react';
import styles from './style.module.scss';
import { MultipleSelectWithOneSet } from '../../ui-kit/select/multiple-select-with-one-set';
import { kindsOfActivity } from './consts';
import { Textarea } from '../..';
import Button from '../../ui-kit/button';
import { ButtonColor } from '../../ui-kit/button/types';
import { Props } from './types';

export const PersonalAccountFund: FC<Props> = ({ onSubmitClick }) => {
	const [selectValue, setSelectValue] = useState([]);
	const [textAriasValue, setTextAriasValue] = useState({
		'what-does': '',
		about: '',
	});

	const handleTextAriaOnChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { value, name } = e.target;
		setTextAriasValue({ ...textAriasValue, [name]: value });
	};

	const handleSaveButtonOnClick = () => {
		console.log({ ...textAriasValue, selectValue });
		onSubmitClick();
	};

	const handleOnClearClick = (name: string) => {
		setTextAriasValue({ ...textAriasValue, [name]: '' });
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Описание</h2>

			<div className={styles.firstContainer}>
				<MultipleSelectWithOneSet
					label="Выбрано видов деятельности"
					placeholder="Виды деятельности"
					options={kindsOfActivity}
					setSelectedValues={setSelectValue}
				/>

				<Textarea
					name="what-does"
					value={textAriasValue['what-does']}
					onChange={handleTextAriaOnChange}
					onClearClick={(_) => handleOnClearClick('what-does')}
					maxLength={2000}
					label="Чем занимается НКО"
					placeholder="Чем занимается НКО"
				/>
			</div>

			<div className={styles.secondContainer}>
				<div>
					<p className={styles.text}>
						В отсутствие финансовой отчетности мы хотели бы узнать о вашей
						организации подробнее:
					</p>
					<ul className={styles.list}>
						<li>какова ее миссия,</li>
						<li>как строится работа,</li>
						<li>
							в чем заключалась ее деятельность до официального оформления,
						</li>
						<li>для чего вам необходима регистрация на ProСharity,</li>
						<li>какие задания вы планируете давать волонтерам</li>
					</ul>
				</div>

				<Textarea
					name="about"
					value={textAriasValue['about']}
					onChange={handleTextAriaOnChange}
					onClearClick={(_) => handleOnClearClick('about')}
					maxLength={2000}
					label="Об организации поподробнее"
					placeholder="Об организации поподробнее"
				/>
			</div>
			<div className={styles.buttonContainer}>
				<Button color={ButtonColor.primary} onClick={handleSaveButtonOnClick}>
					СОХРАНИТЬ
				</Button>
			</div>
		</div>
	);
};
