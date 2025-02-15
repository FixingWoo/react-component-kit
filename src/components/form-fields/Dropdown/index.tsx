import React, { useState, forwardRef, useEffect, useRef, useMemo } from 'react';
import cn from 'classnames';

import Error from '@/components/Message/Error';
import styles from './style.module.scss';

export enum Size {
  SIZE_56 = '56',
}

interface IProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  width?: string;
  size?: Size;
  errorMessage?: string;
  disabled?: boolean;
  options: IOption[];
  value: string;
  allText?: string;
  onChange: (value: string) => void;
}

/**
 * - UI / UX 디자인에서 선택 목록 또는 확장성 있는 목록을 표현할 때 사용하는 컴포넌트
 * - Select의 제한을 극복하기 위한 커스텀 컴포넌트
 */
const Dropdown = forwardRef<HTMLDivElement, IProps>(
  (
    {
      width,
      size = Size.SIZE_56,
      className,
      errorMessage,
      disabled,
      options,
      value,
      allText,
      onChange,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState('');

    const memoizedOptions = useMemo(() => {
      if (allText) {
        return [{ value: '', label: allText }, ...options];
      }

      return options;
    }, [options, allText]);

    const handleOpen = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
    };

    const handleLabel = (value: string) => {
      const label = memoizedOptions.find(
        (option) => option.value === value
      )?.label;

      if (label) {
        setSelectedLabel(label);
      } else {
        setSelectedLabel(memoizedOptions[0].label);
      }
    };

    const handleOptionClick = (value: string) => {
      onChange(value);
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    /**
     * 컴포넌트가 마운트 되었을 때, document에 이벤트 리스너를 추가
     * 컴포넌트가 언마운트 되었을 때, document에 이벤트 리스너를 제거
     * 컴포넌트가 언마운트될 때 이벤트 리스너를 제거하지 않으면, DOM 요소는 사라져도 React가 해당 요소를 참조해 가비지 컬렉션 대상에서 제외되어 메모리 누수가 발생할 수 있다.
     */
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      handleLabel(value);
    }, [value]);

    useEffect(() => {
      const selectedIndex = memoizedOptions.findIndex(
        (option) => option.value === value
      );

      if (
        selectedIndex >= 0 &&
        listRef.current &&
        itemRefs.current[selectedIndex]
      ) {
        itemRefs.current[selectedIndex]?.scrollIntoView({
          block: 'start',
        });
      }
    }, [isOpen]);

    return (
      <div className={styles.container} ref={containerRef}>
        <div
          className={cn(
            styles.select,
            {
              [styles.size56]: size === Size.SIZE_56,
              [styles.error]: errorMessage,
              [styles.open]: isOpen,
              [styles.disabled]: disabled,
            },
            className
          )}
          style={
            {
              '--width': width,
            } as React.CSSProperties
          }
          ref={ref}
          {...props}
          onClick={handleOpen}
        >
          <div className={styles.selected}>{selectedLabel}</div>

          {isOpen && (
            <div className={styles.options}>
              <ul className={styles.list} ref={listRef}>
                <div className={cn(styles.wrapper, 'scrollbar')}>
                  {memoizedOptions.map((option, i) => (
                    <li
                      key={option.value}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      className={cn(styles.item, {
                        [styles.selected]: selectedLabel === option.label,
                      })}
                      onClick={() => handleOptionClick(option.value)}
                    >
                      <span>{option.label}</span>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          )}
        </div>

        {errorMessage && !isOpen && <Error message={errorMessage} />}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
