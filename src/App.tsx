import { ReactNode } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './App.css'
import IndexFoto from './assets/images/index-photo.jpg' 

function App() {

  return (
    <div className='main-container'>
      <TopBar />
      <div className='content-container'>
        <div className='main-text-container'>
          <h1 className='main-title'>Cuidando do seu melhor amigo em casa.</h1>
          <p>Acredito que todos os animais merecem uma vida longa, saudável e feliz,
            e estou aqui para tornar esse sonho realidade.
            Com um atendimento humanizado e personalizado, ofereço aos meus pacientes os melhores cuidados veterinários. Porque para mim, cada animal é único e especial.</p>
            <Spacer/>
          <button>Agende sua consulta</button>
        </div>
        <div className='content'>
          <img className="main-image" src={IndexFoto} />
        </div>
      </div>
    </div>
  )
}

function TopBar() {
  return <div className='top-bar'>
    <a href="/" className="logo" />
    <Menu>
      <MenuItem onClick={() => { }}>
        Home
      </MenuItem>
      <MenuItem onClick={() => { }}>
        Serviços
      </MenuItem>
      <MenuItem onClick={() => { }}>
        Sobre
      </MenuItem>
    </Menu>
    <Spacer />
    <IconMenu />
  </div>
}

function Spacer() {
  return <div className='menu-spacer'></div>
}

function IconMenu() {

  const sxIcon = { fontSize: 35, color: "#94495d" }
  return (
    <ul className='icon-menu'>
      <li className='icon-item' >
        <InstagramIcon sx={sxIcon} />
      </li>
      <li className='icon-item'>
        <LinkedInIcon sx={sxIcon} />
      </li>
      <li className='icon-item'>
        <WhatsAppIcon sx={sxIcon} />
      </li>
    </ul>
  )
}

interface MenuProps {
  children: ReactNode[];
}

function Menu({ children }: MenuProps) {
  return <ul className='menu'>
    {children}
  </ul>
}


interface MenuItemProps {
  onClick: () => void;
  children: string
}

function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <li>
      <a className='menu-item poppins-bold' onClick={onClick}>{children}</a>
    </li>
  );
}

export default App
