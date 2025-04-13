import React from 'react'
import { links } from "../data";
import styled from "styled-components";
import { FaWindowClose } from 'react-icons/fa';

const StyledModal = styled.div`
  position: fixed;
  width: 80%;
  display: flex;
   padding: 1.2rem 1rem; 
  transition: all 0.5s;
  height: fit-content;
`;

const Overlay = styled.div`
background-color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.4s;
  font-size: 3rem;
  /* width: 3rem;
  height: 3rem; */

    cursor: pointer;
`;







function NavModal({onToggle}) {
  return (
    <Overlay>
      <StyledModal>
        <nav onClick={()=>onToggle()} className='flex-1 flex flex-col'>
            
                    {links.map((link)=>{
                        const {id,href,text} = link
                        return <a href={href} key={id} className='font-bold capitalize text-lg tracking-wide hover:text-emerald-900 duration-300'>{text}</a>
                    })}
                    </nav>
        <Button onClick={()=>onToggle()} className='flex-1'><FaWindowClose/></Button>
                </StyledModal>
    </Overlay>
  )
}

export default NavModal


