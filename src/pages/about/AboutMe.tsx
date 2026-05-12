import { Container, Title, Text } from '@mantine/core';
import ShadowWrapper from '../../shared/ShadowWrapper/ShadowWrapper';

function AboutMe() {
  return (
    <Container size="sm" py="lg">
            <ShadowWrapper>
                <Title mb='md'>Леонтьев Руслан</Title>
                <Text mb='md'>
                        Я фронтенд‑разработчик с фокусом на React и TypeScript, 
                        сейчас завершаю интенсивный курс KataAcademy и работаю над 
                        финальным проектом на стеке Vite, React, TypeScript, Redux Toolkit и 
                        Mantine UI с интеграцией API hh.ru. Умею проектировать структуру приложения, 
                        настраивать типобезопасное состояние, работать с URL‑параметрами 
                        и строить интерфейсы, полностью повторяющие макет. Пишу unit и 
                        интеграционные тесты на Vitest и React Testing Library, уделяю 
                        внимание качеству кода и предсказуемости поведения интерфейса.
                </Text>

                <Text>
                        Я быстро вхожу в новые технологии, 
                        люблю разбирать задачи на понятные шаги и доводить 
                        их до конца — в том числе в форматах интенсивов и спринтов. 
                        Интересуюсь ИИ‑агентами и вижу своё развитие как 
                        инженера, который совмещает классический фронтенд с 
                        возможностями современных AI‑инструментов для ускорения разработки.
                </Text>
            </ShadowWrapper>
    </ Container>
  )
}

export default AboutMe
