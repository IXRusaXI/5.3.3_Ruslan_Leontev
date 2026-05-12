import { Box, Group, Text, Image } from '@mantine/core';
import aboutMeIcon from './../../shared/icons/aboutMe.svg'

import { NavLink } from 'react-router-dom';
import './style.scss'

export function MainMenu() {
  return (
      <Box 
        ta="center" 
        style={{ 
          position: 'absolute', 
          left: '50%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Group align='center' ta='center'>
            <Group gap='xs' pos='relative' mr='md'>
                <NavLink to='vacancies' style={{textDecoration: 'none', color: '#00000050'}} className={({isActive}) => (isActive ? 'active-link' : '')}>
                  <Text size="lg" fw={500} >
                    Вакансии FE
                  </Text>
                </NavLink>
            </Group>

            <Group c='ultra-light' gap='xs' pos='relative'>
                <Image src={aboutMeIcon} w='xl' h='xl'/>

                <NavLink to='about' style={{textDecoration: 'none', color: '#00000050'}} className={({isActive}) => (isActive ? 'active-link' : '')}>
                  <Text size="lg" fw={500} >
                    Обо мне
                  </Text>
                </NavLink>
            </Group>
        </Group>
      </Box>
  );
}

export default MainMenu