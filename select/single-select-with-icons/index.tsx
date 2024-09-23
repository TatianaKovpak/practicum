import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { TSingleSelect } from '../types';
import ArrowRoundedUp from '../../../../assets/icons/icon_arrow_rounded_up_light.svg';
import ArrowRoundedDown from '../../../../assets/icons/icon_arrow_rounded_down_light.svg';
import CheckBlueIcon from '../../../../assets/icons/icon_check_blue.svg';
import { FC } from 'react';
import { useCustomSelect } from '../useCustomSelect';

export const SingleSelectWithIcons: FC<TSingleSelect> = ({
	setSelectedValues,
	options,
	placeholder,
	initialValues,
}) => {
	const { values, isOpen, onClick, onClickSingleOption, wrapperRef } =
		useCustomSelect(setSelectedValues, initialValues);

	return (
		<div className={style.select} ref={wrapperRef}>
			<div className={style.selection} onClick={onClick} tabIndex={0}>
				{values.length === 0 ? (
					<p className={style.placeholder}>{placeholder}</p>
				) : (
					<div className={style.value}>
						<img
							className={style.optionImg}
							src={values[0].icon}
							alt="Иконка соцсети"
						/>
						{values[0].value}
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
								onClick={() => onClickSingleOption(option)}
							>
								<div className={style.optionImgTextWrap}>
									<img
										className={`${style.optionImg} ${
											!isSelect && style.optionImgGrayScale
										}`}
										src={option.icon}
										alt="Иконка соцсети"
									/>
									<p className={style.optionText}>{option.value}</p>
								</div>
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
