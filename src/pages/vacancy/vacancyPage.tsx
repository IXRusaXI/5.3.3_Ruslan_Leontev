import { useParams } from "react-router-dom";
import { Vacancy as VacancyCard } from "../../widgets/Vacancy/Vacancy"
import { Container } from "@mantine/core";
import { type Vacancy } from './../types/types'
import { getVacancyById } from '../../tools/vacancy/VacancyTool'


function VacancyPage() {
    const { id } = useParams();
    let vacancy: Vacancy | undefined;

    if (id) vacancy = getVacancyById(id)

    

    return (
        vacancy && <Container size="sm" py="lg">
            <VacancyCard
                key={id}
                vacancy={vacancy}
            />
        </Container>
        

    )
}

export default VacancyPage
