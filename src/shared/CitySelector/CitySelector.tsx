import { Select } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
import searchIcon from './../../shared/icons/geoMark.svg'
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import './style.scss'
import { filterActions } from '../../store/slices/filter/filterSlice';

export function CitySelector() {
  // const [selectedValue, setSelectedValue] = useState<string | null>('Все города');
  const dispatch = useAppDispatch()
  const city = useAppSelector(state => state.filter.city)

  const handleChange = (value: string | null) => {
    // setSelectedValue(value);
    value && dispatch(filterActions.updateCity(value))
  };

  // useEffect(() => {
  //   console.log('меняю city', city)
  //   updateCity(city)
  // }, [city])

  return (
    <ShadowWrapper >
        <Select 
        value={city} onChange={handleChange}
            data={['Все города', 'Москва', 'Санкт‑Петербург', 'Чернобыль', 'Екатеринбург', 'Тула']}
            className='city-selector'
            leftSection={
                <img 
                src={searchIcon} 
                height={18} 
                width={18} 
                style={{opacity: '0.7'}}
            />}
        />
    </ShadowWrapper>
  );
}

export default CitySelector