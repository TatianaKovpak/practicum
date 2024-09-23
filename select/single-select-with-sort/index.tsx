import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.scss';
import { SingleOption, SingleSelectWithSortProps } from '../types';
import ArrowFullDarkUp from '../../../../assets/icons/icon_arrow_full_dark_up.svg';
import ArrowFullDarkDown from '../../../../assets/icons/icon_arrow_full_dark_down.svg';
import ArrowFullLightUp from '../../../../assets/icons/icon_arrow_full_light_up.svg';
import ArrowFullLightDown from '../../../../assets/icons/icon_arrow_full_light_down.svg';
import ArrowRoundedUp from '../../../../assets/icons/icon_arrow_rounded_up_light.svg';
import ArrowRoundedDown from '../../../../assets/icons/icon_arrow_rounded_down_light.svg';
import CheckBlueIcon from '../../../../assets/icons/icon_check_blue.svg';
import { useCustomSelect } from '../useCustomSelect';

export const SingleSelectWithSort: FC<SingleSelectWithSortProps> = ({
	setSelectedValues,
	label,
	placeholder,
	options,
	value,
	setValue,
	onClickDownSortArrow,
	onClickUpSortArrow,
	initialValues,
}) => {
	const {
		values,
		isOpen,
		setIsOpen,
		onClick,
		onClickSingleOption,
		wrapperRef,
	} = useCustomSelect(setSelectedValues, initialValues);

	const [activeSortArrow, setActiveSortArrow] = useState<string>('down');

	const onClickOption = (option: SingleOption) => {
		setValue(option.value);
		onClickSingleOption(option);
	};

	const toggleActiveSortArrow = (icon: string) => {
		if (icon === 'down') {
			setActiveSortArrow('down');
			onClickDownSortArrow();
			setIsOpen(!isOpen);
		} else {
			setActiveSortArrow('up');
			onClickUpSortArrow();
			setIsOpen(!isOpen);
		}
	};

	return (
		<div className={style.select} ref={wrapperRef}>
			{values.length > 0 && <label className={style.label}>{label}</label>}
			<div className={style.selection} onClick={onClick} tabIndex={0}>
				{values.length === 0 ? (
					<p className={style.placeholder}>{placeholder}</p>
				) : (
					<div className={style.value}>
						{values[0].value}
						{options[0].value === values[0].value ? (
							<span>
								&nbsp;{activeSortArrow === 'down' ? '(А-Я)' : '(Я-А)'}
							</span>
						) : (
							<img
								className={style.sortArrowIconInHead}
								src={
									activeSortArrow === 'down'
										? ArrowFullDarkDown
										: ArrowFullDarkUp
								}
								alt={
									activeSortArrow === 'down' ? 'Стрелка вниз' : 'Стрелка вверх'
								}
							/>
						)}
					</div>
				)}
				<img
					className={style.arrow}
					src={isOpen ? ArrowRoundedUp : ArrowRoundedDown}
					alt={isOpen ? 'Стрелка вверх' : 'Стрелка вниз'}
				/>
			</div>
			{!isOpen ? null : (
				<div className={style.options}>
					{options.map((option) => {
						const isSelect = values.some((item) => item.value === option.value);
						return (
							<div
								key={uuidv4()}
								data-value={option.value}
								className={style.option}
								onClick={() => onClickOption(option)}
							>
								<p className={style.optionText}>
									{option.value}
									{isSelect ||
										(value === option.value && (
											<span className={style.sortArrowWrap}>
												<img
													className={style.sortArrowIcon}
													src={
														activeSortArrow === 'down'
															? ArrowFullDarkDown
															: ArrowFullLightDown
													}
													alt="Стрелка вниз"
													onClick={() => toggleActiveSortArrow('down')}
												/>
												<img
													className={style.sortArrowIcon}
													src={
														activeSortArrow === 'up'
															? ArrowFullDarkUp
															: ArrowFullLightUp
													}
													alt="Стрелка вверх"
													onClick={() => toggleActiveSortArrow('up')}
												/>
											</span>
										))}
								</p>
								{isSelect ||
									(value === option.value && (
										<img
											className={style.singleCheckIcon}
											src={CheckBlueIcon}
											alt="Галочка"
										/>
									))}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
