import { Tabs } from '@mantine/core';
import { useAppSelector } from '../../store/typedHooks'
import VacancyList from './../../widgets/VacancyList/VacancyList'
import './style.scss'
import { useNavigate, useSearchParams } from 'react-router-dom';

function CityTabs() {
  const city = useAppSelector((state) => state.filter.city);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleTabChange = (value: string | null) => {
    switch (value) {
      case 'Москва': navigate(`/vacancies/moscow?${searchParams.toString()}`); break;
      case 'Санкт-Петербург': navigate(`/vacancies/petersburg?${searchParams.toString()}`);
    }
  };

  return (
    <Tabs value={city} onChange={handleTabChange} w="67%"
      className='city-tabs'
    >
      <Tabs.List>
        <Tabs.Tab value="Москва">Москва</Tabs.Tab>
        <Tabs.Tab value="Санкт-Петербург">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="Москва"><VacancyList /></Tabs.Panel>
      <Tabs.Panel value="Санкт-Петербург"><VacancyList /></Tabs.Panel>
    </Tabs>
  );
}

export default CityTabs