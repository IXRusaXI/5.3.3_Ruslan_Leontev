import { Stack, Group, Pagination, Flex, Title } from "@mantine/core"
import { Vacancy as VacancyCard } from "../Vacancy/Vacancy"
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import { pageActions } from './../../store/slices/page/pageSlice';


function VacancyList() {
    const dispatch = useAppDispatch();

    const total = useAppSelector(state => state.page.total)
    const activePageList = useAppSelector((state) => state.page.activePageList);
    const activePageNumber = useAppSelector(state => state.page.activePageNumber)

    function setPage(page: number) {
        dispatch(pageActions.setPage(page))
    }

    return (<>
        {activePageList?.length !== 0 && <Stack gap='lg' mt='md'>
            {activePageList?.map(vacancy => <VacancyCard
                key={vacancy.id}
                vacancy={vacancy}
            />)}

            <Group justify='center' mb='xl'>
                <Pagination
                value={activePageNumber}
                onChange={setPage}
                total={total}
                radius={4} withEdges/>
            </Group>
        </Stack>}
    
        {activePageList?.length === 0 && <Flex w="67%">
            <Title 
            order={1}
            m='auto'
            mt='md'
            fw={600} 
            c='#00000050'
            >
            Вакансии по данному запросу не найдены
            </Title>
        </Flex>}
    </>
    )
}

export default VacancyList