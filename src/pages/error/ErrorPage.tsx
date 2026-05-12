import { Button, Container, Group, Image, Stack, Text, Title } from "@mantine/core"
import ShadowWrapper from "../../shared/ShadowWrapper/ShadowWrapper"
import ErrorImage from './../../assets/ErrorKitty.png'
import { useNavigate } from "react-router-dom";


function Layout() {
    const navegate = useNavigate();

  return (
    <>
        <Container size="sm" py="lg" mt="xl">
            <ShadowWrapper>
                <Stack>
                    <Group justify="space-between">
                        <Stack w="70%">
                            <Title order={1} w="80%">Упс! Такой страницы не существует</Title>
                            <Text>Давайте перейдём к началу.</Text>
                        </Stack>
                            <Button onClick={() => navegate('/')}>На главную</Button>
                    </Group>

                    <Image src={ErrorImage} />
                </Stack>
            </ShadowWrapper>
        </Container>
    </>
  )
}

export default Layout
