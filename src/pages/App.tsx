import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/layoutPage"
import List from "./main/vacancyListPage"
import VacancyPage from "./vacancy/vacancyPage"
import ErrorPage from "./error/ErrorPage"
import { useEffect } from "react"
import { vacanciesActions } from "../store/slices/vacancies/vacanciesSlice"
import VacanciesData from "./data/vacancies"
import { useAppDispatch } from '../store/typedHooks'
import AboutMe from "./about/AboutMe"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(vacanciesActions.setAllVacancies(VacanciesData))
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            path="" 
            element={<Navigate to="vacancies/moscow" replace />}
          />
          <Route
            path="vacancies"
            element={<Navigate to="moscow" replace />}
          />
          <Route path="vacancies/moscow" element={<List city="Москва" />} />
          <Route path="vacancies/petersburg" element={<List city="Санкт-Петербург" />} />
          <Route path="vacancy/:id" element={<VacancyPage />} errorElement={<ErrorPage />} />
          
          <Route path="about" element={<AboutMe />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
