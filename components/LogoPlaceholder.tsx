import React from 'react';

interface LogoPlaceholderProps {
  style?: number;
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ style = 1 }) => {
  const styles = {
    1: <><rect x={5} y={15} width={20} height={20} fill="currentColor"/><rect x={35} y={10} width={110} height={8} fill="currentColor" rx={4}/><rect x={35} y={32} width={80} height={8} fill="currentColor" rx={4}/></>,
    2: <><circle cx={25} cy={25} r={10} fill="currentColor"/><rect x={45} y={10} width={90} height={8} fill="currentColor" rx={4}/><rect x={45} y={32} width={60} height={8} fill="currentColor" rx={4}/></>,
    3: <><rect x={5} y={10} width={140} height={30} rx={15} fill="currentColor"/><rect x={30} y={20} width={90} height={10} fill="#f5f7fa" rx={5}/></>,
    4: <><path d="M5 40L25 10L45 40H5Z" fill="currentColor"/><rect x={55} y={10} width={90} height={8} fill="currentColor" rx={4}/><rect x={55} y={32} width={70} height={8} fill="currentColor" rx={4}/></>,
  };

  return (
    <svg 
      width={150} 
      height={50} 
      viewBox="0 0 150 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-gray-400 hover:text-[--color-text-light] transition-colors duration-300"
    >
      {styles[style as keyof typeof styles]}
    </svg>
  );
};

export default LogoPlaceholder;
