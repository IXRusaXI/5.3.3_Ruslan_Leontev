import { useAppSelector } from "../../store/typedHooks";

export function getVacancyById(id: string) {
  const allVacancies = useAppSelector((state) => state.vacancy.all);
  return allVacancies.find((vacancy) => vacancy.id === id);
}