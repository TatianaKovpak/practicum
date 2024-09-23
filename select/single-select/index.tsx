import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ArrowRoundedUp from '../../../../assets/icons/icon_arrow_rounded_up_light.svg';
import ArrowRoundedDown from '../../../../assets/icons/icon_arrow_rounded_down_light.svg';
import CheckBlueIcon from '../../../../assets/icons/icon_check_blue.svg';
import { FC } from 'react';
import { TSingleSelect } from '../types';
import { useCustomSelect } from '../useCustomSelect';

export const SingleSelect: FC<TSingleSelect> = ({
	setSelectedValues,
	label,
	placeholder,
	options,
	initialValues,
}) => {
	const { values, isOpen, onClick, onClickSingleOption, wrapperRef } =
		useCustomSelect(setSelectedValues, initialValues);

	return (
		<div className={style.select} ref={wrapperRef}>
			{values.length > 0 && <label className={style.label}>{label}</label>}
			<div className={style.selection} onClick={onClick} tabIndex={0}>
				{values.length === 0 ? (
					<p className={style.placeholder}>{placeholder}</p>
				) : (
					<div className={style.value}>{values[0].value}</div>
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
								onClick={() => onClickSingleOption(option)}
							>
								<p className={style.optionText}>{option.value}</p>
								{isSelect && (
									<img
										className={style.singleCheckIcon}
										src={CheckBlueIcon}
										alt="Галочка"
									/>
								)}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
