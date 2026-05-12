import { Group, Box, Stack } from '@mantine/core';
import { PageTitle } from './../../widgets/PageTitle/PageTitle'
import { Divider } from '@mantine/core';
import { ContentContainer } from '../../shared/ContentContainer/ContentContainer';
import SkillSettings from '../../widgets/SkillSettings/SkillSettings'

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './../../store/typedHooks'
import { vacanciesActions } from './../../store/slices/vacancies/vacanciesSlice';
import { pageActions } from './../../store/slices/page/pageSlice';
import CityTabs from '../../shared/CityTabs/CityTabs';
import { useQueryParams } from '../../tools/params/ParamTool';
import { filterActions } from '../../store/slices/filter/filterSlice';

interface ListProps {
  city: string
}

function App({city}: ListProps) {
  useQueryParams()

  const dispatch = useAppDispatch()
  const all = useAppSelector(state => state.vacancy.all)
  const skills = useAppSelector(state => state.filter.skills)
  const searchString = useAppSelector(state => state.filter.searchString)

  const activePageNumber = useAppSelector(state => state.page.activePageNumber)
  const total = useAppSelector(state => state.page.total)
  const filteredList = useAppSelector(state => state.vacancy.filtered)
  const pageLimit = 10

  useEffect(() => {
    dispatch(filterActions.updateCity(city))
    if (all.length !== 0) dispatch(vacanciesActions.filterVacancies({searchString, skills, city}))
  }, [searchString, skills, city, all])

  useEffect(() => {
    if (all.length === 0) return

    const integerPagesNumber = filteredList.length / pageLimit
    const floatPagesNumber = filteredList.length % pageLimit

    if (integerPagesNumber < 0 && floatPagesNumber > 0) {
      dispatch(pageActions.setTotalPages(1))
      return
    } 
    if (integerPagesNumber > 0 && floatPagesNumber > 0) {
      dispatch(pageActions.setTotalPages(integerPagesNumber + 1))
      return
    } 
    dispatch(pageActions.setTotalPages(filteredList.length / pageLimit))
  }, [filteredList])

  useEffect(() => {
    dispatch(pageActions.setActivePageList({filtered: filteredList, page: activePageNumber}))
  }, [activePageNumber, total])

  return (
    <Box bg='#F6F6F7' mih='100vh' pb='xl' >
      <ContentContainer>
        <PageTitle />
      </ContentContainer>

      <Divider color='#5050552c' />

      <ContentContainer>
        <Group gap={0} justify='space-between' align='top'>
          <Stack gap='sm' w="30%" >
            <SkillSettings />
          </Stack>

          <CityTabs />
        </Group>
      </ContentContainer>
    </ Box>
  )
}

export default App
