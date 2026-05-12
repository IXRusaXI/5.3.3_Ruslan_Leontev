import { Container, Flex, Group, Pill, Text } from "@mantine/core"
import SkillList from "../SkillList/SkillList"
import { filterActions } from "../../store/slices/filter/filterSlice";
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import './style.scss'


function SkillListTemplate() {
    const dispatch = useAppDispatch()
    const defaultSkills = ['TypeScript', 'React', 'Redux']
    const stateSkills = useAppSelector(state => state.filter.skills)

    function onClick() {
        if (defaultSkills === stateSkills) return
        dispatch(filterActions.setSkills(defaultSkills))
    }

    return (<>
        <Container className="skill-template" mb='md'>
            <Group w='100%' justify="space-between">
                <Flex direction="column" gap="xs" w="65%" justify="space-around">
                    <Text size="xs" ta="center">Заготовленный набор ключевых навыков</Text>

                    <Group>
                        <SkillList>
                            {defaultSkills?.map(skill => 
                            <Pill 
                                size='xs'
                                key={skill} 
                                bg='#00000028' 
                            >
                                {skill}
                            </Pill>)}
                        </SkillList>
                    </Group>

                </Flex>

                <Pill
                    c='#ffffff'
                    bg='#3b6fb4' 

                    className="apply-button"
                    onClick={onClick}
                >
                    Применить
                </Pill>
            </Group>
        </Container>
    </>)
}

export default SkillListTemplate